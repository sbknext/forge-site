import { InstallTabs } from "@/components/InstallTabs";

const GITHUB_CLIENT = "https://github.com/sbknext/forge-client";
const GITHUB_SITE = "https://github.com/sbknext/forge-site";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink-900 text-ink-100">
      {/* Nav */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-ember-500">forge</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-ink-300">
          <a href="#install" className="hover:text-ink-100">
            Install
          </a>
          <a href="#why" className="hover:text-ink-100">
            Why Forge
          </a>
          <a href="#built" className="hover:text-ink-100">
            Built with
          </a>
          <a
            href={GITHUB_CLIENT}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-100"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-12 sm:pt-20">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Solo devs ship like teams.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-200 sm:text-xl">
          Forge is the multi-agent SDLC harness I built to ship Echo AI, Vaidya,
          Brain MCP, and claude-fuse as a solo developer. MIT-licensed,
          self-hostable, fork-friendly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#install"
            className="rounded-md bg-ember-500 px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ember-400"
          >
            Get started
          </a>
          <a
            href={GITHUB_CLIENT}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink-600 px-5 py-3 text-sm font-semibold text-ink-100 transition hover:border-ink-400 hover:bg-ink-800"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Architecture */}
      <section id="how" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          How it fits together.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-300">
          Your code talks to Forge Brain, which orchestrates sub-agents across
          any LLM provider.
        </p>
        <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <ArchBox
            title="Your Code"
            lines={["Python", "Node", "Rust"]}
          />
          <Arrow label="SDK" />
          <ArchBox
            title="Forge Brain"
            lines={["self-host", "or hosted"]}
            accent
          />
          <Arrow label="orchestrate" />
          <ArchBox
            title="LLM Providers"
            lines={["Sonnet", "GPT", "Ollama"]}
          />
        </div>
      </section>

      {/* Install */}
      <section id="install" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Install in your language.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-300">
          One SDK, three runtimes. Same agent primitives, same backend.
        </p>
        <div className="mt-8">
          <InstallTabs />
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Why Forge.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card
            title="Solo-dev OSS"
            body="MIT-licensed. Built for the one-person shop. No enterprise dashboard, no seat licensing, no sales call."
          />
          <Card
            title="Multi-agent under the hood"
            body="Each sub-agent runs in its own context with its own role and tools. Spawn a reviewer, a tester, and a writer — they coordinate, you don't babysit."
          />
          <Card
            title="Self-host or use ours"
            body="Run the Forge Brain backend on your own box, or point at our hosted endpoint. Switch with one env var."
          />
        </div>
      </section>

      {/* Built with Forge */}
      <section id="built" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built with Forge.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-300">
          Same framework. Same primitives. Shipped by one person.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <BuiltCard
            title="Echo AI"
            body="Wellness chatbot. Live since Apr 2026."
            href="https://echo.sbknext.com"
            cta="echo.sbknext.com"
          />
          <BuiltCard
            title="Vaidya"
            body="Ayurveda LLM for Indian users."
            href="#"
            cta="Coming soon"
          />
          <BuiltCard
            title="Brain MCP"
            body="Knowledge infrastructure. 7 production tools."
            href="https://mcp.sbknext.com"
            cta="mcp.sbknext.com"
          />
          <BuiltCard
            title="claude-fuse"
            body="Claude Code observability."
            href="https://github.com/sbknext/claude-fuse"
            cta="github.com/sbknext/claude-fuse"
          />
          <BuiltCard
            title="Forge itself"
            body="This site + the SDK + the docs. Self-hosting Forge."
            href={GITHUB_SITE}
            cta="github.com/sbknext/forge-site"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-ink-700">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={GITHUB_CLIENT}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-100"
            >
              sbknext/forge-client
            </a>
            <a
              href={GITHUB_SITE}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-100"
            >
              sbknext/forge-site
            </a>
            <a
              href="mailto:erp@sbknext.com"
              className="hover:text-ink-100"
            >
              Contact
            </a>
          </div>
          <div>MIT License · © {new Date().getFullYear()} sbknext</div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-ink-700 bg-ink-800 p-6 transition hover:border-ink-500">
      <h3 className="text-lg font-semibold text-ink-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-300">{body}</p>
    </div>
  );
}

function ArchBox({
  title,
  lines,
  accent,
}: {
  title: string;
  lines: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-lg border p-5 ${
        accent
          ? "border-ember-500 bg-ink-800"
          : "border-ink-700 bg-ink-800"
      }`}
    >
      <div
        className={`text-sm font-semibold ${
          accent ? "text-ember-500" : "text-ink-100"
        }`}
      >
        {title}
      </div>
      <ul className="mt-2 space-y-1 text-xs text-ink-300">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-ink-400 sm:px-2">
      <div className="text-[10px] uppercase tracking-wider">{label}</div>
      <div aria-hidden className="mt-1 hidden text-xl sm:block">
        →
      </div>
      <div aria-hidden className="mt-1 text-xl sm:hidden">
        ↓
      </div>
    </div>
  );
}

function BuiltCard({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex flex-col rounded-lg border border-ink-700 bg-ink-800 p-6 transition hover:border-ember-500"
    >
      <h3 className="text-lg font-semibold text-ink-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-300">{body}</p>
      <span className="mt-4 text-xs font-medium text-ember-500">{cta} →</span>
    </a>
  );
}
