const mongoose = require("mongoose")

const Schema = mongoose.Schema

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    posts:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
      }
    ]
}
)

module.exports = mongoose.model("Category", categorySchema)