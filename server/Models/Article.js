const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @typedef {Object} Author
 * @property {string} id - ID of the author.
 * @property {string} name - Name of the author.
 * @property {string} title - Title or role of the author.
 * @property {string} image - Image of the author.
 */

/**
 * @typedef {Object} Article
 * @property {string} id - Unique identifier for the post.
 * @property {string} title - Title of the post.
 * @property {Author} author - Details about the author.
 * @property {string} content - Array of paragraphs representing the post content.
 * @property {string} image - Image with the article.
 */

/**
 * Represents an Article Schema for MongoDB.
 */
const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: AuthorSchema,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
