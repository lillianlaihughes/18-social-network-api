# NoSQL Social Network API

## Description

Our challenge for this module was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The goal of this assignment was to further our understanding of how to build and structure APIs so we can handle data for applications effectively. We used Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Guidelines for using API routes:

- `/api/users`
  - `GET` all users
  - `GET` a single user by its `_id`
  - `POST` a new user (See example data for new user)
  - `PUT` to update a user by its `_id`
  - `DELETE` to remove a user by its `_id`
- `/api/users/:userId/friends/:friendId`
  - `POST` to add a new friend to a user's friend list
  - `DELETE` to remove a friend from a user's friend list
- `/api/thoughts`
  - `GET` to get all thoughts
  - `GET` to get a single thought by its `_id`
  - `POST` to create a new thought (See example data for new thought)
  - `PUT` to update a thought by its `_id`
  - `DELETE` to remove a thought by its `_id`
- `/api/thoughts/:thoughtId/reactions`
  - `POST` to create a reaction stored in a single thought's `reactions` array field
  - `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Resources

- [Express.js](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
