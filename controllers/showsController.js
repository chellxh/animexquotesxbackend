const express = require("express");
const router = express.Router();

const quotesController = require("./quotesController");

router.use("/:showId/quotes", quotesController);

const { getAllShows, showById } = require("../queries/showQueries");

router.get("/", async (req, res) => {
  const getShows = await getAllShows();

  if (Array.isArray(getShows)) {
    return res.json(getShows);
  } else {
    return res.status(500).json({ error: "Server Error. Please try again." });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const show = await showById(id);

  if (show.length === 0) {
    return res.status(404).json({
      Error:
        "Show Not Found, Please try again or enter a different show title.",
    });
  } else {
    return res.json(show[0]);
  }
});

module.exports = router;
