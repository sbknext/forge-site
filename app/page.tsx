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
          Forge is an open-source framework for spinning up Sonnet-powered AI
          sub-agents — reviewers, refactorers, testers, researchers — and
          orchestrating them from a single Python, Node, or Rust process.
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
