FROM node:22
WORKDIR /app
ADD *.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]