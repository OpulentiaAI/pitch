import Image from "next/image";
import claudeImg from "/public/screenshots/anthropic-claude-code-1.png";
import daytonaRun from "/public/screenshots/daytona-python-run-1.jpg";

export function SectionWorkshop() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Claude Code × Daytona — Hands‑on Workshop</span>
        <span className="text-[#878787]">Intro → run → evaluate → canary</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Agenda</h3>
            <ol className="text-[#9A9A9A] text-sm space-y-2 list-decimal pl-5">
              <li>Boot sandbox snapshot (Daytona)</li>
              <li>Connect Claude Code to repo</li>
              <li>Run eval slice and checks</li>
              <li>GEPA optimize addendum</li>
              <li>Canary rollout toggles + KPIs</li>
            </ol>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border bg-[#121212] p-3 flex items-center justify-center">
              <Image src={claudeImg} alt="Claude Code" className="object-contain w-full h-[220px]" />
            </div>
            <div className="border border-border bg-[#121212] p-3 flex items-center justify-center">
              <Image src={daytonaRun} alt="Daytona run" className="object-contain w-full h-[220px]" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-[#8A8A8A] space-x-4">
          <a className="underline" href="https://www.anthropic.com/news/claude-code" target="_blank" rel="noreferrer">Anthropic: Claude Code</a>
          <a className="underline" href="https://daytona.io/docs/en/getting-started/" target="_blank" rel="noreferrer">Daytona: Getting started</a>
        </div>
      </div>
    </div>
  );
}
