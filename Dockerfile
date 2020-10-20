FROM node:12

WORKDIR /home/Backend-RESTFUL

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]

