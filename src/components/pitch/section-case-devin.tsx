import Image from "next/image";
import gettingStarted from "/public/screenshots/devin/Get_Started.png";
import introducing from "/public/screenshots/devin/Introducing_Devin.png";
import tutorial from "/public/screenshots/devin/Tutorial_Library.png";

export function SectionCaseDevin() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Case Study — Devin (docs)</span>
        <span className="text-[#878787]">Screenshots & links</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-border bg-[#121212] p-3">
            <div className="flex items-center justify-center">
              <Image src={gettingStarted} alt="Devin Get Started" className="object-contain w-full h-[240px]" />
            </div>
            <p className="mt-2 text-[11px] text-[#8A8A8A] text-center">
              Source: <a className="underline" href="https://docs.devin.ai/getting-started" target="_blank" rel="noreferrer">docs.devin.ai/getting-started</a>
            </p>
          </div>
          <div className="border border-border bg-[#121212] p-3">
            <div className="flex items-center justify-center">
              <Image src={introducing} alt="Introducing Devin" className="object-contain w-full h-[240px]" />
            </div>
            <p className="mt-2 text-[11px] text-[#8A8A8A] text-center">
              Source: <a className="underline" href="https://docs.devin.ai/introducing-devin" target="_blank" rel="noreferrer">docs.devin.ai/introducing-devin</a>
            </p>
          </div>
          <div className="border border-border bg-[#121212] p-3">
            <div className="flex items-center justify-center">
              <Image src={tutorial} alt="Devin Tutorial Library" className="object-contain w-full h-[240px]" />
            </div>
            <p className="mt-2 text-[11px] text-[#8A8A8A] text-center">
              Source: <a className="underline" href="https://docs.devin.ai/tutorial-library" target="_blank" rel="noreferrer">docs.devin.ai/tutorial-library</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
