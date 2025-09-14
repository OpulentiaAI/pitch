export function SectionRubric() {
  const rubric = {
    version: "1.0",
    targets: [
      { id: "planning_quality", weight: 1.6, threshold: 8.5 },
      { id: "orchestration_determinism", weight: 1.7, threshold: 9.0 },
      { id: "artifact_auditability", weight: 1.5, threshold: 9.0 },
      { id: "learning_signal_integrity", weight: 1.4, threshold: 8.5 },
      { id: "rollout_safety", weight: 1.3, threshold: 9.0 },
    ],
    evidence: [
      "plan.json",
      "workflow_result.json",
      "answer.md",
      "citations.json",
      "results.csv",
    ],
    gates: {
      canary: {
        max_percent: 0.05,
        metrics: ["pass_rate", "latency", "errors", "tokens", "safety"],
      },
      promote: { min_pass_rate: 0.9, max_latency_p95_ms: 5000 },
    },
  };

  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Verification Rubric (Machine‑Readable)</span>
        <span className="text-[#878787]">Print per demo; gate on metrics</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <pre className="bg-[#111] border border-border p-4 md:p-6 overflow-auto text-xs md:text-sm leading-relaxed">
{JSON.stringify(rubric, null, 2)}
        </pre>
        <ol className="mt-6 text-[#B4B4B4] text-sm md:text-base list-decimal pl-6 space-y-1 max-w-3xl mx-auto">
          <li>Print this rubric with each demo; track scores over time</li>
          <li>Gate canary rollout on pass_rate + safety</li>
          <li>Promote only when metrics hold for N runs across diverse tasks</li>
        </ol>
      </div>
    </div>
  );
}
