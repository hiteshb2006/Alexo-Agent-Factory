<!-- markdownlint-disable MD030 MD033 MD041 -->

<p align="center">
<img width="440" alt="AgentFactory" src="./images/agentfactory_by_alexocloudai_white.svg#gh-light-mode-only">
<img width="440" alt="AgentFactory" src="./images/agentfactory_by_alexocloudai_dark.svg#gh-dark-mode-only">
</p>

<p align="center"><b>Build, orchestrate, and scale AI agents.</b><br/>Ideas → Agents → Automation → Real impact</p>

<div align="center">

[![Release Notes](https://img.shields.io/github/v/release/hiteshb2006/Alexo-Agent-Factory?color=7C3AED)](https://github.com/hiteshb2006/Alexo-Agent-Factory/releases)
[![Docs](https://img.shields.io/badge/docs-docs.alexocloudai.com-14D8C4)](https://docs.alexocloudai.com)
[![Follow AlexoCloudAI](https://img.shields.io/twitter/follow/AlexoCloudAI?style=social)](https://twitter.com/AlexoCloudAI)

English | [繁體中文](./i18n/README-TW.md) | [简体中文](./i18n/README-ZH.md) | [日本語](./i18n/README-JA.md) | [한국어](./i18n/README-KR.md)

</div>

<a href="https://alexocloudai.com">
<img width="100%" alt="Turn ideas into AI agents that work." src="./images/agentfactory_banner.png"></a>

## 📚 Table of Contents

-   [⚡ Quick Start](#-quick-start)
-   [🐳 Docker](#-docker)
-   [👨‍💻 Developers](#-developers)
-   [🌱 Env Variables](#-env-variables)
-   [🎨 Brand](#-brand)
-   [📖 Documentation](#-documentation)
-   [🙋 Support](#-support)
-   [🙌 Contributing](#-contributing)
-   [📄 License](#-license)

## ⚡ Quick Start

Requires [Node.js](https://nodejs.org/en/download) 24 and [PNPM](https://pnpm.io/installation).

```bash
git clone https://github.com/hiteshb2006/Alexo-Agent-Factory.git
cd Alexo-Agent-Factory
pnpm install
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000).

## 🐳 Docker

### Docker Compose

1. Go to the `docker` folder at the root of the project
2. Copy `.env.example` to `.env`
3. `docker compose up -d` — builds the `alexocloudai/agentfactory` image from source the first time (or pulls it once you publish it)
4. Open [http://localhost:3000](http://localhost:3000)
5. Stop the containers with `docker compose stop`

### Docker Image

1. Build the image locally:

    ```bash
    docker build -f docker/Dockerfile -t alexocloudai/agentfactory .
    ```

2. Run the image:

    ```bash
    docker run -d --name agentfactory -p 3000:3000 alexocloudai/agentfactory
    ```

3. Stop the container:

    ```bash
    docker stop agentfactory
    ```

For queue mode (main server + workers + Redis) see [docker/README.md](./docker/README.md) and [docker/worker/README.md](./docker/worker/README.md).

## 👨‍💻 Developers

AgentFactory is a single mono repository:

-   `server`: Node backend that serves the API (`agentfactory` CLI)
-   `ui`: React frontend
-   `components`: Agent nodes and third-party integrations
-   `api-documentation`: Auto-generated swagger-ui API docs
-   `agentflow` / `observe`: Embeddable React SDKs for the agent canvas and execution viewer

### Setup

1.  Install [PNPM](https://pnpm.io/installation): `npm i -g pnpm`
2.  Install all dependencies: `pnpm install`
3.  Build everything: `pnpm build`

    <details>
    <summary>Exit code 134 (JavaScript heap out of memory)</summary>

    Increase the Node.js heap size and build again:

    ```bash
    # macOS / Linux / Git Bash
    export NODE_OPTIONS="--max-old-space-size=4096"

    # Windows PowerShell
    $env:NODE_OPTIONS="--max-old-space-size=4096"
    ```

    </details>

4.  Start the app: `pnpm start` → [http://localhost:3000](http://localhost:3000)
5.  Development mode with hot reload:

    -   Create `packages/ui/.env` and set `VITE_PORT` (see `.env.example`)
    -   Create `packages/server/.env` and set `PORT` (see `.env.example`)
    -   Run `pnpm dev` → [http://localhost:8080](http://localhost:8080)

## 🌱 Env Variables

Configure your instance with environment variables in `packages/server/.env` (or `docker/.env`). See the full list in [CONTRIBUTING.md](./CONTRIBUTING.md#-env-variables).

AgentFactory-specific variables use the `AGENTFACTORY_` prefix (for example `AGENTFACTORY_FILE_SIZE_LIMIT`, `AGENTFACTORY_SECRETKEY_OVERWRITE`, `DISABLE_AGENTFACTORY_TELEMETRY`). Older variable names from existing deployments are still accepted.

## 🎨 Brand

| Token         | Hex       | Usage                        |
| ------------- | --------- | ---------------------------- |
| Midnight Navy | `#0B1220` | Trust, stability — dark UI   |
| Charcoal      | `#1F2937` | Balance, clarity — surfaces  |
| Electric Teal | `#14D8C4` | Innovation, AI — accents     |
| Vivid Violet  | `#7C3AED` | Intelligence — primary / CTA |
| Coral Accent  | `#FF6B6B` | Energy — alerts / errors     |
| Cloud         | `#F5F7FB` | Clean, simple — backgrounds  |

Typography: **Inter**. Logos, app icon and banners live in [`images/`](./images) and [`assets/`](./assets). See [BRANDING.md](./BRANDING.md) for the full brand and hosting guide.

## 📖 Documentation

AgentFactory docs: [docs.alexocloudai.com](https://docs.alexocloudai.com)

## 🙋 Support

Ask questions, report problems, and request features in [GitHub Discussions](https://github.com/hiteshb2006/Alexo-Agent-Factory/discussions) or email [support@alexocloudai.com](mailto:support@alexocloudai.com).

## 🙌 Contributing

See the [contributing guide](./CONTRIBUTING.md).

## 📄 License

Source code in this repository is made available under the [Apache License Version 2.0](LICENSE.md), except the directories listed at the top of [LICENSE.md](LICENSE.md), which are under a separate commercial license.

AgentFactory is built on the open-source Flowise project (Apache 2.0); the original copyright notices are retained in [LICENSE.md](LICENSE.md).
