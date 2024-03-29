const { gql } = require("apollo-server");

const types = gql`
    type Query {
        "Books in our system"
        books: [Book]
        "A book in our system"
        book(bookId: ID): Book
        "Users of our system"
        users: [User]
        "A specific user in our system"
        user(userId: ID): User
        "A specific author"
        author(authorId: ID): Author
    }

    type Book {
        id: ID!,
        title: String!
        rating: Float!
        numberOfReviews: Int!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
    }

    type User {
        id: ID!
        name: String!
        booksLiked: [Book]
    }
`;

module.exports = types;
