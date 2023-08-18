const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  allQuotes,
  allQuotesByShow,
  allQuotesByCharacter,
  getQuotesById,
  getQuotesFromShowById,
  getQuotesFromCharacterById,
  createQuote,
  deleteQuoteById,
  updateQuoteById,
} = require("../queries/quoteQueries");

router.get("/", async (req, res) => {
  const getAllQuotes = await allQuotes();
  console.log(allQuotes);
  if (!getAllQuotes) {
    return res.status(500).json({ Error: "Server Error. Please try again." });
  } else {
    return res.json(getAllQuotes);
  }
});




module.exports = router;
