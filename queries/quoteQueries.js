const db = require("../db/dbConfig");

const allQuotes = async () => {
  try {
    const allQuotes = await db.any("SELECT * FROM quotes");
    return allQuotes;
  } catch (e) {
    return e;
  }
};

const allQuotesByShow = async (showId) => {
  try {
    const showQuote = await db.any(
      "SELECT * FROM quotes WHERE show_id = $1 ORDER BY id ASC",
      showId
    );
    return showQuote;
  } catch (e) {
    return e;
  }
};
const allQuotesByCharacter = async (characterId) => {
  try {
    const characterQuote = await db.any(
      "SELECT * FROM quotes WHERE character_id = $1 ORDER BY id ASC",
      characterId
    );
    return characterQuote;
  } catch (e) {
    return e;
  }
};

const getQuotesById = async (id) => {
  try {
    const quote = await db.any(`SELECT * FROM quotes WHERE id = $1`, id);
    return quote;
  } catch (e) {
    return e;
  }
};

const createQuote = async (data) => {
  try {
    const newQuote = await db.one(
      "INSERT INTO quotes (character_id, show_id, quote) VALUES ($1, $2, $3) RETURNING *",
      [data.character_id, data.show_id, data.quote]
    );
    return newQuote;
  } catch (e) {
    return e;
  }
};

const createQuoteFromShow = async (showId, data) => {
  try {
    const newQuote = await db.one(
      "INSERT INTO quotes (character_id, show_id, quote) VALUES ($1, $2, $3) RETURNING *",
      [data.character_id, showId, data.quote]
    );
    return newQuote;
  } catch (e) {
    return e;
  }
};

const createQuoteFromCharacter = async (characterId, data) => {
  try {
    const newQuote = await db.one(
      "INSERT INTO quotes (character_id, show_id, quote) VALUES ($1, $2, $3) RETURNING *",
      [characterId, data.show_id, data.quote]
    );
    return newQuote;
  } catch (e) {
    return e;
  }
};

const deleteQuoteById = async (id) => {
  try {
    const deletedQuote = await db.any(
      `DELETE FROM quotes WHERE id = $1 RETURNING *`,
      id
    );
    return deletedQuote;
  } catch (e) {
    return e;
  }
};

const updateQuoteById = async (id, characterQuote) => {
  try {
    let { show_id, character_id, quote } = characterQuote;
    const updatedQuote = await db.any(
      "UPDATE quotes SET show_id = $1, character_id = $2, quote = $3 WHERE id = $4 RETURNING *",
      [show_id, character_id, quote, id]
    );
    return updatedQuote;
  } catch (e) {
    return e;
  }
};

module.exports = {
  allQuotes,
  allQuotesByShow,
  allQuotesByCharacter,
  getQuotesById,
  createQuote,
  createQuoteFromShow,
  createQuoteFromCharacter,
  deleteQuoteById,
  updateQuoteById,
};
