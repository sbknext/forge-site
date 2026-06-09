/**
 * Secret mask — TypeScript port of the CANONICAL Forge harness mask().
 *
 * SOURCE OF TRUTH: forge-harness src/mask.js
 * This is a kept-in-sync port, not a fork. The harness file ships as ESM `.js`
 * outside this Next.js project's rootDir; a static-export build cannot reliably
 * transpile a cross-repo import, so the canonical logic is vendored here with
 * identical patterns + ordering. If the canonical mask() changes, update this file.
 *
 * CANDIDATE / best-effort redaction. REDUCES leak risk; does NOT guarantee
 * zero leaks. FAIL-CLOSED, DoS-SAFE (bounded patterns), IDEMPOTENT, SELF-MASKING.
 */

const REDACTED = '[REDACTED]';

export function maskFragment(tok: string): string {
  if (typeof tok !== 'string') return REDACTED;
  if (tok.length >= 12) return `${tok.slice(0, 4)}****${tok.slice(-4)}`;
  return REDACTED;
}

function maskJwt(match: string): string {
  const parts = match.split('.');
  if (parts.length !== 3) return REDACTED;
  return `${parts[0]}.****.${parts[2].slice(0, 4)}`;
}

type Pattern = { name: string; re: RegExp; fn: (m: string) => string };

/** Shannon entropy gate for the generic floor (avoids masking plain words). */
export function isHighEntropy(s: unknown, threshold = 3.5): boolean {
  if (typeof s !== 'string' || s.length === 0) return false;
  const freq: Record<string, number> = Object.create(null);
  for (const ch of s) freq[ch] = (freq[ch] || 0) + 1;
  let entropy = 0;
  const len = s.length;
  for (const ch in freq) {
    const p = freq[ch] / len;
    entropy -= p * Math.log2(p);
  }
  return entropy >= threshold;
}

// Ordering is load-bearing: specific prefixes BEFORE the generic high-entropy floor.
const _SECRET_PATTERNS: Pattern[] = [
  // Bearer <token>
  { name: 'bearer', re: /\b(Bearer\s+)([A-Za-z0-9._\-=]{8,512})/gi, fn: (m: string, ...g: string[]) => `${g[0]}${maskFragment(g[1])}` },
  // OpenRouter (v1) — before generic sk-
  { name: 'openrouter', re: /sk-or-v1-[A-Za-z0-9_-]{16,256}/g, fn: maskFragment },
  // Anthropic
  { name: 'anthropic', re: /sk-ant-[A-Za-z0-9_-]{16,256}/g, fn: maskFragment },
  { name: 'short-skant', re: /sk-ant-[A-Za-z0-9_-]{1,15}\b/g, fn: () => REDACTED },
  { name: 'short-skor', re: /sk-or-[A-Za-z0-9_-]{1,15}\b/g, fn: () => REDACTED },
  // OpenAI
  { name: 'openai', re: /sk-[A-Za-z0-9]{20,256}/g, fn: maskFragment },
  // Google
  { name: 'google', re: /AIzaSy[A-Za-z0-9_-]{20,128}/g, fn: maskFragment },
  // Groq
  { name: 'groq', re: /gsk_[A-Za-z0-9]{20,256}/g, fn: maskFragment },
  // xAI
  { name: 'xai', re: /xai-[A-Za-z0-9]{20,256}/g, fn: maskFragment },
  // GitHub (ghp/gho/ghs/ghr/ghu)
  { name: 'github', re: /gh[posru]_[A-Za-z0-9]{20,256}/g, fn: maskFragment },
  // AWS access key id
  { name: 'aws', re: /AKIA[A-Z0-9]{12,32}/g, fn: maskFragment },
  // 3-part JWT (header.payload.sig)
  { name: 'jwt3', re: /eyJ[A-Za-z0-9_-]{8,2048}\.[A-Za-z0-9_-]{6,4096}\.[A-Za-z0-9_-]{4,2048}/g, fn: maskJwt },
  // bare eyJ that did not form a full JWT — fail closed
  { name: 'jwt-bare', re: /eyJ[A-Za-z0-9_-]{10,2048}/g, fn: () => REDACTED },
  // key/secret/token/password/api-adjacent value
  { name: 'key-adjacent', re: /(key|secret|token|password|api|bearer|auth)(\W{0,3})([A-Za-z0-9_-]{20,512})/gi, fn: (m: string, ...g: string[]) => `${g[0]}${g[1]}${REDACTED}` },
  // long base64 run that is high-entropy
  { name: 'base64-secret', re: /(?<![A-Za-z0-9+/])[A-Za-z0-9+/]{40,512}={0,2}(?![A-Za-z0-9+/=])/g, fn: (m: string) => (isHighEntropy(m) ? REDACTED : m) },
  // generic high-entropy floor: 32+ token-shaped run — fail closed if high entropy
  { name: 'generic32', re: /\b[A-Za-z0-9_-]{32,512}\b/g, fn: (m: string) => (isHighEntropy(m) ? REDACTED : m) },
];

/** Immutable exported view of the secret patterns array. */
export const SECRET_PATTERNS: readonly Pattern[] = Object.freeze(_SECRET_PATTERNS);

/** mask — single canonical entry point for SECRET masking. */
export function mask(text: unknown): unknown {
  if (typeof text !== 'string' || text.length === 0) return text;
  let out = text;
  for (const { re, fn } of _SECRET_PATTERNS) {
    re.lastIndex = 0;
    out = out.replace(re, fn);
  }
  return out;
}

export default mask;
