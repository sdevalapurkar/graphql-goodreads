const fetch = require("node-fetch");

const resolvers = {
    Query: {
        books: (_1, _2, { restUrl }) =>
            fetch(`${restUrl}/books`)
                .then(res => res.json()),
        book: (_, { bookId }, { restUrl }) =>
            fetch(`${restUrl}/books/${encodeURIComponent(bookId)}`)
                .then(res => res.json())
                .then(json => {
                    let result = json;
                    return fetch(json.author).then(response => {
                        result = {...result, author: response.json()}
                        return result;
                    })
                }),
        users: (_1, _2, { restUrl }) =>
            fetch(`${restUrl}/users`)
                .then(res => res.json()),
        user: (_, { userId }, { restUrl }) =>
            fetch(`${restUrl}/users/${encodeURIComponent(userId)}`)
                .then(res => res.json()),
        author: (_, { authorId }, { restUrl }) =>
            fetch(`${restUrl}/authors/${encodeURIComponent(authorId)}`)
                .then(res => res.json())
    }
}

module.exports = resolvers;
