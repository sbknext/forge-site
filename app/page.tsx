import {
  AgentNetworkClient,
  ArchStatsClient,
  TerminalClient,
  GalleryClient,
  ScrollRevealClient,
} from '@/components/ForgeAnimations';

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
            <a href="https://github.com/sbknext/forge">github ↗</a>
          </nav>
          <a className="nav-cta" href="#install">$ install</a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="hero" id="hero">
          <div className="hero-grid-bg" />
          <div className="container">
            <div className="eyebrow">
              <span className="bracket">[</span>
              <span>forge v3 · agent orchestration runtime</span>
              <span className="bracket">]</span>
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
            </div>

            {/* Live agent network */}
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
              <p>Forge brain holds task state and dispatches sub-agents in parallel. Each agent picks its own provider — Anthropic, OpenAI, local Ollama — and streams back. You see every token.</p>
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
              <h2>One line. Four agents online.</h2>
              <p>
                Forge runs locally. Bring your own API keys, or point it at Ollama and run offline.
                Persistent state lives in{' '}
                <code style={{ fontFamily: 'var(--mono)', color: 'var(--ember)' }}>.forge/</code>.
              </p>
            </div>

            {/* Install tabs */}
            <div className="install-side">
              <div className="terminal">
                <div className="terminal-bar">
                  <div className="tb-dots"><span /><span /><span /></div>
                  <div className="tb-title">~/code/forge — zsh · forge run</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-3)' }}>120×30</div>
                </div>
                <div className="terminal-body" id="install-term" />
              </div>

              <aside className="install-side-info">
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  install from source
                </div>

                {/* Python */}
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ember)', marginBottom: 4, letterSpacing: '0.08em' }}>Python &ge; 3.9</div>
                  <code style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--text-1)', background: 'var(--surface-1)', padding: '6px 10px', borderRadius: 5, wordBreak: 'break-all' }}>
                    pip install &quot;git+https://github.com/sbknext/forge-client.git#subdirectory=python&quot;
                  </code>
                </div>

                {/* Node */}
                <div style={{ marginTop: 10 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#6ee7b7', marginBottom: 4, letterSpacing: '0.08em' }}>Node.js &ge; 18</div>
                  <code style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--text-1)', background: 'var(--surface-1)', padding: '6px 10px', borderRadius: 5, wordBreak: 'break-all' }}>
                    git clone https://github.com/sbknext/forge-client<br />
                    cd forge-client/node &amp;&amp; npm install
                  </code>
                </div>

                {/* Rust */}
                <div style={{ marginTop: 10 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#c4a6f8', marginBottom: 4, letterSpacing: '0.08em' }}>Rust (Cargo.toml)</div>
                  <code style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--text-1)', background: 'var(--surface-1)', padding: '6px 10px', borderRadius: 5, wordBreak: 'break-all' }}>
                    forge = &#123; git = &quot;https://github.com/sbknext/forge-client&quot; &#125;
                  </code>
                </div>

                <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-3)', lineHeight: 1.6 }}>
                  Packages coming to PyPI / npm / crates.io soon &mdash; installs from source today.
                  <br />
                  <a href="https://github.com/sbknext/forge-client" style={{ color: 'var(--ember)', borderBottom: '1px dashed var(--ember-dim)' }}>
                    github.com/sbknext/forge-client &rarr;
                  </a>
                </div>

                <div style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    requirements
                  </div>
                  <ul style={{ listStyle: 'none', marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--mono)', fontSize: 12 }}>
                    <li>· macOS 13+ <span style={{ color: 'var(--text-3)' }}>/ Linux glibc 2.28+</span></li>
                    <li>· git <span style={{ color: 'var(--text-3)' }}>2.40+</span></li>
                    <li>· optional · <span style={{ color: 'var(--ember)' }}>$ANTHROPIC_API_KEY</span></li>
                    <li>· optional · <span style={{ color: 'var(--ember)' }}>$OPENAI_API_KEY</span></li>
                    <li>· optional · ollama <span style={{ color: 'var(--text-3)' }}>(offline mode)</span></li>
                  </ul>
                </div>

                <div className="platform-row" style={{ marginTop: 14 }}>
                  <span className="platform-chip"><span className="dot" />macOS arm64</span>
                  <span className="platform-chip"><span className="dot" />macOS x64</span>
                  <span className="platform-chip"><span className="dot" />linux x64</span>
                  <span className="platform-chip" style={{ color: 'var(--text-3)' }}>
                    <span className="dot" style={{ background: 'var(--amber)' }} />windows · soon
                  </span>
                </div>
              </aside>
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
                  <div><div className="pname">Echo AI</div></div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Voice-to-action assistant. Speak, and Echo dispatches a Forge agent to do the work.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> live since Apr 2026</span>
                  <a className="link" href="#">open <span>→</span></a>
                </div>
              </div>

              {/* Vaidya */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#6ee7b7' }}>V</div>
                  <div><div className="pname">Vaidya</div></div>
                  <div className="meta soon"><span className="dot" />coming soon</div>
                </div>
                <div className="desc">Clinical companion for solo practitioners. Notes in. Plan + chart out.</div>
                <div className="tail">
                  <span className="stat">private beta · q3</span>
                  <a className="link" href="#">waitlist <span>→</span></a>
                </div>
              </div>

              {/* Brain MCP */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#c4a6f8' }}>B</div>
                  <div><div className="pname">Brain MCP</div></div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Long-term memory protocol. The shared substrate every Forge agent reads + writes.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> 41 memories · 5 projects · self-hosted</span>
                  <a className="link" href="#">docs <span>→</span></a>
                </div>
              </div>

              {/* claude-fuse */}
              <div className="product-card">
                <div className="head">
                  <div className="pmark" style={{ color: '#60a5fa' }}>F</div>
                  <div><div className="pname">claude-fuse</div></div>
                  <div className="meta"><span className="dot" />live</div>
                </div>
                <div className="desc">Filesystem MCP that lets Claude mount your repo. Read, write, watch — with policy.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> MIT · early access</span>
                  <a className="link" href="#">github <span>→</span></a>
                </div>
              </div>

              {/* Forge */}
              <div className="product-card" style={{ borderColor: 'rgba(255,122,26,0.3)' }}>
                <div className="head">
                  <div className="pmark" style={{ color: '#ff7a1a', borderColor: 'rgba(255,122,26,0.4)', background: 'var(--ember-faint)' }}>⬢</div>
                  <div><div className="pname">Forge</div></div>
                  <div className="meta"><span className="dot" />live · self-hosted</div>
                </div>
                <div className="desc">This thing. Forge ships Forge. Every commit reviewed + tested + deployed by Forge.</div>
                <div className="tail">
                  <span className="stat"><span className="ember">●</span> v0.4.3 · shipped today</span>
                  <a className="link" href="#">source <span>→</span></a>
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

      </main>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container footer-inner">
          <div className="built">
            <span className="ember">●</span> forge.sbknext.com — v3 — this page is rendered by{' '}
            <span className="glow-forge">Forge</span>
          </div>
          <div className="links">
            <a href="https://github.com/sbknext/forge">github</a>
            <a href="#install">install</a>
            <a href="#architecture">docs</a>
            <a href="#">@sbknext</a>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-4)' }}>
            © 2026 sbknext · MIT
          </div>
        </div>
      </footer>
    </>
  );
}
