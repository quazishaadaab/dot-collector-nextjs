FROM --platform=linux/amd64 ubuntu


WORKDIR /app
COPY . /app

RUN apt-get update 
RUN apt-get install aptitude -y

RUN aptitude -y install curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN aptitude install nodejs -y
RUN node -v 
RUN aptitude install npm -y
RUN npm install
RUN npm run build

CMD ["npm", "run","start"]


EXPOSE 3000 
