const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/userController.js');

// /api/users --> `GET` all users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId --> `GET` a single user by its `_id` 
// STILL NEED TODO: and populated thought and friend data
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// STILL NEED TODO:
// - `POST` a new user:
// - `PUT` to update a user by its `_id`
// - `DELETE` to remove user by its `_id`
// **`/api/users/:userId/friends/:friendId`**

// - `POST` to add a new friend to a user's friend list

// - `DELETE` to remove a friend from a user's friend list

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
