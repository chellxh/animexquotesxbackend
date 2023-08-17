const db = require("../db/dbConfig");

const getAllShows = async () => {
  try {
    const allShows = await db.any("SELECT * FROM shows");
    return allShows;
  } catch (e) {
    return e;
  }
};

const showById = async (id) => {
  try {
    const show = await db.any(`SELECT * FROM shows WHERE id = $1`, id);
    return show;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllShows,
  showById,
};
