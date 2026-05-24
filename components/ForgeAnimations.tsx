'use client';

import { useEffect, useRef } from 'react';

/* ============================================================
   ForgeAnimations — ports all vanilla JS from main.js
   ============================================================ */

export function AgentNetworkClient() {
  const runtimeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const agentTasks: Record<string, string[]> = {
      reviewer: [
        'scanning src/auth.ts',
        'flagging null guard @ L42',
        'reviewed 3 files',
        'checking middleware/cors.ts',
        'no smells found',
      ],
      tester: [
        'running auth/*.test.ts',
        '12 passed · 0 failed',
        'spawning playwright',
        'e2e: signup flow ✓',
        'coverage: 94.2%',
      ],
      writer: [
        'editing src/auth.ts',
        '+ added null guard',
        'writing migration',
        'updating types.ts',
        'commit: fix null guard',
      ],
      deployer: [
        'building image',
        'pushing to registry',
        'rolling out v0.4.3',
        '78% → prod',
        'shipped → prod ✓',
      ],
    };

    const formatTime = (s: number) => {
      const m = Math.floor(s / 60);
      const sec = String(s % 60).padStart(2, '0');
      return `${m}:${sec}`;
    };

    let agentStep = 0;
    const agentTimestamps: Record<string, number> = { reviewer: 12, tester: 4, writer: 31, deployer: 2 };
    let runtimeSec = 24;

    function rotateAgents() {
      agentStep++;
      Object.keys(agentTasks).forEach((id, idx) => {
        const el = document.querySelector<HTMLElement>(`.agent-card[data-agent="${id}"] .agent-task`);
        if (!el) return;
        const i = (agentStep + idx) % agentTasks[id].length;
        el.style.transition = 'opacity .3s';
        el.style.opacity = '0';
        setTimeout(() => {
          if (el) { el.textContent = agentTasks[id][i]; el.style.opacity = '1'; }
        }, 200);
      });
    }

    function tickAgentTimestamps() {
      Object.keys(agentTimestamps).forEach(id => {
        agentTimestamps[id]++;
        const el = document.querySelector<HTMLElement>(`.agent-card[data-agent="${id}"] .ts`);
        if (el) el.textContent = formatTime(agentTimestamps[id]);
      });
    }

    function tickRuntime() {
      runtimeSec++;
      document.querySelectorAll<HTMLElement>('[data-runtime]').forEach(el => {
        el.textContent = formatTime(runtimeSec);
      });
    }

    const intervals = [
      setInterval(rotateAgents, 2200),
      setInterval(tickAgentTimestamps, 1000),
      setInterval(tickRuntime, 1000),
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  return null;
}

export function ArchStatsClient() {
  useEffect(() => {
    const archState = { tokens: 218, cost: 0.04, queue: 3 };

    function tickArchStats() {
      const t = document.querySelector<HTMLElement>('[data-tick="tokens"]');
      if (t) {
        const delta = Math.round((Math.random() - 0.5) * 20);
        archState.tokens = Math.max(180, Math.min(260, archState.tokens + delta));
        t.textContent = String(archState.tokens);
      }
      const q = document.querySelector<HTMLElement>('[data-tick="queue"]');
      if (q && Math.random() < 0.45) {
        const step = Math.random() < 0.5 ? -1 : 1;
        archState.queue = Math.max(1, Math.min(5, archState.queue + step));
        q.textContent = String(archState.queue);
      }
      const c = document.querySelector<HTMLElement>('[data-tick="cost"]');
      if (c && Math.random() < 0.18) {
        archState.cost = Math.round((archState.cost + 0.01) * 100) / 100;
        c.textContent = '$' + archState.cost.toFixed(2);
      }
    }

    const id = setInterval(tickArchStats, 800);
    return () => clearInterval(id);
  }, []);
  return null;
}

export function TerminalClient() {
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const termScript: Array<{ t: string; text?: string; cmd?: string; d?: number; cls?: string; end?: boolean }> = [
      { t: 'prompt', text: '$ ', cmd: 'curl -fsSL forge.sbknext.com/install | sh', d: 50 },
      { t: 'pause', d: 400 },
      { t: 'line', cls: 'dim', text: '→ Detecting OS… ', d: 250 },
      { t: 'append', cls: 'info', text: 'macOS arm64 (darwin 24.x)', d: 200 },
      { t: 'line', cls: 'dim', text: '→ Resolving release… ', d: 300 },
      { t: 'append', cls: 'info', text: 'forge v0.4.3', d: 150 },
      { t: 'line', cls: 'dim', text: '→ Downloading binary  ', d: 80 },
      { t: 'progress', d: 1100 },
      { t: 'line', cls: 'dim', text: '→ Installing → /usr/local/bin/forge', d: 250 },
      { t: 'line', cls: 'ok', text: '✓ forge installed · 14.2 MB · 0.8s', d: 300 },
      { t: 'blank', d: 200 },
      { t: 'prompt', text: '$ ', cmd: 'forge init', d: 40 },
      { t: 'pause', d: 250 },
      { t: 'line', cls: 'dim', text: '→ Registering agents: reviewer, tester, writer, deployer', d: 280 },
      { t: 'line', cls: 'dim', text: '→ Writing .forge/config.yaml', d: 200 },
      { t: 'line', cls: 'ok', text: '✓ ready · 4 agents online · provider=anthropic', d: 250 },
      { t: 'blank', d: 150 },
      { t: 'prompt', text: '$ ', cmd: 'forge run "fix the null deref in auth.ts"', d: 35 },
      { t: 'pause', d: 600 },
      { t: 'line', cls: 'ember', text: '◆ writer · diff prepared (1 file)', d: 350 },
      { t: 'line', cls: 'ember', text: '◆ reviewer · approved · 0 issues', d: 400 },
      { t: 'line', cls: 'ember', text: '◆ tester · 14 passed · 0 failed', d: 350 },
      { t: 'line', cls: 'ok', text: '✓ deployer · shipped → prod · v0.4.3', d: 250 },
      { t: 'blank', d: 200 },
      { t: 'prompt', text: '$ ', cmd: '', d: 0, end: true },
    ];

    async function runTerminal() {
      const body = document.querySelector<HTMLElement>('#install-term');
      if (!body) return;

      const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

      while (mountedRef.current) {
        body.innerHTML = '';
        for (const step of termScript) {
          if (!mountedRef.current) return;
          await wait(step.d || 100);
          if (!mountedRef.current) return;

          if (step.t === 'pause') continue;
          if (step.t === 'blank') {
            const br = document.createElement('span');
            br.className = 'line';
            br.innerHTML = '&nbsp;';
            body.appendChild(br);
            continue;
          }
          if (step.t === 'prompt') {
            const line = document.createElement('span');
            line.className = 'line';
            const p = document.createElement('span');
            p.className = 'prompt';
            p.textContent = step.text || '';
            line.appendChild(p);
            const cmdSpan = document.createElement('span');
            cmdSpan.className = 'cmd';
            line.appendChild(cmdSpan);
            const cursor = document.createElement('span');
            cursor.className = 'terminal-cursor';
            line.appendChild(cursor);
            body.appendChild(line);
            const cmd = step.cmd || '';
            for (let i = 0; i < cmd.length; i++) {
              if (!mountedRef.current) return;
              cmdSpan.textContent += cmd[i];
              await wait(18 + Math.random() * 30);
            }
            cursor.remove();
            if (step.end) {
              const c2 = document.createElement('span');
              c2.className = 'terminal-cursor';
              line.appendChild(c2);
              await wait(1800);
            }
            continue;
          }
          if (step.t === 'line') {
            const line = document.createElement('span');
            line.className = 'line';
            const s = document.createElement('span');
            if (step.cls) s.className = step.cls;
            s.textContent = step.text || '';
            line.appendChild(s);
            body.appendChild(line);
            continue;
          }
          if (step.t === 'append') {
            const last = body.lastElementChild;
            if (last) {
              const s = document.createElement('span');
              if (step.cls) s.className = step.cls;
              s.textContent = step.text || '';
              last.appendChild(s);
            }
            continue;
          }
          if (step.t === 'progress') {
            const last = body.lastElementChild;
            if (last) {
              const p = document.createElement('span');
              p.className = 'progress-bar';
              last.appendChild(p);
              const total = 20;
              for (let i = 0; i <= total; i++) {
                if (!mountedRef.current) return;
                const filled = '█'.repeat(i);
                const empty = '░'.repeat(total - i);
                const pct = String(Math.round((i / total) * 100)).padStart(3, ' ');
                p.textContent = `${filled}${empty} ${pct}%`;
                await wait(40);
              }
            }
            continue;
          }
        }
      }
    }

    runTerminal();
    return () => { mountedRef.current = false; };
  }, []);
  return null;
}

