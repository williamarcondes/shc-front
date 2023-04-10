
# FRONTEND - SHC Sistema Home Care

Repositório de Front, do Sistema Online de Home Care, conectando familiares e cuidadores


![Alt text](img/logo.svg)

## Instalação e execução

gerando node_modules primeira vez
> docker run -it -u $(id -u) -v $(pwd):/app -w /app node:18-alpine npm install

> npm install
Limpar containers

> docker container stop $(docker container list -qa) && docker system prune -a

Subir Container Back
> npm run dev