const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("WELCOME TO AMINExQUOTES! (BACKENDxEDITION)");
});

module.exports = router;
