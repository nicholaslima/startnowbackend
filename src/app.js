const cors = require('cors');
const express = require('express');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.server.use(cors());

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
