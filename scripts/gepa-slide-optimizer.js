#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// GEPA-style slide optimizer: evaluates current slide, proposes variants, selects winner
function optimizeSlide({ slideId, currentSlidePath, evalCriteria }) {
  console.log(`Optimizing ${slideId}...`);
  
  // Load current slide content
  const current = JSON.parse(fs.readFileSync(currentSlidePath, 'utf-8'));
  
  // Generate 3 contrastive variants focusing on clarity, grounding, and 3-sec comprehension
  const variants = generateVariants(current, evalCriteria);
  
  // Simulate LLM judge evaluation (simplified)
  const evalResults = evaluateVariants(variants, evalCriteria);
  
  // Select winner based on weighted score
  const winner = selectWinner(evalResults);
  
  // Output optimization report
  const report = {
    slideId,
    current,
    variants,
    evaluations: evalResults,
    winner,
    rationale: winner.rationale,
    improvements: winner.improvements
  };
  
  const outPath = path.join(__dirname, `../outputs/optimized-${slideId}.json`);
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Optimization complete for ${slideId} → ${outPath}`);
  
  return winner;
}

function generateVariants(current, criteria) {
  const variants = [];
  
  // Variant A: Focus on clarity and scanability
  variants.push({
    id: `${current.id}.A`,
    headline: shortenHeadline(current.headline),
    body: emphasizeKeyPoints(current.body),
    evidence: current.evidence || [],
    visual: { ...current.visual, improvements: ['shorter_headline', 'better_hierarchy'] }
  });
  
  // Variant B: Focus on grounding and evidence
  variants.push({
    id: `${current.id}.B`,
    headline: addEvidenceCues(current.headline),
    body: strengthenGrounding(current.body),
    evidence: expandEvidence(current.evidence || []),
    visual: { ...current.visual, improvements: ['evidence_inline', 'source_links'] }
  });
  
  // Variant C: Focus on narrative and cognition
  variants.push({
    id: `${current.id}.C`,
    headline: enhanceNarrative(current.headline),
    body: improveComprehension(current.body),
    evidence: current.evidence || [],
    visual: { ...current.visual, improvements: ['narrative_flow', 'cognitive_aids'] }
  });
  
  return variants;
}

function evaluateVariants(variants, criteria) {
  return variants.map(variant => {
    const scores = {};
    
    // Evaluate each criterion
    criteria.forEach(criterion => {
      scores[criterion] = Math.random() * 2 + 7; // Simulated 7-9 score
    });
    
    return {
      variant: variant.id,
      scores,
      totalScore: Object.values(scores).reduce((a, b) => a + b, 0) / criteria.length
    };
  });
}

function selectWinner(evaluations) {
  return evaluations.reduce((best, current) => 
    current.totalScore > best.totalScore ? current : best
  );
}

// Helper functions
function shortenHeadline(headline) {
  return headline.length > 60 ? headline.substring(0, 57) + '...' : headline;
}

function emphasizeKeyPoints(body) {
  return body.replace(/(\w+):/g, '**$1**:');
}

function addEvidenceCues(headline) {
  return `${headline} (Evidence-backed)`;
}

function strengthenGrounding(body) {
  return body + ' [See: Temporal/Daytona docs]';
}

function enhanceNarrative(headline) {
  return `${headline} → Production-Ready`;
}

function improveComprehension(body) {
  return body.replace(/complex/g, 'simple');
}

function expandEvidence(evidence) {
  return [...evidence, 'https://docs.temporal.io/workflow-execution'];
}

// Main optimization function
function optimizeAllSlides() {
  // Create outputs directory if it doesn't exist
  const outDir = path.join(__dirname, '../outputs');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  
  const slides = [
    { id: 'S1', criteria: ['clarity', 'impact', 'narrative'] },
    { id: 'S4', criteria: ['contrast', 'grounding', 'comprehension'] },
    { id: 'S8', criteria: ['technical_depth', 'evidence', 'actionability'] },
    { id: 'S9', criteria: ['specificity', 'applicability', 'clarity'] },
    { id: 'S10', criteria: ['utility', 'integration', 'safety'] },
    { id: 'S12', criteria: ['completeness', 'clarity', 'actionability'] },
    { id: 'Rubric', criteria: ['readability', 'completeness', 'actionability'] },
    { id: 'Commands', criteria: ['usability', 'completeness', 'clarity'] }
  ];
  
  const results = [];
  
  slides.forEach(slide => {
    try {
      // Generate synthetic current slide data since actual files don't exist
      const currentSlide = {
        id: slide.id,
        headline: generateSyntheticHeadline(slide.id),
        body: generateSyntheticBody(slide.id),
        evidence: generateSyntheticEvidence(slide.id),
        visual: { pattern_tags: [getPatternTag(slide.id)], issues: [] }
      };
      
      const winner = optimizeSlide({
        slideId: slide.id,
        currentSlide,
        evalCriteria: slide.criteria,
        outDir
      });
      
      results.push({ slideId: slide.id, winner: winner.variant, improvements: winner.improvements });
    } catch (error) {
      console.error(`Failed to optimize ${slide.id}:`, error);
      results.push({ slideId: slide.id, error: error.message });
    }
  });
  
  // Summary report
  const summaryPath = path.join(outDir, 'optimization-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));
  console.log(`Optimization summary saved to ${summaryPath}`);
}

function generateSyntheticHeadline(slideId) {
  const headlines = {
    'S1': 'Agentic Foundations & Self‑Evolving Systems',
    'S4': 'Survey — Self‑Evolving Agents',
    'S8': 'Daytona as Execution Plane',
    'S9': 'Guide — 3 SOTA Optimizations with Daytona',
    'S10': 'Memory & Context (Optional, Safe)',
    'S12': 'End‑to‑End Demo Path',
    'Rubric': 'Verification Rubric (Machine‑Readable)',
    'Commands': 'Appendix — Quick Commands'
  };
  return headlines[slideId] || 'Untitled Slide';
}

function generateSyntheticBody(slideId) {
  const bodies = {
    'S1': 'Plan → Act → Verify → Learn (Cursor‑style online RL in practice)',
    'S4': 'Offline improvements vs Online signals',
    'S8': 'Snapshots/templates → Sessions/commands → Previews/artifacts',
    'S9': 'Snapshot ring, sessions + streaming, artifact‑first previews',
    'S10': 'Recall / Upsert with mem0',
    'S12': 'Four-lane journey: trigger → checks → optimize → rollout',
    'Rubric': 'Targets, evidence, gates with JSON schema',
    'Commands': 'Temporal smoke, eval run, checks, GEPA optimize'
  };
  return bodies[slideId] || 'Slide body';
}

function generateSyntheticEvidence(slideId) {
  const evidence = {
    'S1': [],
    'S4': ['https://docs.temporal.io/workflow-execution'],
    'S8': ['https://daytona.io/docs/en/getting-started/'],
    'S9': ['https://daytona.io/docs/en/getting-started/'],
    'S10': ['https://docs.temporal.io/workflow-execution'],
    'S12': ['https://argo-rollouts.readthedocs.io/en/stable/features/analysis/'],
    'Rubric': [],
    'Commands': []
  };
  return evidence[slideId] || [];
}

function getPatternTag(slideId) {
  const tags = {
    'S1': 'gradient_hero',
    'S4': 'split_panel_comparison',
    'S8': 'three_element_connectivity',
    'S9': 'numbered_blueprint_cards',
    'S10': 'two_column_capability_split',
    'S12': 'four_band_journey_map',
    'Rubric': 'data_insight_action',
    'Commands': 'code_block_list'
  };
  return tags[slideId] || 'default';
}

if (require.main === module) {
  optimizeAllSlides();
}