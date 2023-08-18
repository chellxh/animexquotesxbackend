const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* - - - CONTROLLERS - - - */
const indexController = require("./controllers/indexController");
const charactersController = require("./controllers/charactersController");
const showsController = require("./controllers/showsController");
const quotesController = require("./controllers/quotesController");

/* - - - ROUTES - - - */
app.use("/", indexController);
app.use("/shows", showsController);
app.use("/characters", charactersController);
app.use("/quotes", quotesController);

// 404 PAGE
app.get("*", (req, res) => {
  return res.status(404).json({
    Error: "GET request unsuccessful.",
    message: "Page Not Found! Please try again.",
  });
});

module.exports = app;
