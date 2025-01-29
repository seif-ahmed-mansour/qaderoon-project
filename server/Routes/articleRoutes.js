const express = require("express");
const router = express.Router();
const articleController = require("../Controllers/articleController");

router.post("/", articleController.addArticle);
router.get("/", articleController.getArticles);
router.get("/:id", articleController.getArticleById);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
