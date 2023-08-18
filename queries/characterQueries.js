const db = require("../db/dbConfig");

const getAllCharacters = async () => {
  try {
    const allCharactersSearch = await db.any("SELECT * FROM characters");
    return allCharactersSearch;
  } catch (e) {
    return e;
  }
};

const allCharacterByShow = async (showId) => {
  try {
    const showCharacters = db.any(
      "SELECT * FROM characters WHERE show_id = $1 ORDER BY id ASC",
      showId
    );
    return showCharacters;
  } catch (e) {
    return e;
  }
};

const getCharacterById = async (id) => {
  try {
    const character = await db.any(
      `SELECT * FROM characters WHERE id = $1`,
      id
    );
    return character;
  } catch (e) {
    return e;
  }
};

const getCharacterFromShowById = async (showId, characterId) => {
    try {
        const showCharacter = await db.any(`SELECT show_id, name, status, power_lvl, image FROM shows JOIN characters ON shows.id = characters.show_id WHERE shows.id = $1 AND characters.id = $2`, [showId, characterId])
        return showCharacter;
    } catch (e) {
        return e;
    }
}

const createCharacter = async (data) => {
  try {
    const newCharacter = await db.one(
      "INSERT INTO characters (title, image, category, release_date, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.title, data.image, data.category, data.release_date, data.rating]
    );
    return newShow;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllCharacters,
  allCharacterByShow,
  getCharacterById,
  getCharacterFromShowById,
};
