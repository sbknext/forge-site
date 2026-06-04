# Self-Hosting Forge

Forge is **free**. The hosted endpoint at `mcp.sbknext.com` has generous rate limits and
no paywall — the only limit is rate, never features. If you need private infrastructure,
scale beyond the hosted rate limits, or compliance / SSO, you can **self-host the open-core**.

This guide is honest about what exists today versus what is still scaffold. Anything not yet
verified end-to-end is marked **(candidate)**.

---

## What is open-core?

The Forge brain (the MCP memory + community server) is open-core under **Apache-2.0**.

- **`corebrain`** — the Rust rewrite of the brain server. License: **Apache-2.0**
  (`https://github.com/sbknext/corebrain`). Ships a single static `cb` binary — no Node.js,
  no npm, no runtime deps.
- Hosted-tier conveniences (multi-region replication, SSO, audit-log export) are **not** in
  the open-core repo — they live in a separate private repo and are not back-ported. The
  local build does not import those crates, so self-hosting gives you the full local feature
  set with your data on your own box.

> Status note: per the corebrain README, the Rust kernel is an early scaffold — storage, auth,
> and the MCP protocol layer land across its Story 2 / Story 3 milestones. For a
> **production-ready self-host today**, the Node.js `brain-api` server (license: MIT) is the
> currently-running implementation that powers `brain.sbknext.com`. corebrain is the
> forward path; brain-api is what runs now. **(candidate — confirm which server you want
> before deploying.)**

---

## Components

| Component | Repo / path | License | Role |
|---|---|---|---|
| `corebrain` (`cb` binary) | `github.com/sbknext/corebrain` | Apache-2.0 | Rust MCP server kernel — memory, communities, tenancy, auth, vector + full-text search |
| `corebrain-mcp` | crate inside `corebrain` | Apache-2.0 | MCP protocol layer |
| `corebrain-cli` (`cb`) | crate inside `corebrain` | Apache-2.0 | Local dev / admin / scripting binary |
| `corebrain-plugin-*` | crates inside `corebrain` | Apache-2.0 | Memory + community reference plugins, plugin API |
| `brain-api` | the Node.js server powering `brain.sbknext.com` today | MIT | REST API + MCP install/token endpoints + skill browser (current production server) |
| `forge-client` SDK | `github.com/sbknext/forge-client` (`pip install sbknext-forge`, `npm @sbkolate/forge`) | see repo | The SDK your code calls; talks to either a self-hosted server or the hosted endpoint |

Storage:
- **corebrain / local** — SQLite on your machine, local embeddings. No network calls. (Per
  corebrain README.)
- **Hosted tier** — Postgres + pgvector. **(candidate — that backend is on the roadmap; verify
  current state before relying on it for self-host.)**

---

## Rough steps

These are the real, documented entry points. Exact flags will depend on the milestone you
build, so treat command details as **(candidate)** and check `--help` output / the repo README
for the version you clone.

### Option A — corebrain (`cb`), Apache-2.0

```sh
git clone https://github.com/sbknext/corebrain
cd corebrain
cargo build --release
./target/release/cb --help        # discover the current subcommands for your checkout
```

- Point your MCP client (Claude Code / Cursor / VS Code / Windsurf) at your local server
  instead of `mcp.sbknext.com`. The client config shape is identical to the hosted one shown
  at `mcp.sbknext.com` — same protocol, same SDK. **(candidate — local serve subcommand /
  port not yet verified end-to-end in this guide.)**

### Option B — brain-api (Node.js, MIT) — current production server

```sh
# from the brain repo
cd brain-api
cp .env.example .env              # then fill in keys (ANTHROPIC_API_KEY, JWT_SECRET, etc.)
npm install
npm start                         # node index.js — defaults to PORT=3457
```

- `.env.example` documents the available config (port, optional AIMDS scanning, guest-mode
  rate-limit caps, API keys). Set only what you need; scanning and guest mode default OFF.
- Front it with your own reverse proxy (e.g. nginx) and point your MCP clients at your host
  instead of the hosted endpoint.

**Do not commit real secrets.** Keep API keys, `JWT_SECRET`, and any tokens out of version
control and out of chat. Mask anything you must show as `first4****last4`.

---

## Privacy / data handling

- Self-hosting means your memories, communities, and skill data stay on infrastructure you
  control. The local/Apache-2.0 build of corebrain makes no network calls for storage.
- The hosted tier isolates data per user (no cross-user access). If you self-host, you own the
  isolation guarantees for your own deployment.
- We are **not charging** for Forge, so there is no billing/tax surface to reason about — the
  only data-handling concerns are privacy and where your data lives, which self-hosting puts
  fully in your hands.

---

## Enterprise setup

If you want help — onboarding, a private deployment, scale tuning, or compliance / SSO — reach
out: **erp@sbknext.com**.

Engagement is a **one-time setup**, not a recurring subscription. Forge itself stays free; the
open-core stays Apache-2.0 and yours to run.
