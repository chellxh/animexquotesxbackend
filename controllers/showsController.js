const express = require("express");
const router = express.Router();

const { getAllShows } = require("../queries/showQueries");

router.get("/", async (req, res) => {
  const getShows = await getAllShows();

  if (Array.isArray(getShows)) {
    return res.json(getShows);
  } else {
    return res.status(500).json({ error: "Server Error. Please try again." });
  }
});

module.exports = router;
