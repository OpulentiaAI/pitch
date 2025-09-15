export function SectionInsightsCodingMarket() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Coding Agents — Adoption & Launches</span>
        <span className="text-[#878787]">Market snapshot</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Adoption</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Copilot and Cursor lead usage</li>
              <li>~50% of surveyed teams use or consider Cursor</li>
              <li>Claude Code and Gemini Assist rising</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Launch velocity</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Q2 ’25: 12 major coding agent launches</li>
              <li>CLI and “background agents” trend</li>
              <li>Cloud and IDE integrations in parallel</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-[#8A8A8A]">Source: Artificial Analysis AI Adoption Survey (H1 ’25); product tracking (non‑exhaustive)</p>
      </div>
    </div>
  );
}
