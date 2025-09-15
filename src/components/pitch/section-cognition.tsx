export function SectionCognition() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Cognition — Talking Points & Failure Modes</span>
        <span className="text-[#878787]">Think with rails</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Thinking Patterns</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>WSIC: write • select • compress • isolate</li>
              <li>Autonomy sliders with verify loops</li>
              <li>Budgeted reasoning with checkpoints</li>
              <li>Tool curation before execution</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Failure Modes</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Poison, distraction, confusion, clash</li>
              <li>Context bloat → compress or isolate</li>
              <li>Spec drift → tighten checks</li>
              <li>Tool flakiness → sandbox + retries</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-[#B4B4B4] text-sm md:text-base">
          Cognition is engineered: plan with caps, verify deterministically, and keep effects at the edges.
        </p>
      </div>
    </div>
  );
}
