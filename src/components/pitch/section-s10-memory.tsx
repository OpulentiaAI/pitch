export function SectionS10Memory() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Memory & Context (Optional, Safe)</span>
        <span className="text-[#878787]">Recall • Upsert</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Recall</h3>
            <p className="text-[#9A9A9A] text-sm">mem0_query_graph with parallel planning; summarize hits.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Upsert</h3>
            <p className="text-[#9A9A9A] text-sm">mem0_upsert entities/edges; noop when unconfigured.</p>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Memory is a multiplier, not a crutch. Query graphs in parallel with planning. If keys aren’t present, noop. Agents that degrade gracefully are the ones people trust.
        </p>
      </div>
    </div>
  );
}
