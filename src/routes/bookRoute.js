const express = require("express");

const router = express.Router();

const books = [];

// POST /books/
router.post("/", (req, res) => {
    // TODO 作成処理を書く
});

router.get("/search", (req, res) => {
    const params = req.query;

    const title = params.title;

    // TODO DBから取得する
    const result = books.filter((book) => {
        return book.title.includes(title);
    });

    res.json(result);
});

// router.post
// router.put
// router.delete

module.exports = router;