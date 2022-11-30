FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install --global cross-env

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
