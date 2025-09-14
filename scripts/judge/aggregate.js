#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function loadJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function aggregatePair({ id, variantAPath, variantBPath, judgePath, outDir }) {
  const A = loadJSON(variantAPath);
  const B = loadJSON(variantBPath);
  const judge = loadJSON(judgePath);

  const criteria = Object.keys(judge.criteria);
  const panel = {};
  let confSum = 0;
  let confCount = 0;

  for (const c of criteria) {
    const a = judge.criteria[c].A;
    const b = judge.criteria[c].B;
    const pick = (b.score > a.score ? 'B' : (a.score > b.score ? 'A' : 'tie'));
    const delta = Number((Math.abs(b.score - a.score)).toFixed(2));
    const confidence = Number(((a.confidence + b.confidence) / 2).toFixed(2));
    const rationale = judge.criteria[c].rationale || '';
    panel[c] = { pick, delta, rationale, confidence };
    confSum += confidence;
    confCount += 1;
  }

  const meanConfidence = Number((confSum / confCount).toFixed(2));
  const groundingCoverageA = judge.grounding_coverage?.A ?? 0;
  const groundingCoverageB = judge.grounding_coverage?.B ?? 0;

  // Borda count
  let scoreA = 0;
  let scoreB = 0;
  for (const c of criteria) {
    const p = panel[c].pick;
    if (p === 'A') scoreA += 1; else if (p === 'B') scoreB += 1;
  }
  let winner = scoreB > scoreA ? 'B' : (scoreA > scoreB ? 'A' : 'tie');

  // Tie policy: prefer higher grounding, then accessibility; else tiebreaker edit
  if (winner === 'tie') {
    if (groundingCoverageB > groundingCoverageA) winner = 'B';
    else if (groundingCoverageA > groundingCoverageB) winner = 'A';
    else if (panel.accessibility) {
      const acc = panel.accessibility.pick;
      if (acc !== 'tie') winner = acc;
    }
  }

  const needsMoreEvidence = (meanConfidence < 0.6) || (Math.max(groundingCoverageA, groundingCoverageB) < 0.85);

  const loser = winner === 'A' ? 'B' : winner === 'B' ? 'A' : 'tie';
  const loserEdit = judge.loser_edit || {
    headline: 'Shorten headline to ≤60 chars',
    layout: 'Increase legend size to ≥12px and add 16px spacing',
    evidence: 'Add two citations with line anchors to code/docs',
  };

  const out = {
    id,
    winner,
    panel,
    mean_confidence: meanConfidence,
    grounding_coverage: { A: groundingCoverageA, B: groundingCoverageB },
    status: needsMoreEvidence ? 'NEEDS_MORE_EVIDENCE' : 'OK',
    notes: judge.notes || '',
    loser_edit: loser === 'tie' ? undefined : { for: loser, ...loserEdit },
    variant_A: A,
    variant_B: B,
  };

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${id}.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`Aggregated ${id} → ${outPath}`);
}

function main() {
  const root = path.resolve(__dirname, '../../');
  const pairs = [
    {
      id: 'S2',
      variantAPath: path.join(root, 'scripts/judge/fixtures/variants/S2.A.json'),
      variantBPath: path.join(root, 'scripts/judge/fixtures/variants/S2.B.json'),
      judgePath: path.join(root, 'scripts/judge/fixtures/judges/S2.json'),
    },
    {
      id: 'S6',
      variantAPath: path.join(root, 'scripts/judge/fixtures/variants/S6.A.json'),
      variantBPath: path.join(root, 'scripts/judge/fixtures/variants/S6.B.json'),
      judgePath: path.join(root, 'scripts/judge/fixtures/judges/S6.json'),
    },
    {
      id: 'S7',
      variantAPath: path.join(root, 'scripts/judge/fixtures/variants/S7.A.json'),
      variantBPath: path.join(root, 'scripts/judge/fixtures/variants/S7.B.json'),
      judgePath: path.join(root, 'scripts/judge/fixtures/judges/S7.json'),
    },
  ];

  const outDir = path.join(root, 'scripts/judge/outputs');
  for (const p of pairs) aggregatePair({ ...p, outDir });
}

if (require.main === module) main();
