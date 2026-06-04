import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getShowcaseRuns,
  SHOWCASE_PHASES,
  SHOWCASE_HONESTY,
  type ShowcaseRun,
  type RunPhase,
} from '@/lib/showcase-runs';

// Unlisted page: built-not-promoted. No nav, no sitemap, no homepage copy.
// Discoverable only via a discreet footer button on the homepage. noindex so it
// stays unlisted even if a crawler stumbles onto the route.
export const metadata: Metadata = {
  title: 'Watch the AI build — Forge (recorded)',
  description:
    'A recorded, candidate walkthrough of Forge building Forge: thinking → stories → build → verify → commit.',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-static';

// The 3 public ecosystem products — the "powered by" row. ALLOW-listed terms
// (mcp.sbknext.com / forge.sbknext.com / echo-ai) survive the redaction backstop.
const ECOSYSTEM = [
  { name: 'mcp', host: 'mcp.sbknext.com', href: 'https://mcp.sbknext.com', blurb: 'Brain MCP — the per-user memory + recall layer.' },
  { name: 'forge', host: 'forge.sbknext.com', href: 'https://forge.sbknext.com', blurb: 'Forge — orchestrates the sub-agent team.' },
  { name: 'echo', host: 'echo-ai', href: 'https://forge.sbknext.com', blurb: 'Echo — the branded chat surface.' },
];

function PhaseRail() {
  return (
    <ol className="watch-rail">
      {SHOWCASE_PHASES.map((p, i) => (
        <li key={p.key} className="watch-rail-step">
          <span className="watch-rail-num">{i + 1}</span>
          <div>
            <span className="watch-rail-label">{p.label}</span>
            <span className="watch-rail-blurb">{p.blurb}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

function PoweredBy() {
  return (
    <div className="watch-powered">
      <span className="watch-powered-tag">powered by</span>
      <div className="watch-powered-row">
        {ECOSYSTEM.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="watch-powered-item"
            title={p.blurb}
          >
            <span className="watch-powered-name">{p.name}</span>
            <span className="watch-powered-host">{p.host}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function PhaseTimeline({ phases }: { phases: RunPhase[] }) {
  return (
    <ol className="watch-phases">
      {phases.map((ph, i) => (
        <li key={ph.name} className={`watch-phase watch-phase-${ph.name}`}>
          <div className="watch-phase-marker">
            <span className="watch-phase-num">{i + 1}</span>
          </div>
          <div className="watch-phase-body">
            <div className="watch-phase-head">
              <span className="watch-phase-name">{ph.name}</span>
              <span className="watch-phase-summary">{ph.summary}</span>
            </div>

            {ph.agents && ph.agents.length > 0 && (
              <div className="watch-agents">
                {ph.agents.map((a) => (
                  <div className="watch-agent" key={a.name}>
                    <div className="watch-agent-top">
                      <span className="watch-agent-dot" />
                      <span className="watch-agent-name">{a.name}</span>
                      <span className="watch-agent-role">{a.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="watch-phase-detail">{ph.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function RunBlock({ run }: { run: ShowcaseRun }) {
  return (
    <article className="watch-story reveal in-view" id={run.id}>
      <header className="watch-story-head">
        <span className="watch-story-id">{run.story.split(' — ')[0]}</span>
        <div>
          <h3 className="watch-story-title">{run.story.split(' — ').slice(1).join(' — ') || run.story}</h3>
          <span className="watch-story-epic">{run.epic}</span>
        </div>
        <span className={`watch-status-pill ${run.status}`}>{run.status}</span>
      </header>

      {/* PHASES: the five-phase Autonomous-SDLC timeline */}
      <PhaseTimeline phases={run.phases} />

      {/* VERIFY: adversarial / edge-case checks + verdict */}
      <div className="watch-block">
        <div className="watch-block-tag">verify · {run.verify.verdict}</div>
        <ul className="watch-ac">
          {run.verify.checks.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* RESULT: tests-green + the local, not-pushed commit */}
      <div className="watch-block">
        <div className="watch-block-tag">result · tests-green, owner-reviewed, not pushed</div>
        <div className="watch-tests">
          <span className="watch-test-chip">
            <span className="green">✓</span> {run.result.tests}
          </span>
        </div>
        <div className="watch-commit">
          <span className="watch-commit-hash">{run.result.commit.split(' ')[0]}</span>
          <span className="watch-commit-subject">{run.result.commit.split(' ').slice(1).join(' ')}</span>
        </div>
        <div className="watch-commit-meta">
          <span>Co-Authored-By: Claude Opus 4.8</span>
          <span className="watch-commit-push">commit-not-push · consent-gated</span>
        </div>
      </div>
    </article>
  );
}

export default function WatchPage() {
  const runs = getShowcaseRuns();

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Link href="/" className="brand">
            <span className="brand-mark" />
            <span>Forge</span>
          </Link>
          <span className="live-pill">
            <span className="dot" /> recorded run · candidate
          </span>
        </div>
      </header>

      <main>
        <section className="watch-hero">
          <div className="container">
            <span className="eyebrow">
              <span className="bracket">[</span> Autonomous SDLC <span className="bracket">]</span>
            </span>
            <h1 className="watch-h1">
              Watch the AI <span className="ember">build Forge</span>.
            </h1>
            <p className="watch-sub">
              A recorded walkthrough of real Forge runs: the planner authors stories, a team of
              sonnet sub-agents builds them, an adversarial pass verifies, and the owner reviews and
              commits. Five phases — thinking → stories → build → verify → commit.
            </p>

            {/* HONESTY BANNER — required by story 4.0.1 */}
            <div className="watch-honesty">
              <span className="watch-honesty-tag">honest</span>
              <p>{SHOWCASE_HONESTY}</p>
            </div>

            <div className="watch-runmeta">
              <span className="watch-runmeta-chip">recorded · candidate</span>
              <span className="watch-runmeta-chip">{runs.length} runs · 1 queue</span>
              <span className="watch-runmeta-chip">secrets masked · hosts redacted</span>
            </div>

            {/* POWERED BY — the 3 public ecosystem products */}
            <PoweredBy />
          </div>
        </section>

        <section className="watch-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">[</span> the loop <span className="bracket">]</span></span>
              <h2>The pattern, every run.</h2>
              <p>Planner-authored, executor-built, human-gated. The same gates these runs ran under.</p>
            </div>
            <PhaseRail />
          </div>
        </section>

        <section className="watch-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">[</span> Forge building Forge <span className="bracket">]</span></span>
              <h2>Recorded runs, phase by phase.</h2>
              <p>
                Real diff stats, real test counts, real commit hashes — authored from Forge-ecosystem
                build history. Not a live stream; a curated, masked recording.
              </p>
            </div>
            <div className="watch-stories">
              {runs.map((run) => (
                <RunBlock key={run.id} run={run} />
              ))}
            </div>
          </div>
        </section>

        <section className="watch-section">
          <div className="container watch-closing">
            <p className="watch-closing-line">
              This is how Forge builds Forge today: a planner that cross-checks the mistake ledger, a
              queue of pre-written stories, a team of sub-agents, an adversarial verify, and an owner
              who approves every gate. <b>Recorded — not live.</b> Live mode is deferred.
            </p>
            <div className="watch-closing-cta">
              <Link href="/" className="btn-ghost">← back to forge.sbknext.com</Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="built">
            <span className="ember">●</span> recorded run · candidate showcase · masked + redacted
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-4)' }}>
            © 2026 sbknext · MIT
          </div>
        </div>
      </footer>
    </>
  );
}
