export function SectionOpulentEnd() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Opulent OS — Where We Go Next</span>
        <span className="text-[#878787]">Pilot → codify → scale</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-6"><h3 className="text-xl mb-2">Pilot</h3><p className="text-[#9A9A9A] text-sm">Spin up Temporal + Daytona; run a benchmark slice; ship artifacts.</p></div>
          <div className="border border-border bg-[#121212] p-6"><h3 className="text-xl mb-2">Codify</h3><p className="text-[#9A9A9A] text-sm">Checks, budgets, and policies in repo; version everything.</p></div>
          <div className="border border-border bg-[#121212] p-6"><h3 className="text-xl mb-2">Scale</h3><p className="text-[#9A9A9A] text-sm">Canary‑gated improvements; dashboards for pass rate, p95 latency, tokens, safety.</p></div>
        </div>
        <p className="mt-10 text-center text-[#B4B4B4] text-sm md:text-base">
          Let’s introduce agents, then graduate to frontier agents — with Opulent OS as the backbone.
        </p>
      </div>
    </div>
  );
}
