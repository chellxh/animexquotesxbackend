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
    const showCharacter = await db.any(
      `SELECT show_id, name, status, power_lvl, characters.image FROM shows JOIN characters ON shows.id = characters.show_id WHERE shows.id = $1 AND characters.id = $2`,
      [showId, characterId]
    );
    return showCharacter;
  } catch (e) {
    return e;
  }
};

const createCharacter = async (data) => {
  try {
    const newCharacter = await db.one(
      "INSERT INTO characters (name, status, power_lvl, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.name, data.status, data.power_lvl, data.image]
    );
    return newCharacter;
  } catch (e) {
    return e;
  }
};
const deleteCharacterById = async (id) => {
  try {
    const deletedCharacter = await db.any(
      `DELETE FROM characters WHERE id = $1 RETURNING *`,
      id
    );
    return deletedCharacter;
  } catch (e) {
    return e;
  }
};

const updateCharacterById = async (id, character) => {
  try {
    const updatedCharacter = await db.any(
      "UPDATE characters SET show_id = $1, name = $2, status = $3, power_lvl = $4, image = $5 WHERE id = $6 RETURNING *",
      [
        character.show_id,
        character.name,
        character.status,
        character.power_lvl,
        character.image,
        id,
      ]
    );
    return updatedCharacter;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  deleteCharacterById,
  updateCharacterById,
  allCharacterByShow,
  getCharacterFromShowById,
};
