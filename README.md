# graphql-goodreads
Demo GraphQL service for serving up data about your favourite books. Includes basic types, queries, a resolver, and a mutation to get book data and like a book for a given user. Built for a lunch and learn presentation at NTT Data Services. Additional projects include:

- An Apollo GraphQL service which consumes an API to show how GraphQL and RESTful services can live in harmony.
- A Java Springboot implementation of the GraphQL goodreads service.

## Running Locally

In order to run the service(s) locally:

1. Clone the repository
```bash
git clone https://github.com/sdevalapurkar/graphql-goodreads.git
```

2. Install dependencies
```bash
npm install
```

3. Start up the server of your choice

To run the base server:
```bash
npm run graphql
```

To run the Apollo server:
```bash
npm run apollo
```

To run the Apollo server with a full fake REST API:
```bash
npm start
```

To run the Java Springboot server:
```bash
cd java-springboot
gradle bootRun
```
