/**
 * showcase-runs.ts — the canonical "recorded runs" array for the unlisted
 * /watch showcase, in the owner-requested shape:
 *
 *   { story, phases:[{ name, summary, agents?, detail }], verify:{ checks, verdict }, result:{ tests, commit } }
 *
 * across the five real Forge phases: thinking → stories → build → verify → commit.
 *
 * STATUS: CANDIDATE · RECORDED (not live). Forge's 4.0.1 live mode is deferred.
 * "Recorded run" = a curated, synthetic-but-true reconstruction of REAL
 * Forge-ecosystem build history — story titles, agent counts, phase structure,
 * test counts, file/line counts, and commit hashes are all drawn from the actual
 * brain-repo git log + _bmad/forge-product stories. It is NOT a raw session
 * transcript: claude-fuse session logs (SEC-05: live creds + client work) are
 * never read. Authored clean, Forge-ecosystem ONLY.
 *
 * REDACTION: every string field is run through redactForShowcase() as a HARD
 * BACKSTOP (secret mask() first → host/company/client deny-list → Forge allow-list
 * preserved). The data is authored with nothing client/company in it; the backstop
 * is defence-in-depth, not the primary defence. Use getShowcaseRuns() to read —
 * never the RAW_RUNS const directly.
 *
 * SOURCE OF TRUTH for redaction: ./redact.ts (which vendors ./mask.ts, kept in
 * sync with /Users/sam/Documents/saas/forge-harness/src/mask.js).
 */

import { redactForShowcase } from './redact';

export type PhaseName = 'thinking' | 'stories' | 'build' | 'verify' | 'commit';

export interface RunAgent {
  /** short handle, e.g. "recon" / "build-a" / "verify" */
  name: string;
  /** model + lane, e.g. "sonnet · explore" */
  role: string;
}

export interface RunPhase {
  name: PhaseName;
  /** one-line plain summary of what happened in this phase */
  summary: string;
  /** sub-agents active in this phase (build/verify); omitted for solo phases */
  agents?: RunAgent[];
  /** the longer, specific detail line(s) for this phase */
  detail: string;
}

export interface RunVerify {
  /** the concrete checks the adversarial / edge-case pass asserted */
  checks: string[];
  /** the human-readable verdict line */
  verdict: string;
}

export interface RunResult {
  /** test summary, e.g. "148 passing (detector 36 · collector 97 · brain-api 15)" */
  tests: string;
  /** commit line: short hash + subject (real, local-only, not pushed) */
  commit: string;
}

export interface ShowcaseRun {
  /** stable id, used as React key + run anchor */
  id: string;
  /** story headline, e.g. "1.0.3 — Auto-capture decisions & mistakes → Brain" */
  story: string;
  /** which Forge epic this story belongs to */
  epic: string;
  /** CANDIDATE | RECORDED honesty marker, surfaced in the UI */
  status: 'candidate' | 'recorded';
  phases: RunPhase[];
  verify: RunVerify;
  result: RunResult;
}

/**
 * RAW_RUNS — authored clean from real Forge-ecosystem history. Forge building
 * Forge: Epic 1.0 (Memory) + Epic 4.0 (Autonomous SDLC). Read via
 * getShowcaseRuns() so every string passes the redactForShowcase backstop.
 */
