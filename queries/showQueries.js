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

const createShow = async (data) => {
  try {
    const newShow = await db.one(
      "INSERT INTO shows (title, image, category, release_date, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.title, data.image, data.category, data.release_date, data.rating]
    );
    return newShow;
  } catch (e) {
    return e;
  }
};

const deleteShow = async (id) => {
  try {
    const deletedShow = await db.any(
      `DELETE FROM shows WHERE id = $1 RETURNING *`,
      id
    );
    return deletedShow;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllShows,
  showById,
  createShow,
  deleteShow,
};
