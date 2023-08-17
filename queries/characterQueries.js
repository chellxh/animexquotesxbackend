const db = require("../db/dbConfig");

const getAllCharacters = async () => {
    try {
        const allCharacters = await db.any("SELECT * FROM characters");
        return allCharacters;
    } catch (e) {
        return e;
}
}

module.exports = {
    getAllCharacters,
}