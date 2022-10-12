// server.js
const next = require("next");
const express = require("express");
const server = express();

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

/******************************************************************/
const sequelize = require("./server/utils/database");
const Works = require("./server/models/works");
/******************************************************************/

app.prepare().then(async () => {
  sequelize.sync({ Works }).catch();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
