const express = require("express");
// const helmet = require("helmet");
// const morgan = require("morgan");

const actionModelRouter = require("./data/helpers/actionModel-router.js");
const projectModelRouter = require("./data/helpers/projectModel-router.js");

const server = express();

server.use(express.json());
// server.use(helmet());
// server.use(morgan());

server.use("/actions", actionModelRouter);
server.use("/projects", projectModelRouter);

module.exports = server;