export function GalleryClient() {
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

    async function loopReviewer() {
      const body = document.getElementById('gallery-reviewer-body');
      if (!body) return;
      while (mountedRef.current) {
        body.innerHTML = '';
        const head = document.createElement('div');
        head.style.color = 'var(--text-3)';
        head.style.marginBottom = '8px';
        head.textContent = 'src/auth.ts';
        body.appendChild(head);
        const lines = [
          { cls: '',      n: '40', t: 'export function getToken(user) {' },
          { cls: '',      n: '41', t: '  if (user?.email) {' },
          { cls: 'minus', n: '42', t: '    return token;' },
          { cls: 'plus',  n: '42', t: '    return token ?? null;' },
          { cls: '',      n: '43', t: '  }' },
          { cls: '',      n: '44', t: '  return null;' },
          { cls: '',      n: '45', t: '}' },
        ];
        for (const l of lines) {
          if (!mountedRef.current) return;
          const span = document.createElement('span');
          span.className = 'diff-line ' + (l.cls || '');
          const g = (l.cls === 'minus' ? '−' : l.cls === 'plus' ? '+' : ' ') + ' ';
          span.innerHTML = `<span class="gutter">${l.n}</span>${g}${l.t}`;
          body.appendChild(span);
          await wait(160);
        }
        await wait(400);
        if (!mountedRef.current) return;
        const comment = document.createElement('div');
        comment.className = 'diff-comment';
        comment.innerHTML = '<span class="badge">REVIEWER</span>Missing null guard on token lookup. Suggested ?? null. <span style="color:var(--text-3)">+1 issue resolved.</span>';
        body.appendChild(comment);
        await wait(3500);
      }
    }

    async function loopTester() {
      const body = document.getElementById('gallery-tester-body');
      if (!body) return;
      while (mountedRef.current) {
        body.innerHTML = '';
        const head = document.createElement('div');
        head.style.color = 'var(--text-3)';
        head.style.marginBottom = '8px';
        head.textContent = '$ pnpm test --filter auth';
        body.appendChild(head);
        const tests = [
          { name: 'auth/login.test.ts',      n: 4, t: '142ms' },
          { name: 'auth/signup.test.ts',     n: 3, t: '98ms'  },
          { name: 'auth/refresh.test.ts',    n: 2, t: '64ms'  },
          { name: 'auth/logout.test.ts',     n: 2, t: '41ms'  },
          { name: 'middleware/cors.test.ts', n: 3, t: '88ms'  },
        ];
        let total = 0;
        for (const t of tests) {
          if (!mountedRef.current) return;
          const row = document.createElement('div');
          row.className = 'test-row pass';
          row.innerHTML = `<span class="check">✓</span><span class="name">${t.name} <span style="color:var(--text-4)">(${t.n})</span></span><span class="time">${t.t}</span>`;
          body.appendChild(row);
          total += t.n;
          await wait(280);
        }
        await wait(300);
        if (!mountedRef.current) return;
        const sum = document.createElement('div');
        sum.className = 'test-summary';
        sum.innerHTML = `<span class="green">✓ ${total} passed</span> · 0 failed · <span style="color:var(--text-3)">433ms</span>`;
        body.appendChild(sum);
        await wait(3200);
      }
    }

    async function loopDeployer() {
      const body = document.getElementById('gallery-deployer-body');
      if (!body) return;
      while (mountedRef.current) {
        body.innerHTML = '';
        const head = document.createElement('div');
        head.style.color = 'var(--text-3)';
        head.style.marginBottom = '8px';
        head.textContent = '$ forge ship --target prod';
        body.appendChild(head);
        const steps = [
          'bundling app          12.3s',
          'running tests          4.1s',
          'building image         8.7s',
          'pushing → registry     2.4s',
        ];
        for (const s of steps) {
          if (!mountedRef.current) return;
          const row = document.createElement('div');
          row.className = 'deploy-step';
          row.innerHTML = `<span class="icn">⠋</span><span>${s}</span>`;
          body.appendChild(row);
          await wait(220);
          row.querySelector('.icn')!.textContent = '✓';
        }
        if (!mountedRef.current) return;
        const last = document.createElement('div');
        last.className = 'deploy-step running';
        last.innerHTML = `<span class="icn">⠋</span><span>rolling out → prod</span>`;
        body.appendChild(last);
        const prog = document.createElement('div');
        prog.className = 'deploy-progress';
        prog.innerHTML = `<span style="font-size:10.5px">deploy</span><span class="bar"><i></i></span><span style="font-variant-numeric:tabular-nums">0%</span>`;
        body.appendChild(prog);
        const bar = prog.querySelector<HTMLElement>('i')!;
        const lbl = prog.querySelector<HTMLElement>('span:last-child')!;
        for (let p = 0; p <= 100; p += 4) {
          if (!mountedRef.current) return;
          bar.style.width = p + '%';
          lbl.textContent = p + '%';
          await wait(40);
        }
        last.querySelector('.icn')!.textContent = '✓';
        last.classList.remove('running');
        const ship = document.createElement('div');
        ship.className = 'deploy-shipped';
        ship.innerHTML = '→ shipped <span style="color:var(--text-1)">v0.4.3</span> → <span style="color:var(--text-1)">prod</span> · 28.4s total';
        body.appendChild(ship);
        await wait(3200);
      }
    }

    loopReviewer();
    loopTester();
    loopDeployer();
    return () => { mountedRef.current = false; };
  }, []);
  return null;
}

export function ScrollRevealClient() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
