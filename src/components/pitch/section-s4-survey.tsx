export function SectionS4Survey() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Survey — Self‑Evolving Agents</span>
        <span className="text-[#878787]">Offline improvements vs Online signals</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Offline</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>DPO/IPO/KTO‑style preferences</li>
              <li>Prompt optimizers (e.g., GEPA)</li>
              <li>Evaluation‑gated iterations</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Online</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Implicit user edits</li>
              <li>Success/failure events</li>
              <li>Bandit routing / canary rollout</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Two levers, one goal. Offline optimization raises the floor (better prompts, better policies). Online signals raise the ceiling (route traffic to what works, de‑risk with canaries). The best systems do both without drama.
        </p>
      </div>
    </div>
  );
}
