const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  let characterById = null;

  data.forEach((character) => {
    if (character.id === id) {
      characterById = character;
    }
  });
  if (Object.keys(characterById).length === 0) {
    res.send("Sorry, Character not found!");
  } else {
    res.send(characterById);
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
