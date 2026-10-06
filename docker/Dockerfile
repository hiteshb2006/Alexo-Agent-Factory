# AgentFactory by AlexoCloudAI — production image built from this repository's source.
#
# Build (from the repository root):
#   docker build -f docker/Dockerfile -t alexocloudai/agentfactory .

# Node.js version (overridable via build-arg from CI)
ARG NODE_VERSION=24

# Stage 1: Build stage
FROM node:${NODE_VERSION}-alpine AS build

USER root

# Install build dependencies
RUN apk add --no-cache libc6-compat git python3 py3-pip make g++ build-base cairo-dev pango-dev && \
    npm install -g pnpm@10.26.0

# Skip downloading Chrome for Puppeteer (saves build time)
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV NODE_OPTIONS=--max-old-space-size=8192

WORKDIR /usr/src/agentfactory

# Copy app source, install dependencies and build (SDK packages are not needed in the image)
COPY . .
RUN pnpm install --frozen-lockfile && \
    pnpm build:docker

# Stage 2: Runtime stage
FROM node:${NODE_VERSION}-alpine

# Install runtime dependencies
RUN apk add --no-cache libc6-compat chromium git python3 py3-pip make g++ build-base cairo-dev pango-dev curl && \
    npm install -g pnpm@10.26.0

# Set the environment variable for Puppeteer to find Chromium
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /usr/src/agentfactory

# Copy AgentFactory from the build stage
COPY --from=build /usr/src/agentfactory /usr/src/agentfactory

# Expose the `agentfactory` CLI on the PATH
RUN ln -s /usr/src/agentfactory/packages/server/bin/run /usr/local/bin/agentfactory && \
    chown -R node:node /usr/src/agentfactory

# Switch to non-root user (node:*-alpine already has this user)
USER node

EXPOSE 3000

ENTRYPOINT ["agentfactory", "start"]
