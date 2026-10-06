<!-- markdownlint-disable MD030 -->

# AgentFactory Server

English | [中文](./README-ZH.md)

<h3>Build, orchestrate, and scale AI agents</h3>

![AgentFactory](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/images/agentfactory_banner.png?raw=true)

Backend API server and `agentfactory` command-line interface for AgentFactory by AlexoCloudAI.

## ⚡ Quick Start

From the repository root:

```bash
pnpm install
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000).

## 🌱 Env Variables

AgentFactory supports different environment variables to configure your instance. You can specify them in the `.env` file inside the `packages/server` folder. Read [more](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/CONTRIBUTING.md#-env-variables)

You can also pass them as flags to the CLI. For example:

```
agentfactory start --PORT=3000 --DEBUG=true
```

## 📖 Tests

We use [Cypress](https://github.com/cypress-io) for e2e testing. To run the suite in dev mode:

```sh
cd Alexo-Agent-Factory/packages/server
pnpm install
./node_modules/.bin/cypress install
pnpm build
#Only for writing new tests on local dev -> pnpm run cypress:open
pnpm run e2e
```

## 📖 Documentation

[AgentFactory Docs](https://docs.alexocloudai.com/)

## 🌐 Self Host

Run AgentFactory anywhere Docker runs — see the [Docker guide](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/docker/README.md).

## 🙋 Support

Ask questions, raise problems, and request new features in [GitHub Discussions](https://github.com/hiteshb2006/Alexo-Agent-Factory/discussions) or email [support@alexocloudai.com](mailto:support@alexocloudai.com).

## 🙌 Contributing

See [contributing guide](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/CONTRIBUTING.md).

## 📄 License

Source code in this repository is made available under the [Apache License Version 2.0](https://github.com/hiteshb2006/Alexo-Agent-Factory/blob/main/LICENSE.md).
