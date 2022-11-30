FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install && cd frontend && npm install && npm run build && cd ..
EXPOSE 8000
CMD npm run backend