const express = require("express");
const app = express();



/* - - - CONTROLLERS - - - */
const indexController = require("./controllers/indexController");
const charactersController = require("./controllers/charactersController");

/* - - - ROUTES - - - */
app.use("/", indexController);
app.use("/characters", charactersController);

module.exports = app;
