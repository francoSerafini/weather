// const bodyParser = require("body-parser");
const { application } = require("express");
const express = require("express");
const cors = require("cors");
const weatherRouter = require("./weather/index.js");

let weather = [];
const STATUS_USER_ERROR = 422;

const server = express();

server.use(express.json());

server.use(cors());

server.use(`/`, weatherRouter);

module.exports = { weather, server };
