export function SectionInsightsReasoning() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Reasoning Models — Cost Reality</span>
        <span className="text-[#878787]">Tokens • Time • Budget</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <h2 className="text-[28px] md:text-[54px] font-medium text-center leading-tight">
          Reasoning costs time and compute
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl md:text-2xl mb-2">Avg. output tokens</h3>
            <p className="text-[#D6D6D6] text-lg">Non‑reasoning: ~10M</p>
            <p className="text-[#D6D6D6] text-lg">Reasoning: ~78M</p>
            <p className="text-[#9A9A9A] text-sm mt-2">≈7–10× increase on representative models</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl md:text-2xl mb-2">Implication</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Strict budgets and caps per step</li>
              <li>Prefer short “think” with deterministic checks</li>
              <li>Promote only on pass; revert fast</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl md:text-2xl mb-2">Why it matters</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Reasoning ≠ free — govern cost/latency</li>
              <li>Artifacts let you audit spend per run</li>
              <li>Plan → Act → Verify keeps costs bounded</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-[#8A8A8A]">
          Source: Artificial Analysis independent benchmarking; Artificial Analysis Intelligence Index (non‑exhaustive, representative models)
        </p>
      </div>
    </div>
  );
}
