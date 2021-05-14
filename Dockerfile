FROM node:latest

WORKDIR /home/academics/SEM2/SPE/project/book_app

COPY . .
RUN npm install

WORKDIR /home/academics/SEM2/SPE/project/book_app/frontend

RUN npm install

WORKDIR /home/academics/SEM2/SPE/project/book_app


EXPOSE 3000
EXPOSE 5000
CMD [ "npm", "run", "dev"]
