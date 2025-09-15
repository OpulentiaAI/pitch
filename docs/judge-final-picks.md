# Judge Results — Final Picks and Enhancements

This document records the pairwise A/B comparisons using the LLM‑as‑a‑Judge harness (aggregate.js) and final selections applied to the deck.

Status gate: Some comparisons flagged NEEDS_MORE_EVIDENCE due to grounding coverage below 0.85. Layout, cognition, and narrative improvements are still applied; evidence tasks are listed below.

## S2 — Core Agentic Pillars (Winner: B)
- Winner rationale: Shorter H1 improves 3‑sec comprehension and scan path; layout delta +0.8.
- Applied edits:
  - Headline: “Plan & Constraints • Orchestrate & Tools • Evidence & Learn”
  - Increased column spacing to 24px (visual polish)
- Evidence actions: Add citations to systemPatterns.md and hardened tooling spec.

## S6 — Rollout & Guardrails (Winner: B)
- Winner rationale: Headline foregrounds guardrails; clearer CTA to gate/promote/revert.
- Applied edits:
  - Headline: “Rollout with Guardrails”
  - Add hint to show thresholds (p95 latency, tokens) inline
- Evidence actions: Cite rollout module proposal section.

## S7 — Temporal Control Plane (Winner: B)
- Winner rationale: Inline boundary phrasing (Workflows decide; activities do) boosts clarity.
- Applied edits:
  - Headline: “Temporal: Control Plane (Workflows decide; activities do)”
- Evidence: Linked Temporal docs (workflow execution, continue_as_new, failure detection/heartbeats).

## S3 — Patterns Library (Winner: B)
- Winner rationale: Shorter H1 and 3‑sec comprehension win; A had slightly better narrative.
- Applied edits:
  - Header: “Plan • Act • Verify • Learn”
- Evidence: Temporal workflow execution doc.

## S5 — Cursor Thesis (Winner: B)
- Winner rationale: Shorter thesis improves scanning while keeping bullets.
- Applied edits:
  - H2: “Steerability + Horizons + Feedback → Online RL”
- Evidence: Temporal workflow execution and Argo canary docs.

## Global Enhancements
- Add numeric examples for canary gates and thresholds on S6.
- Enlarge any legends to ≥12px where present; ensure ≥4.8 contrast.
- Add at least two claim–evidence tuples per pillar slide; store in `scripts/judge/claims/*.json`.

## Outputs
Aggregated JSON in `scripts/judge/outputs/` for S2, S3, S5, S6, S7, S11 with per‑criterion picks, deltas, and gating status.
