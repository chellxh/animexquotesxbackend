// SHOWS INPUT VALIDATIONS
const validateShowTitle = (req, res, next) => {
  if (!req.body.title) {
    return res
      .status(400)
      .json({ Error: "Show title is required to continue!" });
  } else {
    next();
  }
};

const validateImage = (req, res, next) => {
  if (!req.body.image) {
    return res
      .status(400)
      .json({ Error: "Image URL is required to continue!" });
  } else if (
    req.body.image.substring(0, 7) === "http://" ||
    req.body.image.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res.status(400).json({
      error: "Please start your image URL with http:// or https://",
    });
  }
};

// CHARACTER INPUT VALIDATIONS
const validateCharacterName = (req, res, next) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ Error: "Character name is required to continue!" });
  } else {
    next();
  }
};

// QUOTE INPUT VALIDATIONS
const validateQuote = (req, res, next) => {
  if (!req.body.quote) {
    return res.status(400).json({ Error: "A quote is required to continue!" });
  } else {
    next();
  }
};

module.exports = {
  validateShowTitle,
  validateImage,
  validateCharacterName,
  validateQuote,
};
