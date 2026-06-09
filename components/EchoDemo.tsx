'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ============================================================
   Echo AI — interactive hero demo
   100% client-side, no network calls, replies are hardcoded.
   ============================================================ */

const MODES = [
  { id: 'flash',  label: 'Flash',  icon: '⚡', speed: 18, desc: 'instant'  },
  { id: 'think',  label: 'Think',  icon: '🧠', speed: 28, desc: 'balanced' },
  { id: 'pro',    label: 'Pro',    icon: '💎', speed: 38, desc: 'thorough' },
  { id: 'deep',   label: 'Deep',   icon: '🔬', speed: 52, desc: 'in-depth' },
] as const;

type ModeId = typeof MODES[number]['id'];

interface Prompt {
  id: string;
  label: string;
  reply: string;
}

const PROMPTS: Prompt[] = [
  {
    id: 'explain',
    label: 'Explain a concept',
    reply:
      "Sure — give me the concept and your current level, and I'll explain it from first principles with a concrete example, then a one-line summary you can keep. Tell me where it stops making sense and I'll go deeper exactly there. Anything I'm unsure about I'll flag rather than guess.",
  },
  {
    id: 'plan',
    label: 'Plan my day',
    reply:
      "Drop your tasks and any fixed commitments and I'll sketch a realistic order — hardest-focus work in your peak window, quick wins batched, buffer between meetings. I'll keep it to what actually fits the hours you have, not an idealized list, and call out anything that won't realistically fit today.",
  },
  {
    id: 'summarize',
    label: 'Summarize this',
    reply:
      "Paste the text or a link and I'll give you the gist in 3-4 lines, then the key points as bullets, then anything that looked uncertain or one-sided in the source. I won't invent details that aren't there — if something's ambiguous I'll say so rather than smooth it over.",
  },
  {
    id: 'draft',
    label: 'Draft a message',
    reply:
      "Tell me the recipient, the goal, and the tone, and I'll draft something tight you can send as-is or tweak. I'll keep it honest and specific — no filler, no overclaiming — and give you a shorter and a warmer variant so you can pick.",
  },
];

