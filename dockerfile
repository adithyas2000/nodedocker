FROM node:18.12.1
ENV NODE_ENV=development
WORKDIR /testNode1
COPY ["package.json","package-lock.json*","./"]
RUN npm install
COPY . .
CMD ["node","index.js"]