# forge-site

Marketing site for **Forge** — an open-source AI sub-agent framework.

Live at: https://forge.sbknext.com (pending DNS).

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3

## Dev

```bash
npm i
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

```bash
vercel deploy
```

Then point `forge.sbknext.com` CNAME at Vercel.

No env vars required for the static landing.

## Sister repos

- [`sbknext/forge-client`](https://github.com/sbknext/forge-client) — Python / Node / Rust SDK

## License

MIT — see `LICENSE`.
