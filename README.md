# graphql-goodreads
Demo GraphQL service for serving up data about your favourite books. Includes basic types, queries, a resolver, and a mutation to get book data and like a book for a given user. Built for a lunch and learn presentation at NTT Data Services. Additional projects include:

- An Apollo GraphQL service which consumes an API to show how GraphQL and RESTful services can live in harmony.
- A Java Springboot implementation of the GraphQL goodreads service.

### Queries
<img width="1275" alt="Screen Shot 2020-05-26 at 4 21 41 PM" src="https://user-images.githubusercontent.com/28017034/83057962-7a4ade00-a00c-11ea-90b5-f27b3c293ed4.png">
<img width="1264" alt="Screen Shot 2020-05-26 at 4 28 43 PM" src="https://user-images.githubusercontent.com/28017034/83057965-7c14a180-a00c-11ea-9e19-5cedae0a2c32.png">

### Mutations
<img width="1260" alt="Screen Shot 2020-05-27 at 11 25 57 AM" src="https://user-images.githubusercontent.com/28017034/83058212-e1689280-a00c-11ea-8e8c-922e740b650d.png">
<img width="1258" alt="Screen Shot 2020-05-27 at 11 28 15 AM" src="https://user-images.githubusercontent.com/28017034/83058412-30aec300-a00d-11ea-85cb-e6def3c2684f.png">

### Schema
<img width="628" alt="Screen Shot 2020-05-26 at 4 29 00 PM" src="https://user-images.githubusercontent.com/28017034/83057969-7d45ce80-a00c-11ea-9804-1244c9a12d83.png">

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

## Additional Resources
Here is a small list of some other useful tools and resources for learning that I believe could be beneficial.

#### GraphQL Playground Chrome Extension
https://chrome.google.com/webstore/detail/graphql-playground-for-ch/kjhjcgclphafojaeeickcokfbhlegecd?hl=en

#### GraphQL Java and Springboot
https://www.graphql-java.com/tutorials/getting-started-with-spring-boot/

#### Learn Basic GraphQL and Apollo
https://graphql.org/learn/queries/
https://www.apollographql.com/docs/tutorial/introduction/

#### Apollo Engine
https://engine.apollographql.com/login
