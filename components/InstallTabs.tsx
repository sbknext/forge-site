"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

type Lang = "python" | "node" | "rust";

const SAMPLES: Record<Lang, { install: string; example: string }> = {
  python: {
    install: "pip install forge",
    example: `from forge import Forge

forge = Forge()
agent = forge.spawn("reviewer", model="sonnet")
result = agent.run("Review src/payments.py for race conditions")
print(result.summary)`,
  },
  node: {
    install: "npm i @sbknext/forge",
    example: `import { Forge } from "@sbknext/forge";

const forge = new Forge();
const agent = forge.spawn("reviewer", { model: "sonnet" });
const result = await agent.run("Review src/payments.ts for race conditions");
console.log(result.summary);`,
  },
  rust: {
    install: "cargo add forge",
    example: `use forge::Forge;

let forge = Forge::new();
let agent = forge.spawn("reviewer").model("sonnet");
let result = agent.run("Review src/payments.rs for race conditions").await?;
println!("{}", result.summary);`,
  },
};

const LABELS: Record<Lang, string> = {
  python: "Python",
  node: "Node",
  rust: "Rust",
};

export function InstallTabs() {
  const [lang, setLang] = useState<Lang>("python");
  const sample = SAMPLES[lang];

  return (
    <div className="w-full">
      <div className="mb-4 flex gap-2">
        {(Object.keys(SAMPLES) as Lang[]).map((key) => (
          <button
            key={key}
            onClick={() => setLang(key)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              lang === key
                ? "bg-ember-500 text-ink-900"
                : "bg-ink-700 text-ink-200 hover:bg-ink-600"
            }`}
          >
            {LABELS[key]}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        <CodeBlock code={`$ ${sample.install}`} />
        <CodeBlock code={sample.example} />
      </div>
    </div>
  );
}
