FROM node:18.20.4-bookworm
WORKDIR /app
RUN yarn global add pm2
COPY ./index.js /app/
COPY ./ecosystem.config.js /app/
CMD ["pm2", "start", "ecosystem.config.js", "--no-daemon"]
