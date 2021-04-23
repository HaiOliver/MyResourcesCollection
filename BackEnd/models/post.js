const mongoose = require("mongoose")

const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    link: {
      type: String,
      required: true,
    },

    category_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Article", artcleSchema)