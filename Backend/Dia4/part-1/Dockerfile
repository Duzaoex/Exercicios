# Com base numa imagem com node instalado
FROM node:18-alpine
# Copie o arquivo index.js para a pasta /tmp
COPY index.js /tmp
# Execute o arquivo index.js com node

# RUN é executado no momento de construção BUILD da imagem
# CMD é executado no momento de inicialização do container
# CMD node /tmp/index.js
CMD ["node", "/tmp/index.js"]