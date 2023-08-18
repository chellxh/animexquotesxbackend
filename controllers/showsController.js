const express = require("express");
const router = express.Router();

const quotesController = require("./quotesController");

router.use("/:showId/quotes", quotesController);

const {
  getAllShows,
  showById,
  createShow,
  deleteShow,
} = require("../queries/showQueries");

const {
  validateShowTitle,
  validateImage,
} = require("../validations/validateInput");

router.get("/", async (req, res) => {
  const getShows = await getAllShows();

  if (!Array.isArray(getShows)) {
    return res.status(500).json({ error: "Server Error. Please try again." });
  } else {
    return res.json(getShows);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const show = await showById(id);

  if (show.length === 0) {
    return res.status(404).json({
      Error: "Show Not Found! Please try again or enter a different show id.",
    });
  } else {
    return res.json(show[0]);
  }
});

router.post("/", validateShowTitle, validateImage, async (req, res) => {
  const createdShow = await createShow(req.body);

  console.log(createdShow, req.body);
  res.json(createdShow);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedShow = await deleteShow(id);

  if (deletedShow.length === 0) {
    return res.status(404).json({
      error: "Show Not Found! Delete request cancelled. Please try again.",
    });
  } else {
    return res.json(deletedShow[0]);
  }
});

module.exports = router;
