export function SectionS5Cursor() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Online RL with Cursor — What Matters</span>
        <span className="text-[#878787]">Steerability • Long‑Horizon • Implicit Feedback</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <h2 className="px-4 md:px-0 text-[28px] md:text-[54px] font-medium text-center leading-tight">
          Steerability + Long‑Horizon + Implicit Feedback = Production online RL
        </h2>
        <ul className="mt-8 max-w-3xl mx-auto text-[#9A9A9A] text-sm md:text-base space-y-2 px-8">
          <li>Preference learning from edits</li>
          <li>Dynamic planning depth</li>
          <li>Live canary routes</li>
          <li>Safe rollback</li>
        </ul>
        <p className="mt-8 max-w-3xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Cursor’s lesson isn’t “think harder,” it’s “learn faster.” Capture preference signals, keep changes reversible, and ratchet toward better defaults. Evolution isn’t a feature— it’s a property of the system.
        </p>
      </div>
    </div>
  );
}
