const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middleWares = jsonServer.defaults();

const port = process.env.PORT || 3001;

server.use(middleWares);
server.use(router);

server.listen(port);

