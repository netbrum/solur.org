FROM node:24 AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
ENV CI=true

RUN corepack enable

WORKDIR /app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

RUN pnpm build

FROM node:24
WORKDIR /app
ENV NODE_ENV=production
ENV ORIGIN=https://solur.org

COPY --from=build /app/build/ .
EXPOSE 3000

CMD ["node", "build"]
