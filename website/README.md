# AlexoCloudAI website

Public marketing site for **AlexoCloudAI** and its first product, **AgentFactory**. It is built with Vite, React, TypeScript, Tailwind CSS and Framer Motion, the same stack Lovable uses.

## Pages

| Route           | What it is                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`             | AlexoCloudAI home: company story, product family (AgentFactory + "coming soon" slot), values, CTA                                         |
| `/agentfactory` | Product page: live workflow demo, stats, story video, scroll story, features, use-case tabs, integrations marquee, install steps, pricing, FAQ |
| `/pricing`      | Plans + FAQ                                                                                                                                 |
| `/contact`      | Sales / demo / support form (opens the visitor's email client pre-filled, so no backend is needed)                                          |
| `/terms`, `/privacy` | Placeholders: replace with your real legal text                                                                                        |

Static files served from `public/`:

-   `/brand/*`: AlexoCloudAI and AgentFactory logos, plus the email assets the AgentFactory app links to (`/brand/agentfactory-logo-white.png`, `/brand/agentfactory-email-bg.svg`)
-   `/og-image/og-facebook.png`, `/og-image/og-twitter.png`: link-preview images used by the app and this site
-   `/video/agentfactory-story.{mp4,webm}` + poster: the 31-second brand story film

Once deployed on `alexocloudai.com`, these files satisfy the "static brand files" section of `BRANDING.md`.

## Edit content

Almost all copy lives in **`src/config/site.ts`**:

-   `company`: name, emails, social links
-   `links`: docs URL, sign-up / login URLs of the license portal, demo link
-   `products`: add the next AlexoCloudAI product here and it appears on the home page, footer and product grid
-   `plans`: **the prices are placeholders**, so set real pricing before launch
-   `faqs`

Colors and fonts are in `tailwind.config.ts` (`navy`, `charcoal`, `teal`, `violet`, `coral`, `cloud`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
```

## Deploy

### Lovable

1. Create a new project in Lovable and connect it to GitHub (Lovable → GitHub → Connect). Lovable creates a repository and keeps it in two-way sync.
2. Clone that repository, replace its contents with the contents of this folder (keep the repo's `.git`), commit and push.
3. Lovable picks up the code. Edit with prompts or code, then click **Publish**.
4. Add your domain under Project settings → Domains (`alexocloudai.com`).

### Netlify / Vercel / Cloudflare Pages (alternative)

-   **Netlify:** drag the prebuilt `dist/` folder onto app.netlify.com/drop, or connect the repo (`netlify.toml` and `public/_redirects` are included).
-   **Vercel:** import the repo; framework "Vite"; `vercel.json` handles SPA routing.
-   **Cloudflare Pages:** build command `npm run build`, output `dist`.

## Re-render the story video

`video-source/story.html` is the animated source of the film. To change it and re-export:

```bash
npm i -D playwright && npx playwright install chromium
mkdir frames && node video-source/render-frames.cjs "$PWD/video-source/story.html" "$PWD/frames" 31 30
ffmpeg -framerate 30 -i frames/f%05d.jpg -vf "scale=1920:1080,format=yuv420p" -c:v libx264 -crf 22 -movflags +faststart public/video/agentfactory-story.mp4
ffmpeg -framerate 30 -i frames/f%05d.jpg -vf "scale=1920:1080" -c:v libvpx-vp9 -b:v 0 -crf 34 public/video/agentfactory-story.webm
```

## Before launch

-   Set real prices in `src/config/site.ts`
-   Point `links.signup` / `links.login` at your license portal
-   Replace the Terms and Privacy placeholders with reviewed legal text
-   Make sure `sales@`, `support@` and `hello@alexocloudai.com` mailboxes exist
