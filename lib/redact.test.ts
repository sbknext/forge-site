/**
 * Unit test for the /watch showcase redaction layer.
 *
 * Run:  npm test   (uses: node --test via tsx — no build step, no extra deps)
 *
 * Asserts the three required behaviours of redactForShowcase:
 *   1. DENY-LIST  — ElasticRun / prod-IP / client-name → redacted to placeholders.
 *   2. ALLOW-LIST — mcp.sbknext.com / forge / echo / Brain → preserved verbatim.
 *   3. SECRETS    — a real-shaped secret → masked (first4****last4 / [REDACTED]).
 * Plus: deep-walk over nested objects/arrays.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { redactForShowcase } from './redact.ts';

test('deny-list: company name, prod IP, client names are redacted', () => {
  const out = redactForShowcase(
    'Deployed to ElasticRun prod at 209.97.162.125; synced Zoho + IKEA + Unicommerce.'
  ) as string;
  assert.ok(!/ElasticRun/i.test(out), 'ElasticRun must be gone');
  assert.ok(!out.includes('209.97.162.125'), 'prod IP must be gone');
  assert.ok(!/\bZoho\b/.test(out), 'Zoho must be gone');
  assert.ok(!/\bIKEA\b/.test(out), 'IKEA must be gone');
  assert.ok(!/\bUnicommerce\b/.test(out), 'Unicommerce must be gone');
  assert.ok(out.includes('<company>'), 'company placeholder present');
  assert.ok(out.includes('<prod-host>'), 'prod-host placeholder present');
  assert.ok(out.includes('<client>'), 'client placeholder present');
});

test('deny-list: internal hosts and tenant prefixes are redacted', () => {
  const out = redactForShowcase(
    'sites: beta-logi-withrun, doha-synapse, deliverit-wms.elastic.run, bridge.elastic'
  ) as string;
  assert.ok(!/beta-logi/i.test(out));
  assert.ok(!/doha-/i.test(out));
  assert.ok(!/elastic\.run/i.test(out));
  assert.ok(out.includes('<internal-site>') || out.includes('<internal-host>'));
});

test('allow-list: Forge ecosystem terms are preserved verbatim', () => {
  const input =
    'Install from mcp.sbknext.com — forge orchestrates echo-ai, Brain, corebrain, ' +
    'claude-fuse, forge-sutra, forge-secure, forge-harness. Also forge.sbknext.com / echo.';
  const out = redactForShowcase(input) as string;
  for (const term of [
    'mcp.sbknext.com',
    'forge.sbknext.com',
    'echo-ai',
    'Brain',
    'corebrain',
    'claude-fuse',
    'forge-sutra',
    'forge-secure',
    'forge-harness',
  ]) {
    assert.ok(out.includes(term), `allow-list term must survive: ${term}`);
  }
  // bare product tokens survive too
  assert.ok(/\bforge\b/.test(out), 'bare "forge" survives');
  assert.ok(/\becho\b/.test(out), 'bare "echo" survives');
  // and no sentinel leaked into output
  assert.ok(!/\bAL\d+LA\b/.test(out), 'no allow-list sentinel leaked');
});

test('allow-list survives even adjacent to deny terms', () => {
  const out = redactForShowcase(
    'forge ran on ElasticRun infra at 209.97.162.125 alongside mcp.sbknext.com'
  ) as string;
  assert.ok(/\bforge\b/.test(out), 'forge preserved');
  assert.ok(out.includes('mcp.sbknext.com'), 'host preserved');
  assert.ok(!/ElasticRun/i.test(out), 'company redacted');
  assert.ok(!out.includes('209.97.162.125'), 'IP redacted');
});

test('secrets: an Anthropic-shaped key is masked, not shown', () => {
  const secret = 'sk-ant-' + 'A1b2C3d4E5f6G7h8I9j0K1l2';
  const out = redactForShowcase(`token=${secret}`) as string;
  assert.ok(!out.includes(secret), 'raw secret must not appear');
  assert.ok(/\*\*\*\*/.test(out) || out.includes('[REDACTED]'), 'masked or redacted');
});

test('secrets: a JWT has its payload masked', () => {
  const jwt =
    'eyJhbGciOiJIUzI1Ni19' + '.eyJzdWIiOiIxMjM0NTY3ODkwIn0' + '.SflKxwRJSMeKKF2QT4fwpM';
  // Bearer pre-pass masks the whole token first4****last4; a bare JWT gets the
  // header redacted + payload masked. Either way the raw token must be gone.
  const bearerOut = redactForShowcase(`Authorization: Bearer ${jwt}`) as string;
  assert.ok(!bearerOut.includes(jwt), 'full JWT must not appear (Bearer)');
  assert.ok(/\*\*\*\*/.test(bearerOut), 'token masked');

  const bareOut = redactForShowcase(`jwt is ${jwt}`) as string;
  assert.ok(!bareOut.includes(jwt), 'full JWT must not appear (bare)');
  assert.ok(/\*\*\*\*/.test(bareOut) || bareOut.includes('[REDACTED]'), 'masked or redacted');
});

test('deep-walk: nested object + array strings are all sanitized', () => {
  const run = {
    runId: 'forge-run-1',
    meta: { host: 'deployed at 209.97.162.125 on ElasticRun', product: 'forge' },
    stories: [
      { title: 'ship echo-ai', note: 'integrate Zoho for client' },
      { title: 'mcp.sbknext.com gateway', secret: 'sk-ant-AAAA1111BBBB2222CCCC3333' },
    ],
    count: 3,
    live: false,
  };
  const out = redactForShowcase(run) as typeof run;

  // scalars untouched
  assert.equal(out.count, 3);
  assert.equal(out.live, false);
  // deny applied at depth
  assert.ok(!out.meta.host.includes('209.97.162.125'));
  assert.ok(!/ElasticRun/i.test(out.meta.host));
  assert.ok(!/\bZoho\b/.test(out.stories[0].note));
  // allow preserved at depth
  assert.equal(out.meta.product, 'forge');
  assert.ok(out.stories[0].title.includes('echo-ai'));
  assert.ok(out.stories[1].title.includes('mcp.sbknext.com'));
  // secret masked at depth
  assert.ok(!out.stories[1].secret.includes('sk-ant-AAAA1111BBBB2222CCCC3333'));
  // input not mutated
  assert.equal(run.meta.product, 'forge');
  assert.ok(run.meta.host.includes('209.97.162.125'));
});
