export function SectionS9Optimizations() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Guide — 3 SOTA Optimizations with Daytona</span>
        <span className="text-[#878787]">Operational excellence patterns</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <div className="text-[#8A8A8A] text-xs mb-2">#1</div>
            <h3 className="text-xl md:text-2xl mb-3">Snapshot Ring + Mapping</h3>
            <p className="text-[#9A9A9A] text-sm">Map template→snapshot by env JSON; keep a candidate ring and consistent hashing for capacity and resilience.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <div className="text-[#8A8A8A] text-xs mb-2">#2</div>
            <h3 className="text-xl md:text-2xl mb-3">Sessions + Streaming</h3>
            <p className="text-[#9A9A9A] text-sm">Use session exec for long tasks; stream logs to a webhook; heartbeat; gate on health checks.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <div className="text-[#8A8A8A] text-xs mb-2">#3</div>
            <h3 className="text-xl md:text-2xl mb-3">Artifact‑First Previews</h3>
            <p className="text-[#9A9A9A] text-sm">Emit preview links as artifacts; bulk download build outputs with dev URLs; avoid shell‑only reviews.</p>
          </div>
        </div>
        <div className="mt-8 max-w-4xl mx-auto text-[#B4B4B4] text-sm md:text-base px-4 space-y-3">
          <p>Three upgrades that pay rent:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Map template→snapshot via JSON and keep a candidate ring. Scale and survive hiccups without code changes.</li>
            <li>Use sessions for anything non‑trivial. Stream logs to a webhook. Heartbeat. Gate progression on health.</li>
            <li>Make previews and build outputs artifacts. Review in a link, not a shell. Promote when humans nod, not guess.</li>
          </ol>
          <p className="text-[#8A8A8A]">Field Notes: Redact env, cap resources, and stop/archive by default.</p>
        </div>
      </div>
    </div>
  );
}
