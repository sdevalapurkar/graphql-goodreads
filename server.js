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
    booksLiked: [Book!]!
    booksWantToRead: [Book!]
  }

  type Query {
    book(id: ID!): Book
    user(id: ID!): User
  }

  type Mutation {
    likeBook(
      userId: ID!
      bookId: ID!
    ): User!
    wantToReadBook(
      userId: ID!
      bookId: ID!
    ): User!
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
  constructor(id, { name, booksRead, booksLiked, booksWantToRead }) {
    this.id = id;
    this.name = name;
    this.booksRead = booksRead;
    this.booksLiked = booksLiked;
    this.booksWantToRead = booksWantToRead;
  }
}

// create fake DB to populate data in
const fakeBookDatabase = {};
const fakeUserDatabase = {};

// populate fake DB
const gary = new Author(1, { name: "gary paulsen" });
const imaginary = new Author(2, { name: "imaginary man" });
const shreyas = new User(1, { name: "shreyas" });
const reviewGood = new Review(1, { postedBy: shreyas, text: "This book was amazing, everyone should read it on goodreads" });
const reviewAvg = new Review(2, { postedBy: shreyas, text: "It was alright, not the greatest." });
const hatchet = new Book(1, { title: "hatchet", rating: 5, numberOfReviews: 1, author: gary, reviews: [reviewGood] });
const geronimoStilton = new Book(2, { title: "geronimo stilton goes to church", rating: 3, numberOfReviews: 0, author: imaginary, reviews: [reviewAvg] });

shreyas.booksRead = [hatchet, geronimoStilton];
shreyas.booksLiked = [hatchet];
shreyas.booksWantToRead = [];

fakeBookDatabase[1] = hatchet;
fakeBookDatabase[2] = geronimoStilton;

fakeUserDatabase[1] = shreyas;

const root = {
  book: ({id}) => {
    if (!fakeBookDatabase[id]) {
      throw new Error('no book exists with id ' + id);
    }

    return new Book(id, fakeBookDatabase[id]);
  },
  user: ({id}) => {
    if (!fakeUserDatabase[id]) {
      throw new Error('no user exists with id ' + id);
    }

    return new User(id, fakeUserDatabase[id]);
  },
  likeBook: ({ userId, bookId }) => {
    if (!fakeBookDatabase[bookId]) {
      throw new Error('no book exists with id ' + bookId);
    }

    if (!fakeUserDatabase[userId]) {
      throw new Error('no user exists with id ' + userId);
    }

    const user = fakeUserDatabase[userId];
    let booksLikedByUser = user.booksLiked;
    let updatedBooksLikedByUser = [];
    let isBookAlreadyLiked = false;

    booksLikedByUser.forEach(book => {
      if (book.id == bookId) {
        isBookAlreadyLiked = true;

        let index = updatedBooksLikedByUser.indexOf(book);

        if (index > -1) {
          updatedBooksLikedByUser.splice(index, 1);
        }

        return;
      } else {
        updatedBooksLikedByUser.push(book);
      }
    });

    if (!isBookAlreadyLiked) {
      updatedBooksLikedByUser.push(fakeBookDatabase[bookId]);
    }

    user.booksLiked = updatedBooksLikedByUser;

    return user;
  },
  wantToReadBook: ({ userId, bookId }) => {
    if (!fakeBookDatabase[bookId]) {
      throw new Error('no book exists with id ' + bookId);
    }

    if (!fakeUserDatabase[userId]) {
      throw new Error('no user exists with id ' + userId);
    }

    const user = fakeUserDatabase[userId];

    user.booksWantToRead.push(fakeBookDatabase[bookId]);

    return user;
  }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log("Running shreyas' GraphQL API server at localhost:4000/graphql");
});
