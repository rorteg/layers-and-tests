FROM node:12

# Env
ENV TIME_ZONE=America/Sao_Paulo
ENV APPLICAION_ENV dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

# Create Directory for the Container
WORKDIR /var/www/node

# Only copy the package.json file to work directory
COPY package*.json ./

RUN npm install -g typescript
RUN npm install -g pm2

# Start
CMD [ "npm", "start" ]
EXPOSE 3000
