FROM node:22
WORKDIR /app
ADD *.json ./
ADD .env ./
RUN npm install
ADD . .
RUN npx prisma generate
CMD ["npm", "start"]