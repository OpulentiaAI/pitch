import Image from "next/image";
import temporalImg from "/public/screenshots/temporal-workflow-ui-1.png";
import argoImg from "/public/screenshots/argo-rollouts-ui-1.png";

export function SectionFrontier() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Frontier Agents</span>
        <span className="text-[#878787]">Long‑horizon • Tools • Learning</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl mb-3">Capabilities</h3>
            <ul className="text-[#9A9A9A] text-sm space-y-2">
              <li>Structured planning with tool use</li>
              <li>Speculative sampling + routing</li>
              <li>Policy iteration from online signals</li>
            </ul>
          </div>
          <div className="border border-border bg-[#121212] p-4 md:p-6 flex items-center justify-center">
            <Image src={temporalImg} alt="Temporal UI" className="object-contain w-full h-[260px]" />
          </div>
          <div className="border border-border bg-[#121212] p-4 md:p-6 flex items-center justify-center">
            <Image src={argoImg} alt="Argo Rollouts UI" className="object-contain w-full h-[260px]" />
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-[#8A8A8A] space-x-4">
          <a className="underline" href="https://docs.temporal.io/workflow-execution" target="_blank" rel="noreferrer">Temporal: workflow histories</a>
          <a className="underline" href="https://argo-rollouts.readthedocs.io/en/stable/features/canary/" target="_blank" rel="noreferrer">Argo: canary strategy</a>
        </div>
      </div>
    </div>
  );
}
