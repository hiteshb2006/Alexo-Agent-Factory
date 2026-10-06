# AgentFactory brand and hosting guide

AgentFactory by AlexoCloudAI: **Build, orchestrate, and scale AI agents.**

## Identity

| Item           | Value                                         |
| -------------- | --------------------------------------------- |
| Product        | AgentFactory                                  |
| Parent brand   | AlexoCloudAI ("AgentFactory by AlexoCloudAI") |
| Tagline        | Build, orchestrate, and scale AI agents       |
| Story          | Ideas → Agents → Automation → Real impact     |
| Marketing line | Turn ideas into AI agents that work.          |
| Typeface       | Inter (H1 700 · H2/H3 600 · body 400/500)     |
| Website        | https://alexocloudai.com                      |
| Docs           | https://docs.alexocloudai.com                 |
| Social         | @AlexoCloudAI                                 |

### Color palette

| Name          | Hex       | Meaning                  | Used for in the app                                     |
| ------------- | --------- | ------------------------ | ------------------------------------------------------- |
| Midnight Navy | `#0B1220` | Trust, stability         | Dark theme background, headings, app icon background    |
| Charcoal      | `#1F2937` | Balance, clarity         | Dark theme surfaces, illustrations                      |
| Electric Teal | `#14D8C4` | Innovation, AI           | Secondary palette, accents, success-adjacent highlights |
| Vivid Violet  | `#7C3AED` | Intelligence, creativity | Primary palette, buttons, selected menu items, links    |
| Coral Accent  | `#FF6B6B` | Energy, progress         | Errors and alerts                                       |
| Cloud         | `#F5F7FB` | Clean, simplicity        | Light backgrounds, neutral greys                        |

The source of truth for the UI is `packages/ui/src/assets/scss/_themes-vars.module.scss`. The embeddable SDKs use `packages/agentflow/src/core/theme/tokens.ts` and `packages/observe/src/core/theme/tokens.ts`.

### Logo files

| File                                                                 | Use                                  |
| -------------------------------------------------------------------- | ------------------------------------ |
| `images/agentfactory_white.svg`                                      | Primary logo on light backgrounds    |
| `images/agentfactory_dark.svg`                                       | Primary logo on dark backgrounds     |
| `images/agentfactory_by_alexocloudai_{white,dark}.svg`               | Secondary logo with the parent brand |
| `images/agentfactory_tagline_{white,dark}.svg`                       | Logo with tagline                    |
| `images/agentfactory_icon.svg`                                       | App icon / monogram (rounded square) |
| `images/agentfactory_mark.svg`                                       | Monogram only                        |
| `images/agentfactory_banner.png`                                     | Social / marketing banner            |
| `assets/AgentFactory*.png`                                           | PNG exports of the logos and icon    |
| `packages/ui/public/favicon.{ico,svg}`, `logo192.png`, `logo512.png` | Browser and PWA icons                |

All SVG logos have their text converted to outlines, so they render the same everywhere without the Inter font installed.

## What you need to host to make it live

The code now points at the URLs and accounts below. Everything works without them (the app runs and builds), but links, images and integrations that depend on them stay broken until they exist.

### 1. Domains and web pages

| URL                              | What it is              | Where it's used                                |
| -------------------------------- | ----------------------- | ---------------------------------------------- |
| `https://alexocloudai.com`       | Marketing website       | Page meta tags, package homepages, README      |
| `https://alexocloudai.com/terms` | Terms & Conditions page | Default disclaimer in the embedded chatbot     |
| `https://docs.alexocloudai.com`  | Documentation site      | "Learn more" links throughout the UI and nodes |

Docs pages the app links to (create these paths, or redirects):

```
/configuration/environment-variables
/configuration/rate-limit
/integrations/langchain/record-managers
/integrations/langchain/tools/{gmail,google-calendar,google-drive,google-sheets,microsoft-outlook,microsoft-teams,searxng,slack-mcp-user-guide}
/memory
/memory/long-term-memory
/tools/custom-tool
/tutorials/tools-and-mcp
/using-agentfactory/agentflows/sequential-agents
/using-agentfactory/prediction
/using-agentfactory/streaming
/using-agentfactory/uploads
/using-agentfactory/variables
/vector-stores/vectara
```

### 2. Static brand files (CDN)

Upload the files in `assets/cdn/` so they are served at exactly these URLs (used by HTML emails and link previews, which need absolute URLs):

| Upload                                         | Public URL                                                   |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `assets/cdn/brand/agentfactory-logo-white.png` | `https://alexocloudai.com/brand/agentfactory-logo-white.png` |
| `assets/cdn/brand/agentfactory-email-bg.svg`   | `https://alexocloudai.com/brand/agentfactory-email-bg.svg`   |
| `assets/cdn/brand/agentfactory-icon.png`       | `https://alexocloudai.com/brand/agentfactory-icon.png`       |
| `assets/cdn/og-image/og-facebook.png`          | `https://alexocloudai.com/og-image/og-facebook.png`          |
| `assets/cdn/og-image/og-twitter.png`           | `https://alexocloudai.com/og-image/og-twitter.png`           |

