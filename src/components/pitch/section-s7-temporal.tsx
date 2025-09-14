export function SectionS7Temporal() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Temporal: Control Plane (Workflows decide; activities do)</span>
        <span className="text-[#878787]">Deterministic workflows • Activities for effects</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border bg-[#121212] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl mb-3">Workflows</h3>
              <ul className="text-[#9A9A9A] text-sm space-y-2">
                <li>Deterministic decisions and retries/backoff</li>
                <li>Heartbeats, timeouts, continue‑as‑new</li>
                <li>Auditable histories</li>
              </ul>
            </div>
            <div className="border border-border bg-[#121212] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl mb-3">Activities</h3>
              <ul className="text-[#9A9A9A] text-sm space-y-2">
                <li>Side‑effects at the edges</li>
                <li>Keep logic in the middle</li>
                <li>Idempotency and isolation</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-[#B4B4B4] text-sm md:text-base">
            Temporal brings grown‑up orchestration: retries, timeouts, heartbeats, and histories. Workflows decide; activities do. Keep the I/O at the edges and the logic in the middle. Your future self will thank you in incident review.
          </p>
        </div>
      </div>
    </div>
  );
}
