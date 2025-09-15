export function SectionS3Patterns() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Patterns Library — Plan → Act → Verify → Learn</span>
        <span className="text-[#878787]">Determinism in workflows • Effects in activities</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Plan</h3>
            <p className="text-[#9A9A9A] text-sm">Structured plans with budgets and caps; define checkpoints and retries.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Act</h3>
            <p className="text-[#9A9A9A] text-sm">Use tools inside sandboxes; deterministic orchestration governs side‑effects.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Verify</h3>
            <p className="text-[#9A9A9A] text-sm">Checks/tests that don’t blink; schemas, regexes, table contracts.</p>
          </div>
          <div className="border border-border bg-[#121212] p-6">
            <h3 className="text-lg md:text-xl mb-2">Learn</h3>
            <p className="text-[#9A9A9A] text-sm">Turn signals into policy/prompt updates after results are in hand.</p>
          </div>
        </div>
        <p className="mt-10 max-w-4xl mx-auto text-center text-[#B4B4B4] text-sm md:text-base px-4">
          Plan with caps. Act with tools inside sandboxes. Verify against checks that don’t blink. Learn from what happened—prompts or policies—only after results are in hand. This loop survives outages, flaky sites, and transient model moods.
        </p>
      </div>
    </div>
  );
}
