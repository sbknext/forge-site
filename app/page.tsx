import {
  AgentNetworkClient,
  ArchStatsClient,
  TerminalClient,
  GalleryClient,
  ScrollRevealClient,
} from '@/components/ForgeAnimations';
import EchoDemo from '@/components/EchoDemo';

export default function HomePage() {
  return (
    <>
      {/* Client-side animation bootstrappers (no DOM output) */}
      <AgentNetworkClient />
      <ArchStatsClient />
      <TerminalClient />
      <GalleryClient />
      <ScrollRevealClient />

      {/* ── NAV ── */}
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#">
            <span className="brand-mark" />
            forge
            <span className="live-pill" style={{ marginLeft: 8 }}>
              <span className="dot" />
              <span>v0.4.3 · live</span>
            </span>
          </a>
          <nav className="nav-links">
            <a href="#architecture">architecture</a>
            <a href="#install">install</a>
            <a href="#gallery">agents</a>
            <a href="#built">built with</a>
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
          <a className="nav-cta" href="#install">$ install</a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="hero" id="hero">
          <div className="hero-grid-bg" />
          <div className="container">
            {/* Two-column hero: left = content, right = Echo demo */}
            <div className="hero-two-col">

              {/* ── LEFT COLUMN ── */}
              <div className="hero-left">
                <div className="eyebrow">
                  <span className="bracket">[</span>
                  <span>forge v3 · agent orchestration runtime</span>
                  <span className="bracket">]</span>
                </div>

                {/* MCP redirect banner */}
                <div style={{ marginBottom: 20 }}>
                  <a
                    href="https://mcp.sbknext.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      border: '1px solid rgba(255,122,26,0.4)',
                      borderRadius: 999,
                      padding: '5px 14px',
                      fontFamily: 'var(--mono)',
                      fontSize: 12,
                      color: 'var(--ember)',
                      background: 'var(--ember-faint)',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ opacity: 0.7, fontSize: 11 }}>SDK + MCP server?</span>
                    <span>→ mcp.sbknext.com</span>
                  </a>
                </div>

                <h1>
                  Solo devs ship<br />
                  like <span className="ember">teams</span>.
                </h1>

                <p className="hero-sub">
                  You give Forge an intent. It spawns four sub-agents that review, test, write,
                  and ship — in parallel, on your machine, with full context. You stay in the loop.
                </p>

                {/* Stats row — honest, no fake counters */}
                <div className="hero-meta">
                  <span className="chip"><span>1 dev</span></span>
                  <span className="arr">→</span>
                  <span className="chip"><span className="num">4</span><span>agents</span></span>
                  <span className="arr">→</span>
                  <span className="chip"><span>shipping today</span></span>
                </div>

                <div className="hero-cta-row">
                  <a className="btn-primary" href="#install">
                    Watch a run <span className="arr">→</span>
                  </a>
                  <a className="btn-ghost" href="#architecture">
                    <span style={{ opacity: 0.6 }}>$</span> how it works
                  </a>
                  <a
                    className="btn-ghost"
                    href="https://mcp.sbknext.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      border: '1px solid rgba(255,122,26,0.5)',
                      color: 'var(--ember)',
                      fontWeight: 600,
                    }}
                  >
                    Use Forge MCP <span className="arr">→</span>
                  </a>
                </div>
              </div>{/* end hero-left */}

              {/* ── RIGHT COLUMN — Echo demo ── */}
              <div className="hero-right">
                <EchoDemo />
              </div>

            </div>{/* end hero-two-col */}

            {/* Live agent network (full width below the two-col) */}
            <div className="agent-network">
              <div className="agent-network-label">
                <span>live · agent network</span>
                <span className="line" />
                <span className="runtime">
                  runtime <span className="num" data-runtime="">0:24</span> · 4/4 online
                </span>
              </div>

              <div className="agents-row" id="agents-row">
                {/* Writer */}
                <div className="agent-card" data-agent="writer">
                  <div className="top">
                    <div className="agent-avatar writer" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 20h4l10-10-4-4L4 16v4z" />
                        <path d="M14 6l4 4" />
                      </svg>
                    </div>
                    <div>
                      <div className="agent-name">Writer</div>
                      <div className="agent-role">edits/codes</div>
                    </div>
                  </div>
                  <div className="agent-status running">
                    <span className="dot" /><span>running</span>
                    <span className="ts">0:31</span>
                  </div>
                  <div className="agent-task">editing <span className="file">src/auth.ts</span></div>
                  <div className="agent-bar" />
                </div>

                {/* Reviewer */}
                <div className="agent-card" data-agent="reviewer">
                  <div className="top">
                    <div className="agent-avatar reviewer" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                      </svg>
                    </div>
                    <div>
                      <div className="agent-name">Reviewer</div>
                      <div className="agent-role">reads/critiques</div>
                    </div>
                  </div>
                  <div className="agent-status running">
                    <span className="dot" /><span>running</span>
                    <span className="ts">0:12</span>
                  </div>
                  <div className="agent-task">scanning <span className="file">src/auth.ts</span></div>
                  <div className="agent-bar" />
                </div>

                {/* Tester */}
                <div className="agent-card" data-agent="tester">
                  <div className="top">
                    <div className="agent-avatar tester" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 3v6L4 19a2 2 0 002 2h12a2 2 0 002-2L15 9V3" />
                        <path d="M8 3h8" />
                        <path d="M7 14h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="agent-name">Tester</div>
                      <div className="agent-role">runs/verifies</div>
                    </div>
                  </div>
                  <div className="agent-status running">
                    <span className="dot" /><span>running</span>
                    <span className="ts">0:04</span>
                  </div>
                  <div className="agent-task">running auth/*.test.ts</div>
                  <div className="agent-bar" />
                </div>

                {/* Deployer */}
                <div className="agent-card" data-agent="deployer">
                  <div className="top">
                    <div className="agent-avatar deployer" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                        <path d="M12 22V12" />
                        <path d="M3 12l9-9 9 9" />
                      </svg>
                    </div>
                    <div>
                      <div className="agent-name">Deployer</div>
                      <div className="agent-role">ships/rolls</div>
                    </div>
                  </div>
                  <div className="agent-status running">
                    <span className="dot" /><span>queued</span>
                    <span className="ts">0:02</span>
                  </div>
                  <div className="agent-task">waiting on tester</div>
                  <div className="agent-bar" />
                </div>

                {/* Connecting arrows */}
                <div className="agent-arrows" aria-hidden="true">
                  <svg viewBox="0 0 1000 60" preserveAspectRatio="none">
                    <defs>
                      <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5"
                        markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="flow-arrow" />
                      </marker>
                    </defs>
                    <path id="flow-1" className="flow-line"
                      d="M 175 30 C 230 30, 270 30, 325 30"
                      markerEnd="url(#arrowhead)" />
                    <path id="flow-2" className="flow-line"
                      d="M 425 30 C 480 30, 520 30, 575 30"
                      markerEnd="url(#arrowhead)" />
                    <path id="flow-3" className="flow-line"
                      d="M 675 30 C 730 30, 770 30, 825 30"
                      markerEnd="url(#arrowhead)" />
                    <circle r="3" className="flow-packet">
                      <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#flow-1" />
                      </animateMotion>
                    </circle>
                    <circle r="3" className="flow-packet">
                      <animateMotion dur="2.4s" begin="0.8s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#flow-2" />
                      </animateMotion>
                    </circle>
                    <circle r="3" className="flow-packet">
                      <animateMotion dur="2.4s" begin="1.6s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#flow-3" />
                      </animateMotion>
                    </circle>
                  </svg>
                </div>
              </div>

              <div className="hero-summary">
                <span className="pill">1 dev</span>
                <span className="arr">→</span>
                <span className="pill ember">4 agents · parallel</span>
                <span className="arr">→</span>
                <span className="pill">shipped</span>
                <span style={{ color: 'var(--text-4)' }}>·</span>
                <span style={{ color: 'var(--text-3)' }}>
                  avg run · <span style={{ color: 'var(--ember)' }}>28s</span> · zero human glue
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* ── ARCHITECTURE ── */}
        <section id="architecture" className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> architecture <span className="bracket">/</span></span>
              <h2>One brain. Four hands.<br />Any model.</h2>
              <p>
                Forge brain holds task state and dispatches sub-agents in parallel. Each agent picks its own provider — Anthropic, OpenAI, local Ollama — and streams back. You see every token.
                <br /><br />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-3)' }}>
                  Your code calls <span style={{ color: 'var(--ember)' }}>forge-client</span> (SDK). The SDK talks to <span style={{ color: 'var(--ember)' }}>forge-mcp</span> (self-host, MIT) or <span style={{ color: 'var(--ember)' }}>Forge Cloud</span> (hosted at <a href="https://mcp.sbknext.com" target="_blank" rel="noreferrer" style={{ color: 'var(--ember)', borderBottom: '1px dashed rgba(255,122,26,0.4)' }}>mcp.sbknext.com</a>). Same protocol either way.
                </span>
              </p>
            </div>

            <div className="arch-stage">
              <div className="arch-stage-header">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--ember)' }}>●</span> forge.brain — running
                  <span className="demo-tag">demo run</span>
                </span>
                <div className="right">
                  <span><span style={{ color: 'var(--text-2)' }}>queue</span>: <span className="num" data-tick="queue">3</span></span>
                  <span><span style={{ color: 'var(--text-2)' }}>tokens/s</span>: <span className="num" data-tick="tokens">218</span></span>
                  <span><span style={{ color: 'var(--text-2)' }}>cost</span>: <span className="num" data-tick="cost">$0.04</span></span>
                </div>
              </div>

              <div className="arch-svg-wrap">
                <svg viewBox="0 0 900 360" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <marker id="arch-arrow" viewBox="0 0 10 10" refX="7" refY="5"
                      markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M0,0 L10,5 L0,10 z" fill="#6b6b70" />
                    </marker>
                    <marker id="arch-arrow-hot" viewBox="0 0 10 10" refX="7" refY="5"
                      markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M0,0 L10,5 L0,10 z" fill="#ff7a1a" opacity="0.8" />
                    </marker>
                    <radialGradient id="brain-grad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ff7a1a" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Intent */}
                  <g transform="translate(40,160)">
                    <rect x="0" y="0" width="120" height="40" rx="6" fill="#141416" stroke="#2a2a2f" strokeWidth="1" />
                    <text x="60" y="17" textAnchor="middle" className="arch-node-label" style={{ fontSize: 10 }}>YOU · intent</text>
                    <text x="60" y="30" textAnchor="middle" className="arch-node-sub">&quot;fix null deref&quot;</text>
                  </g>
                  <path className="arch-line hot" d="M 160 180 C 220 180, 240 180, 320 180"
                    markerEnd="url(#arch-arrow-hot)" />

                  {/* Brain */}
                  <g transform="translate(380,130)">
                    <circle cx="60" cy="50" r="80" fill="url(#brain-grad)" />
                    <circle cx="60" cy="50" r="46" className="brain-glow" />
                    <polygon points="60,8 104,32 104,68 60,92 16,68 16,32" className="brain-core" />
                    <polygon points="60,28 84,42 84,58 60,72 36,58 36,42"
                      fill="none" stroke="#ff7a1a" strokeWidth="1" opacity="0.6" />
                    <circle cx="60" cy="50" r="6" fill="#ff7a1a" />
                    <text x="60" y="115" textAnchor="middle" className="arch-node-label" style={{ fontSize: 11, fontWeight: 600, fill: '#f5f5f5' }}>forge.brain</text>
                    <text x="60" y="128" textAnchor="middle" className="arch-node-sub">orchestrator · state</text>
                  </g>

                  {/* Agents */}
                  <g>
                    <g transform="translate(560,50)">
                      <rect x="0" y="0" width="120" height="38" rx="6" className="arch-agent active" />
                      <circle cx="14" cy="19" r="4" fill="#ff7a1a" />
                      <text x="26" y="16" className="arch-node-label" style={{ fill: '#f5f5f5' }}>writer</text>
                      <text x="26" y="29" className="arch-node-sub">claude-sonnet-4.5</text>
                    </g>
                    <g transform="translate(560,105)">
                      <rect x="0" y="0" width="120" height="38" rx="6" className="arch-agent" />
                      <circle cx="14" cy="19" r="4" fill="#c4a6f8" />
                      <text x="26" y="16" className="arch-node-label" style={{ fill: '#f5f5f5' }}>reviewer</text>
                      <text x="26" y="29" className="arch-node-sub">claude-haiku</text>
                    </g>
                    <g transform="translate(560,160)">
                      <rect x="0" y="0" width="120" height="38" rx="6" className="arch-agent" />
                      <circle cx="14" cy="19" r="4" fill="#6ee7b7" />
                      <text x="26" y="16" className="arch-node-label" style={{ fill: '#f5f5f5' }}>tester</text>
                      <text x="26" y="29" className="arch-node-sub">gpt-4o-mini</text>
                    </g>
                    <g transform="translate(560,215)">
                      <rect x="0" y="0" width="120" height="38" rx="6" className="arch-agent" />
                      <circle cx="14" cy="19" r="4" fill="#60a5fa" />
                      <text x="26" y="16" className="arch-node-label" style={{ fill: '#f5f5f5' }}>deployer</text>
                      <text x="26" y="29" className="arch-node-sub">local · ollama</text>
                    </g>
                  </g>

                  {/* Brain → agents */}
                  <path id="b2w" className="arch-line" d="M 500 158 C 540 158, 540 69, 560 69" markerEnd="url(#arch-arrow)" />
                  <path id="b2r" className="arch-line" d="M 500 175 C 540 175, 540 124, 560 124" markerEnd="url(#arch-arrow)" />
                  <path id="b2t" className="arch-line" d="M 500 192 C 540 192, 540 179, 560 179" markerEnd="url(#arch-arrow)" />
                  <path id="b2d" className="arch-line" d="M 500 209 C 540 209, 540 234, 560 234" markerEnd="url(#arch-arrow)" />

                  {/* Moving packets */}
                  <circle r="2.5" fill="#ff7a1a"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#b2w" /></animateMotion></circle>
                  <circle r="2.5" fill="#c4a6f8"><animateMotion dur="2s" begin="0.5s" repeatCount="indefinite"><mpath href="#b2r" /></animateMotion></circle>
                  <circle r="2.5" fill="#6ee7b7"><animateMotion dur="2s" begin="1s" repeatCount="indefinite"><mpath href="#b2t" /></animateMotion></circle>
                  <circle r="2.5" fill="#60a5fa"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite"><mpath href="#b2d" /></animateMotion></circle>

                  {/* Providers */}
                  <g>
                    <text x="800" y="32" textAnchor="middle" className="arch-node-sub"
                      style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase' }}>providers</text>
                    <g transform="translate(750,50)">
                      <rect x="0" y="0" width="110" height="38" rx="6" className="arch-provider" />
                      <circle cx="14" cy="19" r="3" fill="#ff7a1a" opacity="0.9" />
                      <text x="24" y="16" className="arch-node-label" style={{ fill: '#f5f5f5' }}>Anthropic</text>
                      <text x="24" y="29" className="arch-node-sub">claude · sonnet+haiku</text>
                    </g>
                    <g transform="translate(750,105)">
                      <rect x="0" y="0" width="110" height="38" rx="6" className="arch-provider" />
                      <circle cx="14" cy="19" r="3" fill="#10a37f" opacity="0.9" />
                      <text x="24" y="16" className="arch-node-label" style={{ fill: '#f5f5f5' }}>OpenAI</text>
                      <text x="24" y="29" className="arch-node-sub">gpt-4o / o-series</text>
                    </g>
                    <g transform="translate(750,160)">
                      <rect x="0" y="0" width="110" height="38" rx="6" className="arch-provider" />
                      <circle cx="14" cy="19" r="3" fill="#a78bfa" opacity="0.9" />
                      <text x="24" y="16" className="arch-node-label" style={{ fill: '#f5f5f5' }}>Ollama</text>
                      <text x="24" y="29" className="arch-node-sub">local · llama · qwen</text>
                    </g>
                  </g>

                  {/* Agents → providers */}
                  <path id="a2p1" className="arch-line" d="M 680 69 C 715 69, 720 69, 750 69" />
                  <path id="a2p2" className="arch-line" d="M 680 124 C 715 124, 720 124, 750 124" />
                  <path id="a2p3" className="arch-line" d="M 680 179 C 715 179, 720 124, 750 124" />
                  <path id="a2p4" className="arch-line" d="M 680 234 C 715 234, 720 179, 750 179" />

                  {/* Legend */}
                  <g transform="translate(40,310)">
                    <text x="0" y="0" fill="#a1a1a6" style={{ fontFamily: 'var(--mono)', fontSize: 10 }}>stream</text>
                    <circle cx="56" cy="-3" r="3" fill="#ff7a1a" className="legend-dot a" />
                    <text x="66" y="0" fill="#6b6b70" style={{ fontFamily: 'var(--mono)', fontSize: 10 }}>tokens · live</text>
                    <text x="170" y="0" fill="#a1a1a6" style={{ fontFamily: 'var(--mono)', fontSize: 10 }}>queue</text>
                    <circle cx="212" cy="-3" r="3" fill="#ff7a1a" className="legend-dot b" />
                    <text x="222" y="0" fill="#6b6b70" style={{ fontFamily: 'var(--mono)', fontSize: 10 }}>parallel · fan-out</text>
                    <text x="345" y="0" fill="#a1a1a6" style={{ fontFamily: 'var(--mono)', fontSize: 10 }}>memory</text>
                    <circle cx="396" cy="-3" r="3" fill="#ff7a1a" className="legend-dot c" />
                    <text x="406" y="0" fill="#6b6b70" style={{ fontFamily: 'var(--mono)', fontSize: 10 }}>brain-mcp shared</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>


        {/* ── INSTALL ── */}
        <section id="install" className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> install <span className="bracket">/</span></span>
              <h2>Install in your language.</h2>
              <p>Three runtimes — same brain.</p>
            </div>

            <div style={{
              background: 'var(--surface-1)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '28px 32px',
              maxWidth: 640,
              margin: '0 auto',
            }}>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 18, fontSize: 14.5 }}>
                The full install + signup flow lives at{' '}
                <a href="https://mcp.sbknext.com" target="_blank" rel="noreferrer"
                  style={{ color: 'var(--ember)', borderBottom: '1px dashed rgba(255,122,26,0.4)', fontWeight: 600 }}>
                  mcp.sbknext.com
                </a>{' '}
                — that&apos;s where you get a token, see Claude Desktop / Cursor / VS Code configs, and
                choose between self-hosting <code style={{ fontFamily: 'var(--mono)', color: 'var(--ember)', fontSize: 12 }}>forge-mcp</code> (free, MIT) or Forge Cloud (hosted, preview).
              </p>

              <div style={{ fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--text-3)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Quick reference — SDK only
              </div>

              {/* Python */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ember)', letterSpacing: '0.08em' }}>Python ≥ 3.9</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', background: 'rgba(255,122,26,0.1)', border: '1px solid rgba(255,122,26,0.25)', borderRadius: 4, padding: '1px 5px' }}>live on PyPI</span>
                </div>
                <code style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-1)', background: 'var(--surface-2)', padding: '7px 12px', borderRadius: 6 }}>
                  pip install sbknext-forge
                </code>
              </div>

              {/* Node */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#6ee7b7', letterSpacing: '0.08em' }}>Node.js ≥ 18</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#6ee7b7', background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.25)', borderRadius: 4, padding: '1px 5px' }}>live on npm</span>
                </div>
                <code style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-1)', background: 'var(--surface-2)', padding: '7px 12px', borderRadius: 6 }}>
                  npm install @sbknext/forge
                </code>
              </div>

              {/* Rust */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#c4a6f8', letterSpacing: '0.08em' }}>Rust</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--text-3)', background: 'rgba(161,161,166,0.08)', border: '1px solid rgba(161,161,166,0.2)', borderRadius: 4, padding: '1px 5px' }}>coming soon on crates.io</span>
                </div>
                <code style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-3)', background: 'var(--surface-2)', padding: '7px 12px', borderRadius: 6, opacity: 0.6 }}>
                  sbknext-forge = &quot;0.1&quot;  &nbsp;# crates.io coming soon
                </code>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href="https://mcp.sbknext.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 13, padding: '8px 18px' }}
                >
                  Get a token → mcp.sbknext.com
                </a>
                <a
                  href="https://github.com/sbknext/corebrain"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: 13, padding: '8px 18px' }}
                >
                  Self-host → github.com/sbknext/corebrain
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* ── GALLERY ── */}
        <section id="gallery" className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> why forge <span className="bracket">/</span></span>
              <h2>Don&apos;t read about agents.<br />Watch them work.</h2>
              <p>Three of Forge&apos;s four sub-agents, captured mid-run. Live. No screenshots.</p>
            </div>

            <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-3)', marginBottom: 14, lineHeight: 1.6 }}>
              Gallery shows planned CLI commands &mdash; see{' '}
              <a href="https://github.com/sbknext/forge-client" style={{ color: 'var(--ember)', borderBottom: '1px dashed var(--ember-dim)' }}>
                GitHub
              </a>{' '}for current capabilities.
            </div>

            <div className="gallery">
              {/* Reviewer */}
              <div className="gallery-card">
                <div className="gallery-card-head">
                  <div className="avatar" style={{ color: '#c4a6f8' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                    </svg>
                  </div>
                  <div className="who"><span className="name">Reviewer</span><span className="role">reads · critiques</span></div>
                  <div className="right"><span className="dot" />live</div>
                </div>
                <div className="gallery-card-body" id="gallery-reviewer-body" />
                <div className="gallery-card-foot">
                  <span>$ forge review</span>
                  <span className="ember">+1 issue resolved</span>
                </div>
              </div>

              {/* Tester */}
              <div className="gallery-card">
                <div className="gallery-card-head">
                  <div className="avatar" style={{ color: '#6ee7b7' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 3v6L4 19a2 2 0 002 2h12a2 2 0 002-2L15 9V3" />
                      <path d="M8 3h8" /><path d="M7 14h10" />
                    </svg>
                  </div>
                  <div className="who"><span className="name">Tester</span><span className="role">runs · verifies</span></div>
                  <div className="right"><span className="dot" />live</div>
                </div>
                <div className="gallery-card-body" id="gallery-tester-body" />
                <div className="gallery-card-foot">
                  <span>$ pnpm test</span>
                  <span className="green">14 / 14 pass</span>
                </div>
              </div>

              {/* Deployer */}
              <div className="gallery-card">
                <div className="gallery-card-head">
                  <div className="avatar" style={{ color: '#60a5fa' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" /><path d="M12 22V12" /><path d="M3 12l9-9 9 9" />
                    </svg>
                  </div>
                  <div className="who"><span className="name">Deployer</span><span className="role">ships · rolls</span></div>
                  <div className="right"><span className="dot" />live</div>
                </div>
                <div className="gallery-card-body" id="gallery-deployer-body" />
                <div className="gallery-card-foot">
                  <span>$ forge ship</span>
                  <span className="ember">→ prod · v0.4.3</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── BUILT WITH FORGE ── */}
        <section id="built" className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">/</span> dogfood <span className="bracket">/</span></span>
              <h2>Built with Forge.<br />Running right now.</h2>
              <p>Every project below is shipped, maintained, and reviewed by the four-agent loop you just watched. Including Forge itself.</p>
            </div>

            <div className="products">
              {/* Echo AI */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#ff7a1a' }}>E</div>
                  <div>
                    <div className="pname">Echo AI</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#6ee7b7', background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.25)', borderRadius: 4, padding: '1px 6px', display: 'inline-block', marginTop: 2 }}>live</div>
                  </div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Consumer AI assistant — conversational chat, multi-provider routing. Try the live demo in the hero.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> live since Apr 2026</span>
                  <a className="link" href="https://echo.sbknext.com" target="_blank" rel="noreferrer">open <span>→</span></a>
                </div>
              </div>

              {/* forge-linkedin */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#ff7a1a' }}>L</div>
                  <div><div className="pname">forge-linkedin</div></div>
                  <div className="meta"><span className="dot" />live · v0.1.0</div>
                </div>
                <div className="desc">Safe-pace LinkedIn engagement. Tag-search + 30 likes/day, real Chrome session.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> open source · Rust</span>
                  <a className="link" href="https://github.com/sbknext/forge-linkedin" target="_blank" rel="noreferrer">github <span>→</span></a>
                </div>
              </div>

              {/* Forge MCP */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#c4a6f8' }}>B</div>
                  <div>
                    <div className="pname">Forge MCP</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#c4a6f8', background: 'rgba(196,166,248,0.1)', border: '1px solid rgba(196,166,248,0.25)', borderRadius: 4, padding: '1px 6px', display: 'inline-block', marginTop: 2 }}>now part of the Forge ecosystem · mcp.sbknext.com</div>
                  </div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Long-term memory protocol. The shared substrate every Forge agent reads + writes.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> live · self-hosted · per-user isolated</span>
                  <a className="link" href="https://mcp.sbknext.com" target="_blank" rel="noreferrer">mcp.sbknext.com <span>→</span></a>
                </div>
              </div>

              {/* claude-fuse */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#60a5fa' }}>F</div>
                  <div>
                    <div className="pname">claude-fuse</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#60a5fa', background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.25)', borderRadius: 4, padding: '1px 6px', display: 'inline-block', marginTop: 2 }}>MIT</div>
                  </div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Filesystem MCP that lets Claude mount your repo. Read, write, watch — with policy.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> MIT · early access</span>
                  <a className="link" href="https://github.com/sbknext/claude-fuse" target="_blank" rel="noreferrer">github <span>→</span></a>
                </div>
              </div>

              {/* Forge */}
              <div className="product-card" style={{ borderColor: 'rgba(255,122,26,0.3)' }}>
                <div className="head">
                  <div className="pmark" style={{ color: '#ff7a1a', borderColor: 'rgba(255,122,26,0.4)', background: 'var(--ember-faint)' }}>⬢</div>
                  <div>
                    <div className="pname">Forge</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', background: 'var(--ember-faint)', border: '1px solid rgba(255,122,26,0.3)', borderRadius: 4, padding: '1px 6px', display: 'inline-block', marginTop: 2 }}>self-hosting · v0.4.3</div>
                  </div>
                  <div className="meta"><span className="dot" />live · self-hosted</div>
                </div>
                <div className="desc">This thing. Forge ships Forge. Every commit reviewed + tested + deployed by Forge.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> v0.4.3 · shipped today</span>
                  <a className="link" href="https://github.com/sbknext/forge-client" target="_blank" rel="noreferrer">source <span>→</span></a>
                </div>
              </div>

              {/* Sutra */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#6ee7b7' }}>S</div>
                  <div>
                    <div className="pname">Sutra</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#6ee7b7', background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.25)', borderRadius: 4, padding: '1px 6px', display: 'inline-block', marginTop: 2 }}>MIT</div>
                  </div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Static structural graph for any JS/TS repo. Scan → flow graph + drift checks: orphaned endpoints, dead imports, dangling tests.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> MIT · Phase 0</span>
                  <a className="link" href="https://github.com/sbknext/forge-sutra" target="_blank" rel="noreferrer">github <span>→</span></a>
                </div>
              </div>

              {/* Forge Secure */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#f87171' }}>🛡</div>
                  <div>
                    <div className="pname">Forge Secure</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#f87171', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 4, padding: '1px 6px', display: 'inline-block', marginTop: 2 }}>open source</div>
                  </div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Security scanner — gitleaks + osv + semgrep → masked, candidate-labelled findings + a CI gate. Built into the four-agent loop.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> secrets + deps · CI gate</span>
                  <a className="link" href="https://github.com/sbknext/forge-secure" target="_blank" rel="noreferrer">github <span>→</span></a>
                </div>
              </div>

              {/* Your project */}
              <div className="product-card dashed-tile" style={{ backgroundColor: 'transparent', color: 'var(--text-3)' }}>
                <div className="head">
                  <div className="pmark" style={{ color: 'var(--text-3)', borderStyle: 'dashed', background: 'transparent' }}>+</div>
                  <div><div className="pname" style={{ color: 'var(--text-2)' }}>your project</div></div>
                  <div className="meta" style={{ color: 'var(--text-3)' }}>
                    <span className="dot" style={{ background: 'var(--text-3)', animation: 'none' }} />idle
                  </div>
                </div>
                <div className="desc" style={{ color: 'var(--text-3)' }}>
                  Bootstrap a new repo with Forge in 30 seconds. Get four agents and a brain on day one.
                </div>
                <div className="tail" style={{ borderColor: 'var(--border)' }}>
                  <span className="stat" style={{ color: 'var(--text-3)' }}>$ forge new my-app</span>
                  <a className="link" href="#install" style={{ color: 'var(--ember)' }}>start <span>→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TWO WAYS TO RUN ── */}
        <section id="ecosystem" className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">[</span> ECOSYSTEM <span className="bracket">]</span></span>
              <h2>Two ways to run Forge.</h2>
              <p>One protocol. One SDK. Same agent code. Both free — no card, no subscription.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 760, margin: '0 auto' }}>
              {/* OSS card */}
              <div style={{
                background: 'var(--surface-1)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '24px 26px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Option 1</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>forge-mcp <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#6ee7b7', background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.25)', borderRadius: 4, padding: '1px 6px', marginLeft: 6 }}>OSS</span></div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', marginBottom: 10 }}>Open source · MIT · Apache-2.0</div>
                <p style={{ color: 'var(--text-3)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 16 }}>
                  Self-host on your machine. SQLite + local embeddings. No data leaves your box.
                </p>
                <a
                  href="https://github.com/sbknext/corebrain"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ember)', borderBottom: '1px dashed rgba(255,122,26,0.4)', textDecoration: 'none' }}
                >
                  github.com/sbknext/corebrain →
                </a>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-4)', marginTop: 8 }}>(public flip soon)</div>
              </div>

              {/* Cloud card */}
              <div style={{
                background: 'var(--surface-1)',
                border: '1px solid rgba(255,122,26,0.35)',
                borderRadius: 10,
                padding: '24px 26px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Option 2</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>Forge Cloud <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', background: 'var(--ember-faint)', border: '1px solid rgba(255,122,26,0.3)', borderRadius: 4, padding: '1px 6px', marginLeft: 6 }}>preview</span></div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', marginBottom: 10 }}>Hosted MCP endpoint · cb.sbknext.com/mcp</div>
                <p style={{ color: 'var(--text-3)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 16 }}>
                  Postgres + pgvector + shared communities. Free — generous rate limits, no paywall. Free token via signup.
                </p>
                <a
                  href="https://mcp.sbknext.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ember)', borderBottom: '1px dashed rgba(255,122,26,0.4)', textDecoration: 'none', fontWeight: 600 }}
                >
                  mcp.sbknext.com →
                </a>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-4)', marginTop: 8 }}>(preview · free token via signup)</div>
              </div>
            </div>

            {/* Enterprise / self-host + contact */}
            <div style={{
              maxWidth: 760,
              margin: '24px auto 0',
              background: 'var(--surface-1)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '24px 26px',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Enterprise &amp; help</div>
              <p style={{ color: 'var(--text-3)', fontSize: 13.5, lineHeight: 1.7, marginBottom: 16 }}>
                Forge is free with generous rate limits — the only limit is rate, never features behind a paywall.
                Need private infra, scale, or compliance/SSO? <b style={{ color: 'var(--text-2)' }}>Self-host the open-core</b> (Apache-2.0) — your data never leaves your box.
                Want consulting, onboarding, or a hand standing it up? Reach out — enterprise setup is a one-time engagement, no recurring subscription.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/sbknext/corebrain"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: 13, padding: '8px 18px', border: '1px solid rgba(255,122,26,0.5)', color: 'var(--ember)', fontWeight: 600 }}
                >
                  Self-host (open-core) <span className="arr">→</span>
                </a>
                <a
                  href="mailto:erp@sbknext.com?subject=Forge%20consulting%20%2F%20enterprise%20setup"
                  className="btn-ghost"
                  style={{ fontSize: 13, padding: '8px 18px' }}
                >
                  Contact us <span className="arr">→</span>
                </a>
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-4)', marginTop: 10 }}>
                See <a href="https://github.com/sbknext/forge-site/blob/main/SELF-HOST.md" target="_blank" rel="noreferrer" style={{ color: 'var(--ember)', borderBottom: '1px dashed rgba(255,122,26,0.4)' }}>SELF-HOST.md</a> for the open-core self-host guide.
              </div>
            </div>
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section id="roadmap" className="reveal">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow"><span className="bracket">[</span> ROADMAP <span className="bracket">]</span></span>
              <h2>Shipped. Building.<br />Next.</h2>
              <p>Honest status — only what&apos;s real. No fake dates, no vapourware. Built in public, one milestone at a time.</p>
            </div>

            <div className="roadmap">
              {/* SHIPPED */}
              <div className="rm-col">
                <div className="rm-col-head">
                  <span className="rm-badge shipped"><span className="dot" /> shipped · live now</span>
                </div>
                <ul className="rm-list">
                  <li><b>Forge v0.4.3</b> — agent orchestration runtime, self-hosting, live at forge.sbknext.com.</li>
                  <li><b>forge SDK</b> — <code>pip install sbknext-forge</code> · <code>npm @sbknext/forge</code>. Both live on PyPI + npm.</li>
                  <li><b>Brain MCP</b> — hosted memory protocol at mcp.sbknext.com. Per-user isolated, self-hostable.</li>
                  <li><b>Echo AI</b> — consumer AI assistant, live at echo.sbknext.com. Try the hero demo.</li>
                  <li><b>claude-fuse</b> — MIT, local-first observability for Claude Code sessions.</li>
                  <li><b>Sutra</b> — MIT, static structural code-graph + drift checks. Open source on GitHub.</li>
                </ul>
              </div>

              {/* BUILDING */}
              <div className="rm-col">
                <div className="rm-col-head">
                  <span className="rm-badge building"><span className="dot" /> building now</span>
                </div>
                <ul className="rm-list">
                  <li><b>Forge Cloud</b> — hosted MCP endpoint, preview. Postgres + pgvector + shared communities.</li>
                  <li><b>Forge Secure</b> — security scanner (gitleaks + osv + semgrep) → masked findings + CI gate. Open source, active dev.</li>
                  <li><b>Sutra feature viewer</b> — interactive flow + health dashboard; JS/TS + Python.</li>
                  <li><b>Autonomous SDLC</b> — planner → executor → verify loop; mistake-ledger driven. Manual today, automating the orchestrator.</li>
                </ul>
              </div>

              {/* NEXT */}
              <div className="rm-col">
                <div className="rm-col-head">
                  <span className="rm-badge next"><span className="dot" /> next · exploring</span>
                </div>
                <ul className="rm-list">
                  <li><b>Self-evolving harness</b> — agents that critique + rewrite their own rules against evals.</li>
                  <li><b>Rust SDK</b> — <code>crates.io</code> publish (Python + Node already live).</li>
                  <li><b>Forge Secure dashboard</b> — severity cards, drill-down, trend-over-time.</li>
                  <li><b>Public OSS flip</b> — corebrain / forge-mcp self-host repos going public.</li>
                </ul>
              </div>
            </div>

            <div className="rm-foot">
              <span className="ember">●</span> Status is honest, not aspirational — if it says <b>shipped</b>, it&apos;s live and you can use it today. Watch this page; it changes as things ship.
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
            <a href="#install">install</a>
            <a href="#architecture">docs</a>
            <a href="https://www.linkedin.com/in/sambhaji-kolate-845a7279/" target="_blank" rel="noreferrer">linkedin</a>
            <a href="mailto:erp@sbknext.com">erp@sbknext.com</a>
            <a href="/watch" className="watch-cta-link" title="recorded run — watch the AI build">Watch the AI build →</a>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-4)' }}>
            © 2026 sbknext · MIT
          </div>
        </div>
      </footer>
    </>
  );
}
