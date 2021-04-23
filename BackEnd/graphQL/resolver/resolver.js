const Post = require('../../models/post');
const Category = require('../../models/category');

module.export = {
      // ! same name in QueryMutation line 37, schema.js
      posts: async () => {
            try {
                  // ? create a new post
                  const postFetched = await Post.find()
            return postFetched.map(eachPost => {
                  return {
                        //!!! not sure eachPost._doc what it means
                  ...eachPost._doc,
                  _id: eachPost.id,
                  }
            })
            }catch(err){
                  console.log("🚀 ~ file: resolver.js ~ line 18 ~ posts: ~ err", err)

            }
      },

            // ! same name in RootMutation line 37, schema.js
      createPost: async (args) => {
            // !!! args => input from front end
            try {
                  const { link, body } = args.link
                  const post = new Post({
                  link,
                  body
                  })
                  const newPost = await post.save()
                  return { ...newPost._doc, _id: newPost.id }
            } catch (error) {
                  throw error
            }
      },

      // ! same name in RootMutation line 37, schema.js
      createCategory: async () => {

      }
}