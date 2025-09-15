export function SectionInsightsThemes() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Q2 ’25 — Key Themes</span>
        <span className="text-[#878787]">Agentic by default</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Shifts</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Apps move to agentic workflows</li>
              <li>Coding agents surge across CLIs/IDEs</li>
              <li>Training emphasizes long‑horizon tool use</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Impacts</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Costs rise from tokens + tools</li>
              <li>Deep research APIs: single query up to ~$28 (tests)</li>
              <li>MCP ecosystem expands first/third‑party servers</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-[#8A8A8A]">
          Source: Artificial Analysis — Q2 ’25 Agents & Applications report (non‑exhaustive)
        </p>
      </div>
    </div>
  );
}
