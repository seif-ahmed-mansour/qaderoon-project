const Article = require("../Models/Article");
const upload = require("../Config/Multer");
const fs = require("fs");
const path = require("path");

exports.addArticle = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    try {
      const { title, author, content } = req.body;
      if (!title || !content || !author?.name || !author?.title || !req.file) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const newArticle = new Article({
        title,
        content,
        image: req.file.filename,
        author,
      });

      await newArticle.save();
      res
        .status(201)
        .json({ message: "Article added successfully", data: newArticle });
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while adding the article",
        error: error.message,
      });
    }
  });
};

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ data: articles });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching articles",
      error: error.message,
    });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({ data: article });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the article",
      error: error.message,
    });
  }
};

exports.updateArticle = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const { title, author, content } = req.body;
      const article = await Article.findById(id);

      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }

      if (req.file) {
        const oldFilePath = path.join(
          __dirname,
          "../../Public/imgs",
          article.image
        );
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
        article.image = req.file.filename;
      }

      article.title = title || article.title;
      article.content = content || article.content;
      article.author = { ...article.author, ...author };

      await article.save();
      res
        .status(200)
        .json({ message: "Article updated successfully", data: article });
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while updating the article",
        error: error.message,
      });
    }
  });
};

exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByIdAndDelete(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    const filePath = path.join(__dirname, "../../Public/imgs", article.image);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the article",
      error: error.message,
    });
  }
};
