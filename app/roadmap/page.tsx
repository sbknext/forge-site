import type { Metadata } from 'next';
import { ScrollRevealClient } from '@/components/ForgeAnimations';

export const metadata: Metadata = {
  title: 'Forge Roadmap — One Brain, Four Hands',
  description:
    '12-month release plan for Forge: open-source, local-first memory and intelligence for AI-assisted development.',
  metadataBase: new URL('https://forge.sbknext.com'),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'Forge Roadmap — One Brain, Four Hands',
    description:
      '12-month release plan for Forge: open-source, local-first memory and intelligence for AI-assisted development.',
    url: 'https://forge.sbknext.com/roadmap',
    siteName: 'Forge',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Roadmap — One Brain, Four Hands',
    description:
      '12-month release plan for Forge: open-source, local-first memory and intelligence for AI-assisted development.',
    images: ['/og-image.svg'],
  },
};

/* ── helpers ── */
function RmBadge({ variant, label }: { variant: 'shipped' | 'building' | 'next' | 'planned'; label: string }) {
  return (
    <span className={`rm-badge ${variant}`}>
      <span className="dot" />
      {label}
    </span>
  );
}

export default function RoadmapPage() {
  return (
    <>
      <ScrollRevealClient />

      {/* ── NAV ── */}
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/">
            <span className="brand-mark" />
            forge
            <span className="live-pill" style={{ marginLeft: 8 }}>
              <span className="dot" />
              <span>v0.4.3 · live</span>
            </span>
          </a>
          <nav className="nav-links">
            <a href="/#architecture">architecture</a>
            <a href="/#install">install</a>
            <a href="/#gallery">agents</a>
            <a href="/#built">built with</a>
            <a href="/roadmap">roadmap</a>
            <a
              href="https://mcp.sbknext.com"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'var(--ember-faint)',
                border: '1px solid rgba(255,122,26,0.45)',
                color: 'var(--ember)',
                borderRadius: 999,
                padding: '3px 12px',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >mcp.sbknext.com →</a>
            <a href="https://github.com/sbknext/forge-client" target="_blank" rel="noreferrer">github ↗</a>
          </nav>
          <a className="nav-cta" href="/#install">$ install</a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="rdm-hero">
          <div className="hero-grid-bg" />
          <div className="container">
            <div className="section-head" style={{ marginBottom: 36 }}>
              <span className="eyebrow">
                <span className="bracket">/</span> Roadmap · 12 months · signal-driven <span className="bracket">/</span>
              </span>
              <h1 className="rdm-h1">
                One Brain. <span className="ember">Four Hands.</span>
              </h1>
              <p className="rdm-subtitle">
                Give your AI coding assistant permanent memory, honest code insight, and security awareness — all local, all open, all yours.
              </p>
              <div className="hero-cta-row" style={{ marginTop: 32 }}>
                <a className="btn-primary" href="https://mcp.sbknext.com" target="_blank" rel="noreferrer">
                  Get Brain <span className="arr">→</span>
                </a>
                <a className="btn-ghost" href="https://github.com/sbknext" target="_blank" rel="noreferrer">
                  Star on GitHub <span className="arr">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION ── */}
        <section className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> vision <span className="bracket">/</span></span>
              <h2>What <span className="ember">Forge</span> is becoming.</h2>
            </div>
            <p className="rdm-vision-para">
              Forge is the open, local-first memory and intelligence layer for AI-assisted development. Your AI assistant — Claude Code, Cursor, Windsurf, your own scripts — knows your codebase structure, your security posture, your past mistakes, and your decisions. Not because you typed it twice. Because everything writes to one Brain you own, on your machine.
            </p>
          </div>
        </section>

        {/* ── FOUR TOOLS FEED ONE BRAIN ── */}
        <section className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> architecture <span className="bracket">/</span></span>
              <h2>Four tools. <span className="ember">One brain.</span></h2>
              <p>Every tool writes to the same Brain. Your AI reads from all of them.</p>
            </div>

            <div className="rdm-brain-diagram">
              {/* Inputs */}
              <div className="rdm-inputs">
                {[
                  { id: 'sutra', label: 'sutra', desc: 'what your code is' },
                  { id: 'secure', label: 'secure', desc: 'where your risk is' },
                  { id: 'fuse', label: 'fuse', desc: 'what your sessions did' },
                  { id: 'you', label: 'you', desc: 'what you decided and why' },
                ].map((t) => (
                  <div key={t.id} className="rdm-input-node">
                    <span className="rdm-input-label">{t.label}</span>
                    <span className="rdm-input-desc">{t.desc}</span>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <div className="rdm-arrows" aria-hidden="true">
                <svg viewBox="0 0 60 120" preserveAspectRatio="none" className="rdm-arrows-svg">
                  <defs>
                    <marker id="rdm-arrow" viewBox="0 0 10 10" refX="7" refY="5"
                      markerWidth="5" markerHeight="5" orient="auto">
                      <path d="M0,0 L10,5 L0,10 z" fill="rgba(255,122,26,0.7)" />
                    </marker>
                  </defs>
                  <line x1="55" y1="15" x2="5" y2="55" stroke="rgba(255,122,26,0.4)" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#rdm-arrow)" />
                  <line x1="55" y1="40" x2="5" y2="58" stroke="rgba(255,122,26,0.4)" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#rdm-arrow)" />
                  <line x1="55" y1="65" x2="5" y2="62" stroke="rgba(255,122,26,0.4)" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#rdm-arrow)" />
                  <line x1="55" y1="90" x2="5" y2="68" stroke="rgba(255,122,26,0.4)" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#rdm-arrow)" />
                </svg>
              </div>

              {/* Brain core */}
              <div className="rdm-brain-core">
                <div className="rdm-brain-hex" aria-hidden="true">⬢</div>
                <span className="rdm-brain-label">BRAIN</span>
                <span className="rdm-brain-sub">your local store</span>
              </div>

              {/* Right arrow */}
              <div className="rdm-out-arrow" aria-hidden="true">
                <svg viewBox="0 0 40 24" className="rdm-out-arrow-svg">
                  <defs>
                    <marker id="rdm-out-arrow" viewBox="0 0 10 10" refX="7" refY="5"
                      markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M0,0 L10,5 L0,10 z" fill="var(--ember)" />
                    </marker>
                  </defs>
                  <line x1="0" y1="12" x2="34" y2="12" stroke="var(--ember)" strokeWidth="1.5" markerEnd="url(#rdm-out-arrow)" />
                </svg>
              </div>

              {/* Outcome */}
              <div className="rdm-outcome">
                <span className="rdm-outcome-text">your AI, everywhere,</span>
                <span className="rdm-outcome-text">with <span className="ember">memory</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELEASE TRAIN ── */}
        <section className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> release train <span className="bracket">/</span></span>
              <h2>Six releases. <span className="ember">One direction.</span></h2>
              <p>Each ships when its gate is met — not on a calendar.</p>
            </div>

            <div className="rdm-train">
              {[
                {
                  version: 'v0',
                  name: 'Foundation',
                  desc: 'What exists today',
                  when: 'Now',
                  blurb: '12 repos, a working 4-agent harness, sutra on npm.',
                  status: 'shipped' as const,
                },
                {
                  version: '1.0',
                  name: 'Memory',
                  desc: 'Brain becomes the product',
                  when: 'Month 1–2',
                  blurb: 'Give your AI a permanent memory in one command.',
                  status: 'next' as const,
                },
                {
                  version: '1.5',
                  name: 'Front Door',
                  desc: 'Funnel tools polished and launched',
                  when: 'Month 2–3',
                  blurb: 'Honest code-graph and session insight — free, local, 60-sec wow.',
                  status: 'planned' as const,
                },
                {
                  version: '2.0',
                  name: 'Cloud',
                  desc: 'Sync, teams, adoption',
                  when: 'Month 3–5',
                  blurb: 'Your memory, everywhere. Team brains. Free hosted tier, generous rate limits.',
                  status: 'planned' as const,
                },
                {
                  version: '2.5',
                  name: 'Intelligence',
                  desc: 'Tools auto-feed the Brain',
                  when: 'Month 5–7',
                  blurb: 'Your AI now knows your repo — structure, risk, history.',
                  status: 'planned' as const,
                },
                {
                  version: '3.0',
                  name: 'Network',
                  desc: 'Plugins and shared knowledge',
                  when: 'Month 7–12',
                  blurb: 'A collective brain for AI devs. Plug in, share, learn.',
                  status: 'planned' as const,
                },
              ].map((r) => (
                <div key={r.version} className="rdm-train-card">
                  <div className="rdm-train-top">
                    <span className="rdm-train-version">{r.version}</span>
                    <RmBadge variant={r.status} label={r.status} />
                  </div>
                  <div className="rdm-train-name">{r.name}</div>
                  <div className="rdm-train-desc">{r.desc}</div>
                  <div className="rdm-train-when">{r.when}</div>
                  <p className="rdm-train-blurb">{r.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PER-RELEASE DETAIL ── */}
        <section className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> detail <span className="bracket">/</span></span>
              <h2>What ships <span className="ember">in each release.</span></h2>
            </div>

            <div className="rdm-detail-list">

              {/* 1.0 */}
              <div className="rdm-detail-card">
                <div className="rdm-detail-head">
                  <span className="rdm-detail-version">1.0</span>
                  <span className="rdm-detail-name">Memory</span>
                  <RmBadge variant="next" label="next" />
                </div>
                <p className="rdm-detail-tagline">Brain stops being a substrate and becomes a product a stranger can adopt in 5 minutes.</p>
                <div className="rdm-detail-tracks">
                  <div className="rdm-track">
                    <div className="rdm-track-name">Brain</div>
                    <ul className="rdm-track-list">
                      {[
                        '1-command install — generator at mcp.sbknext.com',
                        'Memory survives /clear and /compact',
                        'Auto-capture decisions and mistakes (no manual save)',
                        'Session-start recall injects repo context',
                        'Web dashboard — browse, search, edit memories',
                        'Free tier — instant token, no card',
                      ].map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                <aside className="rdm-gate">Gate → Stranger reaches &quot;my AI remembered across sessions&quot; in &lt; 5 min, unaided.</aside>
              </div>

              {/* 1.5 */}
              <div className="rdm-detail-card">
                <div className="rdm-detail-head">
                  <span className="rdm-detail-version">1.5</span>
                  <span className="rdm-detail-name">Front Door</span>
                  <RmBadge variant="planned" label="planned" />
                </div>
                <p className="rdm-detail-tagline">Free, shareable tools that bring devs in — each ends with &quot;now give it memory → Brain.&quot;</p>
                <div className="rdm-detail-tracks">
                  <div className="rdm-track">
                    <div className="rdm-track-name">sutra</div>
                    <ul className="rdm-track-list">
                      {[
                        'Live watch mode — graph updates as you code',
                        'Cross-repo map (echo-ai ↔ brain-api)',
                        'Shareable graph link',
                        '"Explain this feature" — AI explains from the graph',
                      ].map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="rdm-track">
                    <div className="rdm-track-name">fuse</div>
                    <ul className="rdm-track-list">
                      {[
                        'Real-time mistake alerts mid-session',
                        'Skill auto-templating from repeated edits',
                        'Token + cost analytics per session',
                        '"Promote to ledger" — one click feeds Brain',
                      ].map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                <aside className="rdm-gate">Gate → 100 people have Brain wired in; ≥ 30 still writing memories in week 2.</aside>
              </div>

              {/* 2.0 */}
              <div className="rdm-detail-card">
                <div className="rdm-detail-head">
                  <span className="rdm-detail-version">2.0</span>
                  <span className="rdm-detail-name">Cloud</span>
                  <RmBadge variant="planned" label="planned" />
                </div>
                <p className="rdm-detail-tagline">Retention and adoption. Forge is free; open-core (Apache-2.0) is yours to self-host. Need scale or compliance? Self-host or contact us.</p>
                <div className="rdm-detail-tracks">
                  <div className="rdm-track">
                    <div className="rdm-track-name">Brain Cloud</div>
                    <ul className="rdm-track-list">
                      {[
                        'Multi-device sync',
                        'Team / shared brains',
                        'SSO and audit log (enterprise self-host)',
                        'Free hosted tier — generous rate limits, no paywall',
                        'Import notes, ledgers, git history',
                      ].map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="rdm-track">
                    <div className="rdm-track-name">secure</div>
                    <ul className="rdm-track-list">
                      {[
                        'CI gate — fail PRs on new secrets vs baseline',
                        'One-line GitHub Action',
                        'Trend-over-time dashboard',
                        'Frappe + Python depth',
                      ].map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                <aside className="rdm-gate">Gate → Adoption + retention: N teams self-host or N active on the free hosted tier; D7 retention climbing.</aside>
              </div>

              {/* 2.5 */}
              <div className="rdm-detail-card">
                <div className="rdm-detail-head">
                  <span className="rdm-detail-version">2.5</span>
                  <span className="rdm-detail-name">Intelligence</span>
                  <RmBadge variant="planned" label="planned" />
                </div>
                <p className="rdm-detail-tagline">The convergence. All tools enrich one Brain. The AI gets smarter for it.</p>
                <div className="rdm-detail-tracks">
                  <div className="rdm-track">
                    <div className="rdm-track-name">Brain</div>
                    <ul className="rdm-track-list">
                      {[
                        'Unified knowledge write from sutra, secure, fuse',
                        'Codebase-aware AI queries (no re-scan)',
                        'Memory consolidation — summaries decay gracefully',
                        'Decision log linked to commits',
                        'Personal Mistakes Ledger, productized',
                      ].map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                <aside className="rdm-gate">Gate → Users report the AI &quot;feels like it knows my project.&quot;</aside>
              </div>

              {/* 3.0 */}
              <div className="rdm-detail-card">
                <div className="rdm-detail-head">
                  <span className="rdm-detail-version">3.0</span>
                  <span className="rdm-detail-name">Network</span>
                  <RmBadge variant="planned" label="planned" />
                </div>
                <p className="rdm-detail-tagline">From personal brain to collective intelligence.</p>
                <div className="rdm-detail-tracks">
                  <div className="rdm-track">
                    <div className="rdm-track-name">Network</div>
                    <ul className="rdm-track-list">
                      {[
                        'Plugin API public — extend Brain without forking',
                        'Shared knowledge graphs — opt-in community brains',
                        'forge-skills marketplace',
                        'Cross-tool, cross-team memory federation',
                        '"Forge ships Forge" harness opened as a template',
                      ].map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                <aside className="rdm-gate">Gate → Forge is a category, not a tool.</aside>
              </div>

            </div>
          </div>
        </section>

        {/* ── 12-MONTH TIMELINE ── */}
        <section className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> timeline <span className="bracket">/</span></span>
              <h2>12-month <span className="ember">swimlane.</span></h2>
              <p>Approximate cadence — gates drive real ship dates.</p>
            </div>

            <div className="rdm-timeline-wrap">
              {/* Month headers */}
              <div className="rdm-tl-grid">
                <div className="rdm-tl-label-col" />
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="rdm-tl-month-head">M{i + 1}</div>
                ))}
              </div>

              {/* Swimlanes */}
              {[
                {
                  track: 'Brain',
                  segments: [
                    { start: 1, end: 2, label: '1.0 product', color: 'var(--ember)' },
                    { start: 3, end: 5, label: '2.0 cloud', color: 'var(--ember)' },
                    { start: 5, end: 7, label: '2.5 intel', color: 'var(--ember)' },
                    { start: 7, end: 12, label: '3.0 network', color: 'var(--ember)' },
                  ],
                },
                {
                  track: 'sutra',
                  segments: [
                    { start: 2, end: 3, label: '1.5 live-watch', color: 'var(--green)' },
                  ],
                },
                {
                  track: 'fuse',
                  segments: [
                    { start: 2, end: 3, label: '1.5 auto-capture', color: 'var(--blue)' },
                  ],
                },
                {
                  track: 'secure',
                  segments: [
                    { start: 3, end: 5, label: '2.0 CI gate', color: 'var(--amber)' },
                  ],
                },
                {
                  track: 'adoption',
                  segments: [
                    { start: 5, end: 12, label: 'free tier + self-host', color: '#4ade80' },
                  ],
                },
                {
                  track: 'story',
                  segments: [
                    { start: 1, end: 12, label: '"Forge ships Forge" — every week', color: 'var(--ember)', thin: true },
                  ],
                },
              ].map((row) => (
                <div key={row.track} className="rdm-tl-grid rdm-tl-row">
                  <div className="rdm-tl-label-col">{row.track}</div>
                  {Array.from({ length: 12 }, (_, i) => {
                    const m = i + 1;
                    const seg = row.segments.find((s) => m >= s.start && m < s.end);
                    const isFirst = seg && m === seg.start;
                    return (
                      <div key={m} className="rdm-tl-cell">
                        <div className="rdm-tl-track-bg" />
                        {seg && (
                          <div
                            className={`rdm-tl-seg${(seg as { thin?: boolean }).thin ? ' thin' : ''}`}
                            style={{ background: seg.color, opacity: 0.75 }}
                          />
                        )}
                        {isFirst && (
                          <span
                            className="rdm-tl-seg-label"
                            style={{ color: seg!.color }}
                          >
                            {seg!.label}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PER-REPO DESTINATION ── */}
        <section className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> repos <span className="bracket">/</span></span>
              <h2>Every repo. <span className="ember">A destination.</span></h2>
              <p>Where each piece of the ecosystem is headed.</p>
            </div>

            <div className="rdm-repo-table">
              <div className="rdm-repo-head">
                <span>Repo</span>
                <span>Becomes</span>
              </div>
              {[
                { repo: 'brain-mcp / corebrain', becomes: 'The product — Brain (Cloud + open-core)' },
                { repo: 'forge-sutra', becomes: 'Funnel #1 — free, live-watch, feeds Brain' },
                { repo: 'claude-fuse', becomes: 'Funnel #2 — auto-capture engine' },
                { repo: 'forge-secure', becomes: 'Second tool — CI gate (month 3+), free + self-hostable' },
                { repo: 'forge-client', becomes: 'The SDK every tool installs' },
                { repo: 'forge-site', becomes: 'One-story front door → Brain' },
                { repo: 'forge-skills', becomes: '3.0 marketplace seed' },
                { repo: 'forge framework / harness', becomes: 'The story — #1 content engine, free and open' },
                { repo: 'echo-ai', becomes: 'Proof-of-Forge demo' },
              ].map((r) => (
                <div key={r.repo} className="rdm-repo-row">
                  <code className="rdm-repo-name">{r.repo}</code>
                  <span className="rdm-repo-dest">{r.becomes}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DREAM FEATURES ── */}
        <section className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> backlog <span className="bracket">/</span></span>
              <h2>Dream features. <span className="ember">Not committed.</span></h2>
              <p>Ideas we want to build — no promises, no dates.</p>
            </div>

            <div className="rdm-dream-grid">
              {[
                { title: 'Ask Your Repo', blurb: 'Natural-language Q&A over sutra graph + Brain.' },
                { title: 'PR Drift Bot', blurb: 'Flags orphaned endpoints + dangling tests on every PR.' },
                { title: 'VS Code / Cursor Extension', blurb: 'Feature graph + memory recall inside the editor.' },
                { title: 'Auto-Rotate on Leak', blurb: 'secure finds a secret, opens a PR to remove + rotate.' },
                { title: 'What Did I Ship This Week', blurb: 'Harness auto-digest to your build-in-public feed.' },
                { title: 'Memory Time-Travel', blurb: 'See what you knew about this repo a month ago.' },
                { title: 'Onboarding-in-a-Box', blurb: 'Point Forge at a repo, get a new-hire walkthrough.' },
                { title: 'Local LLM Mode', blurb: 'Full end-to-end with Ollama/llama/qwen — zero cloud.' },
              ].map((d) => (
                <div key={d.title} className="rdm-dream-card">
                  <div className="rdm-dream-title">{d.title}</div>
                  <p className="rdm-dream-blurb">{d.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING ── */}
        <section className="reveal">
          <div className="container rdm-closing">
            <p className="rdm-closing-line">
              No date-driven shipping. Each release ships when its gate is met. Forge is free — generous rate limits, no paywall. Need to scale, run private, or meet compliance/SSO? Self-host the open-core (Apache-2.0), or contact us for a one-time setup. We build in public — follow along.
            </p>
            <div className="hero-cta-row" style={{ justifyContent: 'center', marginTop: 32 }}>
              <a className="btn-primary" href="https://mcp.sbknext.com" target="_blank" rel="noreferrer">
                Get Brain — free <span className="arr">→</span>
              </a>
              <a className="btn-ghost" href="https://github.com/sbknext/corebrain" target="_blank" rel="noreferrer">
                Self-host (open-core) <span className="arr">→</span>
              </a>
              <a className="btn-ghost" href="mailto:erp@sbknext.com?subject=Forge%20consulting%20%2F%20enterprise%20setup">
                Contact us <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container footer-inner">
          <div className="built">
            <span className="ember">●</span> forge.sbknext.com — v3 — this page is rendered by{' '}
            <span className="glow-forge">Forge</span>
          </div>
          <div className="links">
            <a href="https://mcp.sbknext.com" target="_blank" rel="noreferrer" style={{ color: 'var(--ember)', fontWeight: 600 }}>mcp.sbknext.com</a>
            <a href="https://github.com/sbknext/forge-client" target="_blank" rel="noreferrer">github</a>
            <a href="/#install">install</a>
            <a href="/#architecture">docs</a>
            <a href="https://www.linkedin.com/in/sambhaji-kolate-845a7279/" target="_blank" rel="noreferrer">linkedin</a>
            <a href="mailto:erp@sbknext.com">erp@sbknext.com</a>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-4)' }}>
            © 2026 sbknext · MIT
          </div>
        </div>
      </footer>
    </>
  );
}
