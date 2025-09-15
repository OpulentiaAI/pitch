export function SectionS11Evidence() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Artifacts & Checks (Evidence beats vibes)</span>
        <span className="text-[#878787]">Artifacts • Checks</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Artifacts</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>answer.md</li>
              <li>citations.json</li>
              <li>plan.json</li>
              <li>workflow_result.json</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Checks</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>contains_all / regex</li>
              <li>schema / table_schema</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          If it’s not in an artifact, it didn’t happen. Checks aren’t bureaucracy—they’re how you tell progress from luck. Tighten specs, raise the pass bar, and watch the system climb.
        </p>
      </div>
    </div>
  );
}
