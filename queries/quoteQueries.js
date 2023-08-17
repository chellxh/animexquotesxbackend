const db = require("../db/dbConfig");

const allQuotes = async (showId) => {
  try {
    const allQuotes = await db.any(
      "SELECT * FROM quotes WHERE show_id = $1 ORDER BY id ASC",
      showId
    );
    return allQuotes;
  } catch (e) {
    return e;
  }
};

module.exports = {
  allQuotes,
};
