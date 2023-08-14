const express = require("express");
const router = express.Router();

import { getAllShows } from "../queries/showQueries";

router.get("/", async (req, res) => {
  const getShows = await getAllShows();
  return getShows;
});

module.exports = router;