const RAW_RUNS: ShowcaseRun[] = [
  {
    id: 'run-1.0.3',
    story: '1.0.3 — Auto-capture decisions & mistakes → Brain',
    epic: 'Epic 1.0 — Memory',
    status: 'recorded',
    phases: [
      {
        name: 'thinking',
        summary:
          'Planner reads the constitution + mistake ledger, then decides on an LLM-free heuristic detector.',
        detail:
          'PLANNER (claude.ai browser) reads CONSTITUTION + MISTAKES_LEDGER + Brain memory first. ' +
          'Decision recorded to Brain: capture decisions/mistakes with a deterministic regex/heuristic ' +
          'detector — no per-session API cost, confidence always "candidate" so it never over-claims.',
      },
      {
        name: 'stories',
        summary:
          'Planner authors the queued story + acceptance criteria; executor never drafts its own.',
        detail:
          'Acceptance criteria queued as _bmad/forge-product story: additive-only writes (never delete/overwrite), ' +
          'per-user isolation (the caller\'s token decides the account), Brain-unreachable → log + continue (never ' +
          'crash the hook), and secrets masked first4****last4 before any summary leaves the collector.',
      },
      {
        name: 'build',
        summary:
          'Executor runs four sonnet sub-agents: recon → detector → exporter → adversarial verify.',
        agents: [
          { name: 'recon', role: 'sonnet · explore' },
          { name: 'build-a', role: 'sonnet · detector' },
          { name: 'build-b', role: 'sonnet · exporter' },
          { name: 'verify', role: 'sonnet · adversarial' },
        ],
        detail:
          'recon reads the existing violation-detector + api-client before any new module. build-a writes ' +
          'claude-fuse/collector decision-mistake-detector.js (regex/heuristic catalogue, +357). build-b writes ' +
          'brain-exporter.js (cursor-tracked, error-resilient, +327) + the brain-api POST /api/memories route ' +
          '(Bearer→user_id scoped, additive INSERT, body user_id ignored, +42). 9 files changed, +1744 lines.',
      },
      {
        name: 'verify',
        summary: 'Adversarial + edge-case passes; one blocker found and fixed before done.',
        agents: [{ name: 'verify', role: 'sonnet · edge-case-hunter' }],
        detail:
          'BLOCKER: a summary could carry an unmasked secret before POST — fixed by masking first4****last4 at the ' +
          'collector boundary and never POSTing raw evidence (evidence stays local, SEC-05). NOTE: collector/package.json ' +
          'left uncommitted (unrelated prior WIP) — deliberately scoped out of this story.',
      },
      {
        name: 'commit',
        summary: 'Owner reviews and commits locally. Not pushed — consent-gated.',
        detail:
          'One commit for the story, co-authored, local only. No deploy, no push — pushing requires a fresh, ' +
          'explicit owner yes (consent-gated).',
      },
    ],
    verify: {
      checks: [
        'Secrets masked first4****last4 before any summary leaves the collector; raw evidence never POSTed.',
        'Additive-only: a write with no key never upserts; never deletes or overwrites existing memories.',
        'Per-user isolation: Bearer → user_id; a POST body user_id is ignored.',
        'Brain unreachable → log + continue; the hook never crashes.',
        'BRAIN_AUTO_CAPTURE=false opt-out honoured; the collector never reads data/ (SEC-05).',
      ],
      verdict: 'adversarial-verify + edge-case-hunter — masking blocker fixed, all green.',
    },
    result: {
      tests: '148 passing (detector 36 incl. secret-masking · collector vitest 97 · brain-api 15)',
      commit: '21eb4b5 feat(1.0.3): auto-capture decisions & mistakes → Brain (claude-fuse + brain-api)',
    },
  },
  {
    id: 'run-1.0.4',
    story: '1.0.4 — Promote-to-Brain: session-start memory recall',
    epic: 'Epic 1.0 — Memory',
    status: 'recorded',
    phases: [
      {
        name: 'thinking',
        summary:
          'Planner decides the assistant should recall recent decisions/mistakes at session start, not start cold.',
        detail:
          'PLANNER frames the recall side of 1.0.3: a memory_context tool that returns recent per-user memories ' +
          'so context carries across sessions. Cross-checked against isolation rules — recall must be user_id-scoped.',
      },
      {
        name: 'stories',
        summary: 'Planner queues the MCP tool + mirrored REST route + CLI surface as one story.',
        detail:
          'Acceptance: memory_context MCP tool returns recent per-user memories at session start; ' +
          'REST /api/memories-context mirrors it (Bearer → user_id scoped); a claude-fuse-brain-context CLI ' +
          'surfaces recall to the hook.',
      },
      {
        name: 'build',
        summary: 'Three sonnet sub-agents: recon → tool+route → adversarial verify.',
        agents: [
          { name: 'recon', role: 'sonnet · explore' },
          { name: 'build', role: 'sonnet · tool+route' },
          { name: 'verify', role: 'sonnet · adversarial' },
        ],
        detail:
          'recon confirms the memory_store schema + REST mapping. build writes the brain-mcp memory_context tool ' +
          '(+205), the brain-api memories-context route (+195), and the claude-fuse-brain-context CLI (+104). ' +
          '8 files changed, +771 lines.',
      },
      {
        name: 'verify',
        summary: 'Adversarial pass asserts isolation + recall ordering.',
        agents: [{ name: 'verify', role: 'sonnet · adversarial' }],
        detail:
          'NOTE: recall must be user_id-scoped — the suite asserts a cross-user term is excluded from results, ' +
          'and that recall ordering is most-recent-first.',
      },
      {
        name: 'commit',
        summary: 'Owner reviews and commits locally. Not pushed — consent-gated.',
        detail: 'One story, one commit, co-authored, local only. No push without a fresh owner yes.',
      },
    ],
    verify: {
      checks: [
        'memory_context returns recent per-user memories at session start.',
        'REST /api/memories-context mirrors the MCP tool, Bearer → user_id scoped.',
        'Per-user isolation enforced by user_id WHERE clauses; a B-only term never surfaces for A.',
        'Recall ordering is most-recent-first.',
      ],
      verdict: 'adversarial-verify — isolation + ordering assertions green.',
    },
    result: {
      tests: '75 passing (memory-context 18 · brain-mcp regression 57)',
      commit: 'c3ee815 feat(brain-mcp): story 1.0.4 — memory_context session-start recall',
    },
  },
  {
    id: 'run-4.0.5',
    story: '4.0.5 — Auto-SDLC safety rails: cross-user isolation backstop',
    epic: 'Epic 4.0 — Autonomous SDLC',
    status: 'candidate',
    phases: [
      {
        name: 'thinking',
        summary:
          'Planner decides the approval gates this run ran under should become tested harness features, not tribal knowledge.',
        detail:
          'The gates — per-user isolation, dry-run-first, archive-not-delete, no-push-without-consent — are codified. ' +
          'This story adds a server-side isolation backstop so a scoping bug fails closed instead of leaking across users.',
      },
      {
        name: 'stories',
        summary: 'Planner queues the isolation backstop as a tests-first story.',
        detail:
          'Acceptance: cross-user read returns 404 (non-enumeration, not 403); cross-user delete denied + the row ' +
          'survives; an A-scoped search excludes a B-only term; a POST body user_id is ignored (the token wins); ' +
          'storeMemory throws on a missing userId (fail closed).',
      },
      {
        name: 'build',
        summary: 'Three sonnet sub-agents: audit → tests → verify-no-behaviour-change.',
        agents: [
          { name: 'recon', role: 'sonnet · audit' },
          { name: 'build', role: 'sonnet · tests' },
          { name: 'verify', role: 'sonnet · adversarial' },
        ],
        detail:
          'recon audits every IP-keyed + user-keyed path for scoping correctness. build writes ' +
          'brain-api/tests/memories-isolation.test.js (8 isolation assertions, +209) + marks the Epic 2.0 ' +
          'build-readiness D1 item resolved. 2 files changed, +211 lines. A pure backstop — no behaviour change.',
      },
      {
        name: 'verify',
        summary: 'Adversarial pass confirms this is a backstop only — no behaviour change.',
        agents: [{ name: 'verify', role: 'sonnet · adversarial' }],
        detail:
          'NOTE: build-readiness D1 (last-write-wins + conflict log) marked RESOLVED with owner sign-off recorded ' +
          'to Brain. Verify confirms existing endpoints behave identically — the tests only lock in the guarantees.',
      },
      {
        name: 'commit',
        summary: 'Owner reviews and commits locally. Not pushed — consent-gated.',
        detail: 'One story, one commit, co-authored, local only. Push stays consent-gated.',
      },
    ],
    verify: {
      checks: [
        'Cross-user read returns 404 (non-enumeration), not 403.',
        'Cross-user delete is denied and the target row survives.',
        'An A-scoped search excludes a B-only term.',
        'A POST body user_id is ignored — the token wins.',
        'storeMemory throws on a missing userId (fail closed).',
      ],
      verdict: 'adversarial-verify — 8 isolation assertions green, no behaviour change.',
    },
    result: {
      tests: '8 passing (cross-user isolation)',
      commit: '6c01a46 test(4.0.5): brain-api cross-user isolation backstop + mark D1 resolved (LWW)',
    },
  },
];

