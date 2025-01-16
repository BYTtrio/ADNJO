
# ANDJO

A web application for learning foreign languages through flashcards and quizzes. Generating flashcards and quizzes by using AI.

# Dependencies
- Spring Boot DevTools
- Lombok - reduces boilerplate code
- Spring Web - HTTP client
- Spring Data JPA - API for connecting and executing queries on a database
- H2 Database
- Validation
- Swagger

# Setup

To set up this project, run the following commands in the project's directory:

### Server Backend

```bash
  ./mvnw spring-boot:run
```

### Frontend Client Application

```bash
  cd .\frontend\
  python app.py
  npm run dev
```

# API Documentation
## Base URL

The API is accessible at:

```
http://localhost:8080
```

---

### Flashcards

#### Get All Flashcards

```http
  GET /api/flashcards
```

**Responses**

- `200 OK`: Returns an array of flashcards.

---

#### Create Flashcards

```http
  POST /api/flashcards
```

**Request Body**

| Parameter    | Type   | Description                  |
| :----------- | :----- | :--------------------------- |
| `flashcards` | `array` | **Required**. Array of flashcards to create |

**Responses**

- `200 OK`: Returns an array of the created flashcards.

---

#### Update a Flashcard

```http
  PUT /api/flashcards
```

**Request Body**

| Parameter     | Type     | Description                   |
| :------------ | :------- | :---------------------------- |
| `flashcard`   | `object` | **Required**. The flashcard to update |

**Responses**

- `200 OK`: Returns the updated flashcard.

---

#### Get Flashcard By ID

```http
  GET /api/flashcards/{id}
```

**Path Parameters**

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `string` | **Required**. Flashcard ID  |

**Responses**

- `200 OK`: Returns the flashcard.

---

#### Delete Flashcard

```http
  DELETE /api/flashcards/{id}
```

**Path Parameters**

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `string` | **Required**. Flashcard ID  |

**Responses**

- `200 OK`: Flashcard deleted successfully.

---

### Flashcard Sets

#### Get All Flashcard Sets

```http
  GET /api/flashcard-sets
```

**Responses**

- `200 OK`: Returns an array of flashcard sets.

---

#### Create Flashcard Set

```http
  POST /api/flashcard-sets
```

**Request Body**

| Parameter         | Type     | Description                  |
| :---------------- | :------- | :--------------------------- |
| `flashcardSet`    | `object` | **Required**. Flashcard set details |

**Responses**

- `200 OK`: Returns the created flashcard set.

---

#### Update Flashcard Set

```http
  PUT /api/flashcard-sets/{id}
```

**Path Parameters**

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. Flashcard set ID   |

**Request Body**

| Parameter         | Type     | Description                  |
| :---------------- | :------- | :--------------------------- |
| `flashcardSet`    | `object` | **Required**. Flashcard set details |

**Responses**

- `200 OK`: Returns the updated flashcard set.

---

#### Delete Flashcard Set

```http
  DELETE /api/flashcard-sets/{id}
```

**Path Parameters**

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. Flashcard set ID   |

**Responses**

- `200 OK`: Flashcard set deleted successfully.

---

#### Get All Flashcards From Set

```http
  GET /api/flashcards/set/{id}
```

**Path Parameters**

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. Flashcard set ID   |

**Responses**

- `200 OK`: Returns an array of flashcards from the set.

---

### Categories

#### Get All Categories

```http
  GET /api/categories
```

**Responses**

- `200 OK`: Returns an array of categories.

---

#### Create Category

```http
  POST /api/categories
```

**Request Body**

| Parameter   | Type     | Description                 |
| :---------- | :------- | :-------------------------- |
| `category`  | `object` | **Required**. Category details |

**Responses**

- `200 OK`: Returns the created category.

---

#### Update Category

```http
  PUT /api/categories/{id}
```

**Path Parameters**

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Category ID  |

**Request Body**

| Parameter   | Type     | Description                 |
| :---------- | :------- | :-------------------------- |
| `category`  | `object` | **Required**. Category details |

**Responses**

- `200 OK`: Returns the updated category.

---

#### Delete Category

```http
  DELETE /api/categories/{id}
```

**Path Parameters**

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Category ID  |

**Responses**

- `200 OK`: Category deleted successfully.

---

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
In this method, flashcards are sorted into groups according to how well the learner knows each one in Leitner's learning box. The learners try to recall the solution written on a flashcard. If they succeed, they send the card to the next group. If they fail, they send it back to the first group. Each succeeding group has a longer period before the learner is required to revisit the cards. In Leitner's original method, published in his book "So lernt man Lernen" ("How to learn to learn"), the schedule of repetition was governed by the size of the partitions in the learning box. These were 1, 2, 5, 8, and 14 cm. Only when a partition became full was the learner to review some of the cards it contained, moving them forward or back depending on whether they remembered them.

![In the Leitner system, correctly answered cards are advanced to the next, less frequent box, while incorrectly answered cards return to the first box.](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Leitner_system_alternative.svg/330px-Leitner_system_alternative.svg.png)
