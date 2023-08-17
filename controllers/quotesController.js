const express = require("express")
const router = express.Router({ mergeParams: true });

const {
    allQuotes
} = require("../queries/quoteQueries")

router.get("/", async (req, res) => {
    const getAllQuotes = allQuotes(req.params.show_id);

    if (!getAllQuotes) {
        return res.status(500).json({Error: "Server Error. Please try again."})
    } else {
        return res.json(getAllQuotes)
    }
})

module.exports = router;