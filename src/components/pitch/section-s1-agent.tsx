export function SectionS1Agent() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Agentic Foundations & Self‑Evolving Systems</span>
        <span className="text-[#878787]">v0.1 • Team Opulent • {new Date().toISOString().slice(0, 10)}</span>
      </div>
      <div className="container min-h-screen grid place-content-center">
        <div className="relative">
          <div className="absolute -inset-20 md:-inset-40 bg-gradient-to-br from-[#6EE7F9]/10 via-[#A78BFA]/10 to-transparent blur-3xl rounded-full" />
          <h1 className="relative text-center text-[40px] md:text-[84px] leading-tight font-medium">
            Agentic Foundations & Self‑Evolving Systems
          </h1>
          <p className="relative mt-6 text-center text-[#B4B4B4] text-base md:text-xl">
            Plan → Act → Verify → Learn (Cursor‑style online RL in practice)
          </p>
          <div className="relative mt-8 flex items-center justify-center gap-6 text-xs md:text-sm text-[#8A8A8A]">
            <span>Date: {new Date().toLocaleDateString()}</span>
            <span>Team: Opulent OS</span>
            <span>Version: 0.1</span>
          </div>
          <div className="relative mt-12 max-w-3xl text-center mx-auto text-[#D6D6D6] text-sm md:text-base">
            Agents aren’t magic. They’re programs with plans, budgets, and accountability. We’ll show how to make them evolve in production without betting your company on a single prompt.
          </div>
        </div>
      </div>
    </div>
  );
}
