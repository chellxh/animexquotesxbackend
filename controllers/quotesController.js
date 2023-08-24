const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  allQuotes,
  allQuotesByShow,
  allQuotesByCharacter,
  getQuotesById,
  createQuote,
  createQuoteFromShow,
  createQuoteFromCharacter,
  deleteQuoteById,
  updateQuoteById,
} = require("../queries/quoteQueries");

const { validateQuote } = require("../validations/validateInput");

router.get("/", async (req, res) => {
  const getAllQuotes = await allQuotes();
  if (!getAllQuotes) {
    return res.status(500).json({ Error: "Server Error. Please try again." });
  } else {
    return res.json(getAllQuotes);
  }
});

router.post("/", validateQuote, async (req, res) => {
  const newQuote = await createQuote(req.body);
  return res.json(newQuote);
});

router.get("/shows-quotes", async (req, res) => {
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

router.get("/characters-quotes", async (req, res) => {
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

router.post("/shows-quotes", validateQuote, async (req, res) => {
  const { showId } = req.params;

  const newQuoteByShow = await createQuoteFromShow(showId, req.body);
  return res.json(newQuoteByShow);
});

router.post("/characters-quotes", validateQuote, async (req, res) => {
  const { characterId } = req.params;
  const newQuoteByCharacter = await createQuoteFromCharacter(
    characterId,
    req.body
  );

  return res.json(newQuoteByCharacter);
});

router.put("/shows-quotes/:id", validateQuote, async (req, res) => {
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

router.delete("/shows-quotes/:id", async (req, res) => {
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

router.put("/characters-quotes/:id", validateQuote, async (req, res) => {
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

router.delete("/characters-quotes/:id", async (req, res) => {
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
