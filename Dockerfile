FROM node:16
WORKDIR /app
COPY ./package*.json ./
RUN npm install --save
COPY . ./
RUN npm run build
CMD ["npm", "start"]