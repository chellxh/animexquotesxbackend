const db = require("../db/dbConfig");

const getAllShows = async () => {
  try {
    const allShows = await db.any("SELECT * FROM shows");
    return allShows;
  } catch (e) {
    return e;
  }
};

const getShowById = async (id) => {
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

const deleteShowById = async (id) => {
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

const updateShowById = async (id, show) => {
  try {
    const updatedShow = await db.any(
      "UPDATE shows SET title = $1, image = $2, category = $3, release_date = $4, rating = $5 WHERE id = $6 RETURNING *",
      [
        show.title,
        show.image,
        show.category,
        show.release_date,
        show.rating,
        id,
      ]
    );
    return updatedShow;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllShows,
  getShowById,
  createShow,
  deleteShowById,
  updateShowById,
};
