const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getAllCharacters,
  allCharacterByShow,
  getCharacterById,
  getCharacterFromShowById,
} = require("../queries/characterQueries");

router.get("/", async (req, res) => {
  const getCharacters = await getAllCharacters();

  if (!Array.isArray(getCharacters)) {
    return res.status(500).json({ Error: "Server Error. Please try again." });
  } else {
    return res.json(getCharacters);
  }
});

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

router.get("/list/:id", async (req, res) => {
  const { id } = req.params;
  const characterInShow = await getCharacterFromShowById(id);
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

router.get("/:name", (req, res) => {
  let { name } = req.params;
  let characterByName = null;

  data.forEach((character) => {
    if (character.name.includes(name)) {
      characterByName = character;
    }
  });
  if (Object.keys(characterByName).length === 0) {
    res.send("Sorry, Character not found!");
  } else {
    res.send(characterByName);
  }
}); // MESSING UP

module.exports = router;
