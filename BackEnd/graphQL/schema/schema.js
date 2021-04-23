const { buildSchema } = require("graphql")

module.exports = buildSchema(`

      type Post {
      _id: ID!
      link: String!
      }
      

      input PostInput {
            link: String!
      }





      type Category {
            _id: ID!
            name: String!
            posts: [Post!]
      }

      input CategoryInput {
            name: String!
      }



  type RootQuery {
    posts:[Post!]!
    category:[Category!]!


  }

  type RootMutation {
    createPost(post:PostInput): Post
    createCategory(post:PostInput): Post
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }


`)