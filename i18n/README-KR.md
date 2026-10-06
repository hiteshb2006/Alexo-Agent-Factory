<!-- markdownlint-disable MD030 MD033 MD041 -->

<p align="center">
<img width="440" alt="AgentFactory" src="../images/agentfactory_by_alexocloudai_white.svg#gh-light-mode-only">
<img width="440" alt="AgentFactory" src="../images/agentfactory_by_alexocloudai_dark.svg#gh-dark-mode-only">
</p>

<p align="center"><b>AI 에이전트를 구축하고, 오케스트레이션하고, 확장하세요</b></p>

<div align="center">

[English](../README.md) | [繁體中文](./README-TW.md) | [简体中文](./README-ZH.md) | [日本語](./README-JA.md) | [한국어](./README-KR.md)

</div>

<a href="https://alexocloudai.com">
<img width="100%" alt="AgentFactory" src="../images/agentfactory_banner.png"></a>

## ⚡ 빠른 시작

[Node.js](https://nodejs.org/en/download) 24와 [PNPM](https://pnpm.io/installation)이 필요합니다.

```bash
git clone https://github.com/hiteshb2006/Alexo-Agent-Factory.git
cd Alexo-Agent-Factory
pnpm install
pnpm build
pnpm start
```

브라우저에서 열기: [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

1. 프로젝트 루트의 `docker` 폴더로 이동
2. `.env.example`을 `.env`로 복사
3. `docker compose up -d` 실행 (처음에는 소스에서 `alexocloudai/agentfactory` 이미지를 빌드)
4. 브라우저에서 열기: [http://localhost:3000](http://localhost:3000)
5. `docker compose stop`으로 컨테이너 중지

```bash
docker build -f docker/Dockerfile -t alexocloudai/agentfactory .
docker run -d --name agentfactory -p 3000:3000 alexocloudai/agentfactory
```

## 👨‍💻 개발자

저장소에는 `server`(백엔드 API 및 `agentfactory` CLI), `ui`(React 프론트엔드), `components`(노드 및 서드파티 연동), `api-documentation`(Swagger 문서), `agentflow` / `observe`(임베드 가능한 React SDK)가 포함됩니다. 개발 모드: `packages/ui`와 `packages/server`에 `.env.example`을 참고해 `.env`를 만든 뒤 `pnpm dev`를 실행하고 접속: [http://localhost:8080](http://localhost:8080)

## 🌱 환경 변수

`packages/server/.env`에서 인스턴스를 설정합니다. 전체 목록은 [CONTRIBUTING.md](../CONTRIBUTING.md)를 참고하세요. AgentFactory 전용 변수는 `AGENTFACTORY_` 접두사를 사용하며, 기존 변수 이름도 계속 지원됩니다.

## 📖 문서

[docs.alexocloudai.com](https://docs.alexocloudai.com)

## 🙋 지원

질문과 요청은 [GitHub Discussions](https://github.com/hiteshb2006/Alexo-Agent-Factory/discussions) 또는 [support@alexocloudai.com](mailto:support@alexocloudai.com)으로 보내주세요.

## 📄 라이선스

이 저장소의 소스 코드는 [Apache License 2.0](../LICENSE.md)으로 제공됩니다([LICENSE.md](../LICENSE.md) 상단에 명시된 디렉터리는 별도의 상용 라이선스). AgentFactory는 오픈소스 Flowise 프로젝트(Apache 2.0)를 기반으로 하며, 원본 저작권 고지는 [LICENSE.md](../LICENSE.md)에 유지됩니다.