export default function EchoDemo() {
  const [activeMode, setActiveMode] = useState<ModeId>('flash');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [phase, setPhase] = useState<'idle' | 'user' | 'typing' | 'thinking' | 'done'>('idle');
  const [typedReply, setTypedReply] = useState('');
  const reducedMotion = useRef(false);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Detect prefers-reduced-motion once
  useEffect(() => {
    reducedMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (animRef.current) clearTimeout(animRef.current);
    };
  }, []);

  // Scroll chat to bottom on new content
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [typedReply, phase]);

  const getSpeed = useCallback(() => {
    const m = MODES.find(m => m.id === activeMode);
    return m ? m.speed : 18;
  }, [activeMode]);

  const handlePrompt = useCallback((prompt: Prompt) => {
    if (phase === 'typing' || phase === 'thinking' || phase === 'user') return;
    if (animRef.current) clearTimeout(animRef.current);

    setSelectedPrompt(prompt);
    setTypedReply('');
    setPhase('user');

    // Show user bubble, then thinking, then stream reply
    animRef.current = setTimeout(() => {
      if (!mountedRef.current) return;
      setPhase('thinking');

      const thinkDelay = reducedMotion.current ? 0 : 700;
      animRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        setPhase('typing');

        if (reducedMotion.current) {
          setTypedReply(prompt.reply);
          setPhase('done');
          return;
        }

        const fullText = prompt.reply;
        let idx = 0;
        const charSpeed = getSpeed();

        function typeNext() {
          if (!mountedRef.current) return;
          if (idx < fullText.length) {
            idx++;
            setTypedReply(fullText.slice(0, idx));
            animRef.current = setTimeout(typeNext, charSpeed + Math.random() * 12);
          } else {
            setPhase('done');
          }
        }
        typeNext();
      }, thinkDelay);
    }, reducedMotion.current ? 0 : 300);
  }, [phase, getSpeed]);

  const handleReset = () => {
    if (animRef.current) clearTimeout(animRef.current);
    setPhase('idle');
    setSelectedPrompt(null);
    setTypedReply('');
  };

  const currentMode = MODES.find(m => m.id === activeMode)!;

  return (
    <div className="echo-demo" aria-label="Echo AI interactive demo">
      {/* Header */}
      <div className="echo-demo__header">
        <div className="echo-demo__title-row">
          <span className="echo-demo__logo" aria-hidden="true">E</span>
          <span className="echo-demo__title">Echo AI</span>
          <a
            href="https://echo.sbknext.com"
            target="_blank"
            rel="noreferrer"
            className="echo-demo__live-pill"
            aria-label="Open Echo AI at echo.sbknext.com"
          >
            <span className="echo-demo__live-dot" aria-hidden="true" />
            live demo
          </a>
        </div>
        <p className="echo-demo__tagline">Consumer AI assistant · multi-model</p>
      </div>

      {/* Mode pills */}
      <div className="echo-demo__modes" role="group" aria-label="Select Echo AI model mode">
        {MODES.map(mode => (
          <button
            key={mode.id}
            className={`echo-demo__mode-btn${activeMode === mode.id ? ' echo-demo__mode-btn--active' : ''}`}
            onClick={() => setActiveMode(mode.id)}
            aria-pressed={activeMode === mode.id}
            aria-label={`${mode.label} mode — ${mode.desc}`}
          >
            <span aria-hidden="true">{mode.icon}</span>
            {mode.label}
          </button>
        ))}
      </div>

      {/* Chat body */}
      <div className="echo-demo__chat" ref={chatBodyRef} aria-live="polite" aria-atomic="false">
        {phase === 'idle' && (
          <div className="echo-demo__idle-hint">
            <span className="echo-demo__idle-icon" aria-hidden="true">✦</span>
            <span>Tap a prompt below to see Echo respond</span>
          </div>
        )}

        {selectedPrompt && phase !== 'idle' && (
          <>
            {/* User bubble */}
            <div className="echo-demo__bubble echo-demo__bubble--user">
              <span>{selectedPrompt.label}</span>
            </div>

            {/* Echo response */}
            {(phase === 'thinking' || phase === 'typing' || phase === 'done') && (
              <div className="echo-demo__bubble echo-demo__bubble--echo">
                <div className="echo-demo__bubble-header">
                  <span className="echo-demo__echo-avatar" aria-hidden="true">E</span>
                  <span className="echo-demo__echo-name">Echo</span>
                  <span className="echo-demo__mode-badge" aria-label={`Mode: ${currentMode.label}`}>
                    <span aria-hidden="true">{currentMode.icon}</span> {currentMode.label}
                  </span>
                </div>

                {phase === 'thinking' && (
                  <div className="echo-demo__typing" aria-label="Echo is thinking">
                    <span />
                    <span />
                    <span />
                  </div>
                )}

                {(phase === 'typing' || phase === 'done') && (
                  <p className="echo-demo__reply-text">
                    {typedReply}
                    {phase === 'typing' && (
                      <span className="echo-demo__cursor" aria-hidden="true" />
                    )}
                  </p>
                )}
              </div>
            )}

            {/* Reset / try another */}
            {phase === 'done' && (
              <button className="echo-demo__reset-btn" onClick={handleReset} aria-label="Try another prompt">
                ← try another
              </button>
            )}
          </>
        )}
      </div>

      {/* Prompt chips */}
      {phase === 'idle' && (
        <div className="echo-demo__prompts" role="group" aria-label="Sample prompts">
          {PROMPTS.map(p => (
            <button
              key={p.id}
              className="echo-demo__prompt-chip"
              onClick={() => handlePrompt(p)}
              aria-label={`Ask Echo: ${p.label}`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="echo-demo__footer">
        <span>powered by Brain MCP · multi-provider routing</span>
        <span className="echo-demo__footer-sep" aria-hidden="true">·</span>
        <span>simulated demo — replies are pre-written</span>
      </div>
    </div>
  );
}
