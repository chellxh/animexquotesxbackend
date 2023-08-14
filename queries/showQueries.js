const getAllShows = async () => {
  let allShows = await db.any("SELECT * FROM shows");
  return allShows;
};

module.exports = {
  getAllShows,
};
