package com.graphql.java.goodreads;

import com.google.common.collect.ImmutableMap;
import graphql.schema.DataFetcher;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Component
public class GraphQLDataFetchers {

    private static List<Map<String, String>> books = Arrays.asList(
            ImmutableMap.of("id", "book-1",
                    "title", "Harry Potter and the Philosopher's Stone",
                    "rating", "4.5",
                    "numberOfReviews", "223",
                    "authorId", "author-1"),
            ImmutableMap.of("id", "book-2",
                    "title", "How to be successful",
                    "rating", "2.5",
                    "numberOfReviews", "23",
                    "authorId", "author-2")
    );

    private static List<Map<String, String>> authors = Arrays.asList(
            ImmutableMap.of("id", "author-1",
                    "name", "JK Rowling"),
            ImmutableMap.of("id", "author-2",
                    "name", "Joanne Murray")
    );

    public DataFetcher getBookDataFetcher() {
        return dataFetchingEnvironment -> {
            String bookId = dataFetchingEnvironment.getArgument("id");
            return books
                    .stream()
                    .filter(book -> book.get("id").equals(bookId))
                    .findFirst()
                    .orElse(null);
        };
    }

    public DataFetcher getAuthorDataFetcher() {
        return dataFetchingEnvironment -> {
            Map<String, String> book = dataFetchingEnvironment.getSource();
            String authorId = book.get("authorId");
            return authors
                    .stream()
                    .filter(author -> author.get("id").equals(authorId))
                    .findFirst()
                    .orElse(null);
        };
    }
}
