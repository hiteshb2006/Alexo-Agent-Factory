<!-- markdownlint-disable MD030 -->

# AgentFactory 服务端

[English](./README.md) | 中文

<h3>构建、编排并扩展 AI 智能体</h3>

![AgentFactory](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/images/agentfactory_banner.png?raw=true)

AgentFactory（AlexoCloudAI 出品）的后端 API 服务与 `agentfactory` 命令行工具。

## ⚡ 快速入门

在仓库根目录执行：

```bash
pnpm install
pnpm build
pnpm start
```

打开 [http://localhost:3000](http://localhost:3000)。

## 🌱 环境变量

AgentFactory 支持通过环境变量配置实例。您可以在 `packages/server` 文件夹中的 `.env` 文件中指定这些变量。阅读[更多](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/i18n/CONTRIBUTING-ZH.md)

也可以作为命令行参数传入，例如：

```
agentfactory start --PORT=3000 --DEBUG=true
```

## 📖 文档

[AgentFactory 文档](https://docs.alexocloudai.com/)

## 🌐 自托管

任何支持 Docker 的环境均可运行 AgentFactory，参见 [Docker 指南](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/docker/README.md)。

## 🙋 支持

欢迎在 [GitHub Discussions](https://github.com/hiteshb2006/Alexo-Agent-Factory/discussions) 提问，或发送邮件至 [support@alexocloudai.com](mailto:support@alexocloudai.com)。

## 🙌 贡献

请参阅[贡献指南](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/i18n/CONTRIBUTING-ZH.md)。

## 📄 许可证

本仓库中的源代码根据 [Apache License Version 2.0](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/LICENSE.md) 提供。