/**
 * The five Forge phases, in order — the rail rendered above the runs.
 */
export const SHOWCASE_PHASES: { key: PhaseName; label: string; blurb: string }[] = [
  { key: 'thinking', label: 'Thinking', blurb: 'Planner reads the constitution + mistake ledger, cross-checks, decides.' },
  { key: 'stories', label: 'Stories', blurb: 'Planner authors the queue — _bmad stories, one commit each.' },
  { key: 'build', label: 'Build', blurb: 'Executor runs multiple sonnet sub-agents: recon → build → verify.' },
  { key: 'verify', label: 'Verify', blurb: 'Adversarial + edge-case passes. Tests green before done.' },
  { key: 'commit', label: 'Commit', blurb: 'Owner reviews, then commits. Not pushed — consent-gated.' },
];

/** Honesty line surfaced in the UI — recorded, candidate, human-gated. */
export const SHOWCASE_HONESTY =
  'Recorded, candidate showcase — not a live stream. "Autonomous" means planner-authored, ' +
  'executor-built, and human-gated: the owner approves every gate. Live mode is deferred. ' +
  'Story titles, agent counts, test counts, file/line counts, and commit hashes are authored ' +
  'from real Forge-ecosystem build history — never a raw session transcript.';

/**
 * getShowcaseRuns — the only public read path. Deep-walks every run and runs each
 * string field through redactForShowcase (secret mask → host/company/client
 * deny-list → Forge allow-list preserved) as a hard backstop. Returns a new
 * value; RAW_RUNS is never mutated.
 */
export function getShowcaseRuns(): ShowcaseRun[] {
  return redactForShowcase(RAW_RUNS);
}

export default getShowcaseRuns;
