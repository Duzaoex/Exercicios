# Ambiente com node 18
FROM node:18-alpine as dev
# Cria a pasta /app e entra nela
WORKDIR /app
# Copiar package
COPY package*.json .
# na build -> RUN
RUN npm clean-install
# Instalar dependências (evitando conflitos)

COPY . .
# COPY . /app
# Copiar restante dos arquivos (componentes, css, etc)
# na inicialização -> CMD
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM node:18-alpine as builder
WORKDIR /app
COPY --from=dev /app .
# buildar a aplicação
RUN npm run build
# Rodar aplicação com npm run dev

FROM nginx:1.25.2-alpine as prod
COPY --from=builder /app/dist /usr/share/nginx/html