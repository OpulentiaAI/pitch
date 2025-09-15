export function SectionInsightsWhatAgents() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>What are agents?</span>
        <span className="text-[#878787]">Loop • Tools • Completion</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Definition</h3>
            <p className="text-[#9A9A9A] text-sm">LLM‑driven systems that plan, use tools, and act autonomously to complete tasks end‑to‑end.</p>
            <ul className="mt-3 text-[#9A9A9A] text-sm space-y-2">
              <li>Dynamically direct their own processes/tool usage</li>
              <li>Decide when a task is “complete”</li>
              <li>Engage humans in‑the‑loop when helpful</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Toolset</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Filesystem / code exec / API integrations</li>
              <li>MCP servers and domain tools</li>
              <li>Desktop/browser automation where allowed</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-[#8A8A8A]">Source: Anthropic “Building effective agents”; company docs (summarized)</p>
      </div>
    </div>
  );
}
