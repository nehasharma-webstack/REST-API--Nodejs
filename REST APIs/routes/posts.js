const express = require("express");
const postController = require("../controllers/posts");
const router = express.Router();

router.get("/posts", postController.getPosts);
router.post("/posts", postController.addPost);

module.exports = router;
