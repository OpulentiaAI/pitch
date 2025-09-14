export function SectionS6Rollout() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Rollout with Guardrails</span>
        <span className="text-[#878787]">Constraint‑reality bridging</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6 md:p-8 opacity-50">
            <h3 className="text-xl md:text-2xl mb-3">Ideal</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Always‑correct</li>
              <li>Instant learning</li>
              <li>Zero risk</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Reality</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Canary %, budgets, tokens</li>
              <li>Latency and safety thresholds</li>
              <li>Revert in one click</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Production is where good ideas go to fail—unless you gate them. Run 1–5% canaries. Watch pass rate, p95 latency, error bands, token spend, and safety. Promote on proof. Revert in one click. Confidence comes from controls.
        </p>
      </div>
    </div>
  );
}
