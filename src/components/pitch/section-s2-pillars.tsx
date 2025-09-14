export function SectionS2Pillars() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Core Agentic Pillars</span>
        <span className="text-[#878787]">Strategic triads • Rachel‑style</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <h2 className="px-4 md:px-0 text-[28px] md:text-[54px] font-medium text-center leading-tight">
          Planning & Constraints • Orchestration & Tools • Evidence & Learning
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Planning & Constraints</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Budgets and caps shape reasoning depth</li>
              <li>Checkpoints, retries, and verification gates</li>
              <li>Tight specs to prevent drift</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Orchestration & Tools</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Deterministic control, Temporal‑native</li>
              <li>Browser, code, data, sandbox compute</li>
              <li>Namespaced, audited tool usage</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Evidence & Learning</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Ship artifacts: files, previews, logs</li>
              <li>Implicit/explicit feedback loops</li>
              <li>Canary rollout and policy iteration</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Pillars, not truisms. Planning sets intent, constraints enforce quality, orchestration gives repeatability, artifacts ground truth, and learning closes the loop. If a pillar is missing, the agent regresses to a toy.
        </p>
      </div>
    </div>
  );
}
