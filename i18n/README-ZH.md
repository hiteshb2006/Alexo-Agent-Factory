<!-- markdownlint-disable MD030 MD033 MD041 -->

<p align="center">
<img width="440" alt="AgentFactory" src="../images/agentfactory_by_alexocloudai_white.svg#gh-light-mode-only">
<img width="440" alt="AgentFactory" src="../images/agentfactory_by_alexocloudai_dark.svg#gh-dark-mode-only">
</p>

<p align="center"><b>构建、编排并扩展 AI 智能体</b></p>

<div align="center">

[English](../README.md) | [繁體中文](./README-TW.md) | [简体中文](./README-ZH.md) | [日本語](./README-JA.md) | [한국어](./README-KR.md)

</div>

<a href="https://alexocloudai.com">
<img width="100%" alt="AgentFactory" src="../images/agentfactory_banner.png"></a>

## ⚡ 快速开始

需要 [Node.js](https://nodejs.org/en/download) 24 和 [PNPM](https://pnpm.io/installation)。

```bash
git clone https://github.com/hiteshb2006/Alexo-Agent-Factory.git
cd Alexo-Agent-Factory
pnpm install
pnpm build
pnpm start
```

打开 [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

1. 进入项目根目录下的 `docker` 文件夹
2. 将 `.env.example` 复制为 `.env`
3. 运行 `docker compose up -d`（首次会从源码构建 `alexocloudai/agentfactory` 镜像）
4. 打开 [http://localhost:3000](http://localhost:3000)
5. 使用 `docker compose stop` 停止容器

```bash
docker build -f docker/Dockerfile -t alexocloudai/agentfactory .
docker run -d --name agentfactory -p 3000:3000 alexocloudai/agentfactory
```

## 👨‍💻 开发者

仓库包含 `server`（后端 API 与 `agentfactory` 命令行）、`ui`（React 前端）、`components`（节点与第三方集成）、`api-documentation`（Swagger 文档）、`agentflow` / `observe`（可嵌入的 React SDK）。开发模式：分别在 `packages/ui` 和 `packages/server` 中根据 `.env.example` 创建 `.env`，然后运行 `pnpm dev`，访问 [http://localhost:8080](http://localhost:8080)

## 🌱 环境变量

在 `packages/server/.env` 中配置实例，完整列表见 [CONTRIBUTING-ZH.md](./CONTRIBUTING-ZH.md)。AgentFactory 专用变量使用 `AGENTFACTORY_` 前缀，旧的变量名仍然兼容。

## 📖 文档

[docs.alexocloudai.com](https://docs.alexocloudai.com)

## 🙋 支持

欢迎在 [GitHub Discussions](https://github.com/hiteshb2006/Alexo-Agent-Factory/discussions) 提问或发送邮件至 [support@alexocloudai.com](mailto:support@alexocloudai.com)。

## 📄 许可证

本仓库源代码基于 [Apache License 2.0](../LICENSE.md) 提供（[LICENSE.md](../LICENSE.md) 顶部列出的目录除外，其采用单独的商业许可证）。AgentFactory 基于开源项目 Flowise（Apache 2.0）构建，原始版权声明保留在 [LICENSE.md](../LICENSE.md) 中。
