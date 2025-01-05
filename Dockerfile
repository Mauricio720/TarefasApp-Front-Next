FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN rm -rf node_modules
RUN npm install

COPY . .

# Fazer build apenas em produção
ARG NODE_ENV=development
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

EXPOSE 3000

# O comando será definido pelo docker-compose
CMD ["sh", "-c", "npm run dev"]
