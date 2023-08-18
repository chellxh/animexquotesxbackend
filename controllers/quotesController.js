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

const { validateQuote } = require("../validations/validateInput");

router.get("/", async (req, res) => {
  const getAllQuotes = await allQuotes();
  console.log(allQuotes);
  if (!getAllQuotes) {
    return res.status(500).json({ Error: "Server Error. Please try again." });
  } else {
    return res.json(getAllQuotes);
  }
});

router.get("/list", async (req, res) => {
  const { showId } = req.params;
  const allQuotesInShow = await allQuotesByShow(showId);
  if (allQuotesInShow.length === 0) {
    return res.status(404).json({
      Error: "GET request unsuccessful",
      message:
        "Quotes Not Found! Please check the show id you have entered and try again.",
    });
  } else {
    return res.json(allQuotesInShow);
  }
});

router.get("/list", async (req, res) => {
  const { characterId } = req.params;
  const allQuotesFromCharacter = await allQuotesByCharacter(characterId);
  if (allQuotesFromCharacter.length === 0) {
    return res.status(404).json({
      Error: "GET request unsuccessful",
      message:
        "Quotes Not Found! Please check the character id you have entered and try again.",
    });
  } else {
    return res.json(allQuotesFromCharacter);
  }
});

router.post("/list", validateQuote, async (req, res) => {
  const { showId } = req.params;

  const newCharacter = await createCharacterFromShow(showId, req.body);
  return res.json(newCharacter);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const quote = await getQuotesById(id);

  if (quote.length === 0) {
    return res.status(404).json({
      Error: "GET request unsuccessful",
      message:
        "Quote Not Found! Please try again or enter a different quote id.",
    });
  } else {
    return res.json(quote[0]);
  }
});

router.post("/", validateQuote, async (req, res) => {
  const newQuote = await createQuote(req.body);
  console.log(newQuote);
  return res.json(newQuote);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedQuote = await deleteQuoteById(id);

  if (deletedQuote.length === 0) {
    return res.status(404).json({
      Error: "DELETE request unsuccessful.",
      message:
        "Quote Not Found! Please try again or enter a different quote id.",
    });
  } else {
    return res.json(deletedQuote[0]);
  }
});

router.put("/:id", validateQuote, async (req, res) => {
  const { id } = req.params;
  const updatedQuote = await updateQuoteById(id, req.body);

  if (updatedQuote.length === 0) {
    return res.status(404).json({
      Error: "PUT request unsuccessful.",
      message:
        "Quote Not Found! Please try again or enter a different quote id.",
    });
  } else {
    return res.json(updatedQuote[0]);
  }
});

module.exports = router;
