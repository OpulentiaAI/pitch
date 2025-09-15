import Image from "next/image";

export function Section12Factor() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>12‑Factor Agents (Modernized)</span>
        <span className="text-[#878787]">Intro → durable patterns</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <h2 className="text-[28px] md:text-[54px] font-medium text-center leading-tight mb-8">
          A practical foundation for production agents
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">1–4 Reliability</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Deterministic orchestration (workflows)</li>
              <li>Idempotent activities at edges</li>
              <li>Budgets, caps, and timeouts</li>
              <li>Retry, backoff, heartbeats</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">5–8 Control</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Tool contracts and namespacing</li>
              <li>Artifacts as first‑class outputs</li>
              <li>Versioned prompts/policies</li>
              <li>Canary rollout + instant rollback</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">9–12 Learning</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Offline evals and checks</li>
              <li>Online signals and routing</li>
              <li>Memory that degrades safely</li>
              <li>Observability and audit trails</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-[#8A8A8A] space-x-4">
          <a className="underline" href="https://docs.temporal.io/workflow-execution" target="_blank" rel="noreferrer">Temporal: workflow execution</a>
          <a className="underline" href="https://argo-rollouts.readthedocs.io/en/stable/features/analysis/" target="_blank" rel="noreferrer">Argo: analysis gates</a>
        </div>
      </div>
    </div>
  );
}