### 3. Email

| Address                      | Purpose                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `team@mail.alexocloudai.com` | Default sender for invites, password resets, verification (set up SPF/DKIM, or override with `SENDER_EMAIL`) |
| `support@alexocloudai.com`   | Support address shown in the UI and docs                                                                     |
| `security@alexocloudai.com`  | Security reports (`SECURITY.md`)                                                                             |
| `hello@alexocloudai.com`     | Package author contact                                                                                       |

### 4. GitHub (`hiteshb2006/Alexo-Agent-Factory`)

-   Make the repository **public** if you want these to work for everyone:
    -   `https://raw.githubusercontent.com/hiteshb2006/Alexo-Agent-Factory/main/packages/components/models.json`: live model list (the server falls back to the bundled copy when it can't be fetched)
    -   `https://raw.githubusercontent.com/hiteshb2006/Alexo-Agent-Factory/main/assets/AgentFactory_icon.png`: default avatar in "Share Chatbot"
    -   `https://api.github.com/repos/hiteshb2006/Alexo-Agent-Factory`: star count in the header
    -   `https://api.github.com/repos/hiteshb2006/Alexo-Agent-Factory/releases/latest`: "latest version" in the About dialog (publish a GitHub Release)
-   Enable **Discussions** (linked as the community and support channel).

### 5. Container registry and packages

| Account / name                       | Purpose                                                                                                                                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Docker Hub org `alexocloudai`        | Images `alexocloudai/agentfactory` and `alexocloudai/agentfactory-worker`. Add the `DOCKERHUB_USERNAME` / `DOCKERHUB_TOKEN` secrets and run the "Docker Image CI - Docker Hub" workflow. Until then `docker compose up` builds the images from source. |
| npm scope `@alexocloudai` (optional) | Publishing the `@alexocloudai/agentflow` and `@alexocloudai/observe` SDKs (`NPM_TOKEN` secret)                                                                                                                                                         |
| X/Twitter `@AlexoCloudAI`            | Social handle in meta tags and README                                                                                                                                                                                                                  |

### 6. Optional: fully branded chat widget

The "Embed in website" snippets and the share-chatbot page use the external `flowise-embed` / `flowise-embed-react` npm packages (loaded from `cdn.jsdelivr.net`). They work as is. To brand the widget itself (its default footer and tag names), fork the upstream chat-embed project, publish it under your own name (for example `agentfactory-embed`), and update `packages/ui/src/views/chatflows/EmbedChat.jsx` and `packages/ui/package.json`. You can also hide or replace the widget footer with the `footer` theme option in the embed config.

## Kept on purpose

These upstream identifiers are still in the code because changing them would break existing data, integrations or legal terms. None of them appears in the product UI.

-   **Legal notices:** `LICENSE.md`, `packages/server/src/enterprise/LICENSE.md` and the header of `packages/server/src/IdentityManager.ts` keep the original copyright and license text, as the Apache 2.0 and commercial licenses require.
-   **Enterprise code:** `packages/server/src/enterprise/` is under the upstream commercial license. Using those features (SSO, RBAC, workspaces, audit) in production requires a commercial subscription from the original vendor, whatever the branding.
-   **Data directory:** `~/.flowise` / `/home/node/.flowise` stays the default storage path, so existing databases, uploads and the `encryption.key` keep working. Use `DATABASE_PATH`, `SECRETKEY_PATH`, `LOG_PATH` and `BLOB_STORAGE_PATH` to point anywhere else.
-   **Stored-data markers and internal constants:** `FLOWISE_CREDENTIAL_ID`, `FLOWISE_CHATID`, the `FlowiseCredential_` prefix, the `FlowiseEncryptionKey` / `Flowise` AWS secret names, the `flowise-tool` internal header, the Mem0 `flowise-default-user` default, and internal class names (`InternalFlowiseError`, `FlowiseMemory`, …).
-   **Third-party packages:** `flowise-embed`, `flowise-embed-react`, `flowise-react-json-view`, `flowise-nim-container-manager` are published npm dependencies.
-   **Partner integration tags:** identifiers sent to FireCrawl, Cerebras, Vectara, Replicate, Oxylabs and Lunary are registered with those vendors.
-   **Legacy env var names:** `FLOWISE_FILE_SIZE_LIMIT`, `FLOWISE_SECRETKEY_OVERWRITE`, `FLOWISE_EE_LICENSE_KEY` and `DISABLE_FLOWISE_TELEMETRY` still work as aliases of the `AGENTFACTORY_*` names (`packages/server/src/utils/brandEnv.ts`).
