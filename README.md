# graphql-goodreads
Demo GraphQL service for serving up data about your favourite books. Includes basic types, queries, a resolver, and a mutation to get book data and like a book for a given user. Built for a lunch and learn presentation at NTT Data Services. Additional projects include:

- An Apollo GraphQL service which consumes an API to show how GraphQL and RESTful services can live in harmony.
- A Java Springboot implementation of the GraphQL goodreads service.

## Running Locally

In order to run the Node.js service(s) locally:

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

### Get Request for a Book Resource
<img width="804" alt="getrequestbook" src="https://user-images.githubusercontent.com/28017034/80153152-e059c680-8571-11ea-9a31-0d6789b14739.PNG">

### Update List of Books User Likes
<img width="740" alt="postrequestlikebook" src="https://user-images.githubusercontent.com/28017034/80153163-e51e7a80-8571-11ea-80be-10201c6c6f03.PNG">

### Result of Update
<img width="739" alt="resultlikebook" src="https://user-images.githubusercontent.com/28017034/80153166-e780d480-8571-11ea-9cc3-3588a03bddf0.PNG">

### Updated Get Request for a Book Resource
<img width="847" alt="getrequestafterpostreq" src="https://user-images.githubusercontent.com/28017034/80153167-e94a9800-8571-11ea-9958-11cca5bfed83.PNG">
