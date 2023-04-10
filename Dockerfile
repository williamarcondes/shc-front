FROM node:18-alpine
RUN apk add --no-cache openssl libc6-compat
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY package* ./ 

RUN npm install

COPY . . 

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]