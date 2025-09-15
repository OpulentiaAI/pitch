export function SectionS8Daytona() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Daytona as Execution Plane</span>
        <span className="text-[#878787]">Snapshots • Sessions • Previews</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Snapshots/Templates</h3>
            <p className="text-[#9A9A9A] text-sm">Boot fast from known baselines with environment JSON.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Sessions/Commands</h3>
            <p className="text-[#9A9A9A] text-sm">Long‑running exec with streaming logs and heartbeats.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Previews/Artifacts</h3>
            <p className="text-[#9A9A9A] text-sm">Promote links and build outputs to first‑class artifacts.</p>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Treat compute like a clean room. Snapshots boot fast. Sessions run long. Logs stream in real time. Previews become artifacts. No mystery servers, no tribal knowledge. Just repeatable runs you can inspect.
        </p>
      </div>
    </div>
  );
}
