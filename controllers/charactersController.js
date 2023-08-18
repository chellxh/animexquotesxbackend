const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  deleteCharacterById,
  updateCharacterById,
  getCharacterFromShowById,
  allCharacterByShow,
} = require("../queries/characterQueries");

// /CHARACTERS ROUTE
router.get("/", async (req, res) => {
  const getCharacters = await getAllCharacters();

  if (!Array.isArray(getCharacters)) {
    return res.status(500).json({ Error: "Server Error. Please try again." });
  } else {
    return res.json(getCharacters);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const character = await getCharacterById(id);

  if (character.length === 0) {
    return res.status(404).json({
      Error: "GET request unsuccessful",
      message:
        "Character Not Found! Please try again or enter a different character id.",
    });
  } else {
    return res.json(character[0]);
  }
});
router.post("/", async (req, res) => {
  const newCharacter = await createCharacter(req.body);
  return res.json(newCharacter);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCharacter = await deleteCharacterById(id);

  if (deletedCharacter.length === 0) {
    return res.status(404).json({
      Error: "DELETE request unsuccessful.",
      message:
        "Character Not Found! Please try again or enter a different character id.",
    });
  } else {
    return res.json(deletedCharacter[0]);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCharacter = await updateCharacterById(id, req.body);

  console.log(updatedCharacter);
  if (updatedCharacter.length === 0) {
    return res.status(404).json({
      Error: "PUT request unsuccessful.",
      message:
        "Character Not Found! Please try again or enter a different character id.",
    });
  } else {
    return res.json(updatedCharacter[0]);
  }
});

// /SHOWS/SHOWID/CHARACTERS ROUTES

router.get("/list", async (req, res) => {
  const { showId } = req.params;
  const allCharactersInShow = await allCharacterByShow(showId);
  if (allCharactersInShow.length === 0) {
    return res.status(404).json({
      Error: "GET request unsuccessful",
      message:
        "Characters Not Found! Please check the show id you have entered and try again.",
    });
  } else {
    return res.json(allCharactersInShow);
  }
});

router.get("/list/:id", async (req, res) => {
  const { showId, id } = req.params;
  const characterInShow = await getCharacterFromShowById(showId, id);
  console.log(characterInShow);
  if (characterInShow.length === 0) {
    return res.status(404).json({
      Error: "GET request unsuccessful",
      message:
        "Character Not Found! Please try again or enter a different show id.",
    });
  } else {
    return res.json(characterInShow[0]);
  }
});

module.exports = router;
