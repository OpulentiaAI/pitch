export function SectionS12Demo() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>End‑to‑End Demo Path</span>
        <span className="text-[#878787]">Journey lanes</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Lane A</h3>
            <p className="text-[#9A9A9A] text-sm">Trigger plan→act on a benchmark slice</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Lane B</h3>
            <p className="text-[#9A9A9A] text-sm">Run deterministic checks; collect CSV/JSON</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Lane C</h3>
            <p className="text-[#9A9A9A] text-sm">GEPA optimize addendum; review diff; optionally apply</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Lane D</h3>
            <p className="text-[#9A9A9A] text-sm">Canary rollout toggles; monitor KPIs; promote or revert</p>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Demo the practice, not the promise. Run a slice, score it, optimize the addendum, and gate a canary promotion. Show the controls; show the receipts.
        </p>
      </div>
    </div>
  );
}
