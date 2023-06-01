const express = require("express");
const router = express.Router();
const {getAllBook,insertBook,getSingleBook,updateBook,deleteBook}=require("../controllers/books");

router.get("/books",getAllBook);

router.post("/books",insertBook );

router.get("/books/:id",getSingleBook );

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

module.exports = router;
