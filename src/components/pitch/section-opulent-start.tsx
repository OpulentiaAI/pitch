export function SectionOpulentStart() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Opulent OS — Temporal‑native Agent Orchestration</span>
        <span className="text-[#878787]">Durability • Governance • Speed</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <h1 className="text-[40px] md:text-[84px] font-medium text-center leading-tight">
          Introduce agents the right way — durable, governable, fast
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base">
          Opulent OS turns agent demos into production systems: Temporal‑native workflows, artifact‑first outputs, evaluation‑gated improvements, and safe rollout.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-6"><h3 className="text-xl mb-2">Durability</h3><p className="text-[#9A9A9A] text-sm">Deterministic workflows, retries, and histories.</p></div>
          <div className="border border-border bg-[#121212] p-6"><h3 className="text-xl mb-2">Control</h3><p className="text-[#9A9A9A] text-sm">Budgets, tool contracts, artifacts, and canaries.</p></div>
          <div className="border border-border bg-[#121212] p-6"><h3 className="text-xl mb-2">Learning</h3><p className="text-[#9A9A9A] text-sm">Offline checks + online signals with versioned policies.</p></div>
        </div>
      </div>
    </div>
  );
}
