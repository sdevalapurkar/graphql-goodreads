const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    rating: Float!
    numberOfReviews: Int!
    author: Author!
    reviews: [Review!]!
  }

  type Author {
    id: ID!
    name: String!
  }

  type Review {
    id: ID!
    postedBy: User!
    text: String!
  }

  type User {
    id: ID!
    name: String!
    booksRead: [Book!]!
  }

  type Query {
    book(id: ID!): Book
  }

  type Mutation {
    likeBook(
      bookId: ID!
      isLiked: Boolean!
    ): Boolean!
  }
`);

class Book {
  constructor(id, { title, rating, numberOfReviews, author, reviews }) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.numberOfReviews = numberOfReviews;
    this.author = author;
    this.reviews = reviews;
  }
}

class Author {
  constructor(id, { name }) {
    this.id = id;
    this.name = name;
  }
}

class Review {
  constructor(id, { postedBy, text }) {
    this.id = id;
    this.postedBy = postedBy;
    this.text = text;
  }
}

class User {
  constructor(id, { name, booksRead }) {
    this.id = id;
    this.name = name;
    this.booksRead = booksRead;
  }
}

// create fake DB to populate data in
const fakeBookDatabase = {};

// populate fake DB
const gary = new Author(1, { name: "gary paulsen" });
const shreyas = new User(1, { name: "shreyas" });
const reviewGood = new Review(1, { postedBy: shreyas, text: "This book was amazing, everyone should read it on goodreads" });
const reviewAvg = new Review(2, { postedBy: shreyas, text: "It was alright, not the greatest." });
const hatchet = new Book(1, { title: "hatchet", rating: 5, numberOfReviews: 1, author: gary, reviews: [reviewGood] });
const geronimoStilton = new Book(2, { title: "geronimo stilton goes to church", rating: 3, numberOfReviews: 0, author: "imaginary author", reviews: [reviewAvg] });

shreyas.booksRead = [hatchet, geronimoStilton];

fakeBookDatabase[1] = hatchet;
fakeBookDatabase[2] = geronimoStilton;

const root = {
  book: ({id}) => {
    return new Book(id, fakeBookDatabase[id]);
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});
