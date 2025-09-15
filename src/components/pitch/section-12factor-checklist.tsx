export function Section12FactorChecklist() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>12‑Factor Agents — Checklist</span>
        <span className="text-[#878787]">Download CSV</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl md:text-2xl mb-3">Reliability</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Deterministic orchestration (workflows)</li>
              <li>Idempotent activities at edges</li>
              <li>Budgets, caps, and timeouts</li>
              <li>Retries, backoff, heartbeats</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl md:text-2xl mb-3">Control</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Namespaced tool contracts</li>
              <li>Artifact‑first outputs</li>
              <li>Versioned prompts/policies</li>
              <li>Canary rollout + instant rollback</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-xl md:text-2xl mb-3">Learning</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Offline evals and checks</li>
              <li>Online signals and routing</li>
              <li>Memory that degrades safely</li>
              <li>Observability and audit trails</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            className="inline-block border border-border bg-[#111] px-4 py-2 text-sm underline"
            href="/downloads/12-factor-agents-checklist.csv"
            download
          >
            Download CSV
          </a>
        </div>
      </div>
    </div>
  );
}
