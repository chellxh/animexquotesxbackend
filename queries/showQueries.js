const db = require("../db/dbConfig");

const getAllShows = async () => {
  try {
    const allShows = await db.any("SELECT * FROM shows");
    return allShows;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllShows,
};
