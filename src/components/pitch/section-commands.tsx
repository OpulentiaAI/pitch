export function SectionCommands() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-sm md:text-lg">
        <span>Appendix — Quick Commands</span>
        <span className="text-[#878787]">Temporal • Eval • GEPA</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container px-4 md:px-0">
        <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base">
          <div className="bg-[#111] border border-border p-4">
            <code>make temporal-smoke</code>
          </div>
          <div className="bg-[#111] border border-border p-4">
            <code>python scripts/execute_eval_tasks.py --dataset &lt;file.jsonl&gt; --out-dir outputs/eval_artifacts</code>
          </div>
          <div className="bg-[#111] border border-border p-4">
            <code>python scripts/run_eval.py --dataset &lt;file.jsonl&gt; --artifacts-dir outputs/eval_artifacts --out outputs/results.csv</code>
          </div>
          <div className="bg-[#111] border border-border p-4">
            <code>python scripts/lightweight_gepa_optimizer.py --dataset &lt;file.jsonl&gt; --prompt-file docs/prompts/system_prompt/addendum_v1.md --out-dir outputs/light_gepa</code>
          </div>
        </div>
      </div>
    </div>
  );
}
