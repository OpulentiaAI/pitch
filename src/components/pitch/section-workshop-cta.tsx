export function SectionWorkshopCTA() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Workshop — Claude Code × Daytona</span>
        <span className="text-[#878787]">Sign up</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <h2 className="text-[28px] md:text-[54px] font-medium text-center leading-tight">
          Build, evaluate, and canary‑rollout a production agent in 90 minutes
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl mb-2">When</h3>
            <p className="text-[#9A9A9A] text-sm">TBD — add date/time</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl mb-2">Prerequisites</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>GitHub repo access</li>
              <li>API keys for LLM provider</li>
              <li>Daytona sandbox account</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl mb-2">You’ll ship</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Artifacts (plan.json, results.csv)</li>
              <li>GEPA‑optimized addendum</li>
              <li>Canary toggles + KPIs</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block border border-border bg-[#111] px-6 py-3 text-sm underline">Request invite</a>
        </div>
      </div>
    </div>
  );
}
