FROM node:latest

WORKDIR /home/hp/projects/farmers-app


COPY . .

RUN npm install

WORKDIR /home/hp/projects/farmers-app/frontend

RUN npm install

WORKDIR /home/hp/projects/farmers-app



CMD ["npm", "run" , "dev"]
