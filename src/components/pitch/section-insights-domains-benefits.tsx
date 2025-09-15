export function SectionInsightsDomainsBenefits() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Agent Domains & Benefits</span>
        <span className="text-[#878787]">Where it works today</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Domains</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Coding</li>
              <li>Deep research</li>
              <li>Computer use (desktop/browser)</li>
              <li>Customer support</li>
              <li>Sales</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Benefits vs static flows</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Dynamic planning and task tracking</li>
              <li>Integrates many systems without rigid chains</li>
              <li>Natural collaboration (HITL or agent swarms)</li>
              <li>Graceful recovery from novel failure modes</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-[#8A8A8A]">Source: Artificial Analysis Q2; Anthropic agents guide (summarized)</p>
      </div>
    </div>
  );
}
