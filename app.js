const express = require("express");
const app = express();

/* - - - CONTROLLERS - - - */
const indexController = require("./controllers/indexController");
const charactersController = require("./controllers/charactersController");
const showsController = require("./controllers/showsController");

/* - - - ROUTES - - - */
app.use("/", indexController);
app.use("/shows", showsController);
app.use("/characters", charactersController);

// 404 PAGE
app.get("*", (req, res) => {
  return res
    .status(404)
    .json("Error: Page Not Found. Please check and try again.");
});

module.exports = app;
