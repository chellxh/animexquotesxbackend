const express = require("express");
const router = express.Router();

const quotesController = require("./quotesController");

router.use("/:showId/quotes", quotesController);

const {
  getAllShows,
  getShowById,
  createShow,
  deleteShowById,
  updateShowById,
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

  const show = await getShowById(id);

  if (show.length === 0) {
    return res.status(404).json({
      Error: "GET request unsuccessful",
      message: "Show Not Found! Please try again or enter a different show id.",
    });
  } else {
    return res.json(show[0]);
  }
});

router.post("/", validateShowTitle, validateImage, async (req, res) => {
  const createdShow = await createShow(req.body);
  return res.json(createdShow);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedShow = await deleteShowById(id);

  if (deletedShow.length === 0) {
    return res.status(404).json({
      Error: "DELETE request unsuccessful.",
      message: "Show Not Found! Please try again or enter a different show id.",
    });
  } else {
    return res.json(deletedShow[0]);
  }
});

router.put("/:id", validateShowTitle, validateImage, async (req, res) => {
  const { id } = req.params;
  const updatedShow = await updateShowById(id, req.body);

  console.log(updatedShow);
  if (updatedShow.length === 0) {
    return res.status(404).json({
      Error: "PUT request unsuccessful.",
      message: "Show Not Found! Please try again or enter a different show id.",
    });
  } else {
    return res.json(updatedShow[0]);
  }
});

module.exports = router;
