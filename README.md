
# ANDJO

An web application for learning foreign languages through flashcards and quizzes. Generating flashcards and quizzes by using AI.

# Dependencies
- Spring Boot DevTools
- Lombok - reduces boilerplate code
- Spring Web - HTTP client
- Thymeleaf - template engine
- Spring Data JPA - API for connecting and executing queries on a database
- H2 Database
- Validation

## API Reference

#### Generate a flashcard

```http
  POST /api/generate/flashcard
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `word`    | `string` | **Required**. Word         |


## Deployment

To deploy this project run in project's directory

```bash
  ./mvnw spring-boot:run
```

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Features

## Leitner system
https://en.wikipedia.org/wiki/Leitner_system

The Leitner system is a widely used method of efficiently using flashcards that was proposed by the German science journalist Sebastian Leitner in 1972. It is a simple implementation of the principle of spaced repetition, where cards are reviewed at increasing intervals.

Method
In this method, flashcards are sorted into groups according to how well the learner knows each one in Leitner's learning box. The learners try to recall the solution written on a flashcard. If they succeed, they send the card to the next group. If they fail, they send it back to the first group. Each succeeding group has a longer period before the learner is required to revisit the cards. In Leitner's original method, published in his book So lernt man Lernen (How to learn to learn), the schedule of repetition was governed by the size of the partitions in the learning box. These were 1, 2, 5, 8, and 14 cm. Only when a partition became full was the learner to review some of the cards it contained, moving them forward or back depending on whether they remembered them.

![In the Leitner system, correctly answered cards are advanced to the next, less frequent box, while incorrectly answered cards return to the first box.](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Leitner_system_alternative.svg/330px-Leitner_system_alternative.svg.png)
