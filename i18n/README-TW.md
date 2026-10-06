<!-- markdownlint-disable MD030 MD033 MD041 -->

<p align="center">
<img width="440" alt="AgentFactory" src="../images/agentfactory_by_alexocloudai_white.svg#gh-light-mode-only">
<img width="440" alt="AgentFactory" src="../images/agentfactory_by_alexocloudai_dark.svg#gh-dark-mode-only">
</p>

<p align="center"><b>建構、編排並擴展 AI 代理</b></p>

<div align="center">

[English](../README.md) | [繁體中文](./README-TW.md) | [简体中文](./README-ZH.md) | [日本語](./README-JA.md) | [한국어](./README-KR.md)

</div>

<a href="https://alexocloudai.com">
<img width="100%" alt="AgentFactory" src="../images/agentfactory_banner.png"></a>

## ⚡ 快速開始

需要 [Node.js](https://nodejs.org/en/download) 24 與 [PNPM](https://pnpm.io/installation)。

```bash
git clone https://github.com/hiteshb2006/Alexo-Agent-Factory.git
cd Alexo-Agent-Factory
pnpm install
pnpm build
pnpm start
```

開啟 [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

1. 進入專案根目錄下的 `docker` 資料夾
2. 將 `.env.example` 複製為 `.env`
3. 執行 `docker compose up -d`（首次會從原始碼建置 `alexocloudai/agentfactory` 映像）
4. 開啟 [http://localhost:3000](http://localhost:3000)
5. 使用 `docker compose stop` 停止容器

```bash
docker build -f docker/Dockerfile -t alexocloudai/agentfactory .
docker run -d --name agentfactory -p 3000:3000 alexocloudai/agentfactory
```

## 👨‍💻 開發者

儲存庫包含 `server`（後端 API 與 `agentfactory` 命令列）、`ui`（React 前端）、`components`（節點與第三方整合）、`api-documentation`（Swagger 文件）、`agentflow` / `observe`（可嵌入的 React SDK）。開發模式：分別在 `packages/ui` 與 `packages/server` 中依 `.env.example` 建立 `.env`，然後執行 `pnpm dev`，造訪 [http://localhost:8080](http://localhost:8080)

## 🌱 環境變數

在 `packages/server/.env` 中設定實例，完整清單請見 [CONTRIBUTING.md](../CONTRIBUTING.md)。AgentFactory 專用變數使用 `AGENTFACTORY_` 前綴，舊的變數名稱仍然相容。

## 📖 文件

[docs.alexocloudai.com](https://docs.alexocloudai.com)

## 🙋 支援

歡迎在 [GitHub Discussions](https://github.com/hiteshb2006/Alexo-Agent-Factory/discussions) 提問，或寄信至 [support@alexocloudai.com](mailto:support@alexocloudai.com)。

## 📄 授權

本儲存庫原始碼依 [Apache License 2.0](../LICENSE.md) 提供（[LICENSE.md](../LICENSE.md) 頂部列出的目錄除外，其採用獨立的商業授權）。AgentFactory 以開源專案 Flowise（Apache 2.0）為基礎建構，原始版權聲明保留於 [LICENSE.md](../LICENSE.md)。
