FROM node:24

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
ENV DB_PATH=/app/data/solur.db

RUN corepack enable

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm run build

EXPOSE 3000

CMD ["node", "build"]
