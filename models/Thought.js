const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Wait, one of your Thoughts is required!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  // the author of the Thought is a username
  username: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  reactions: [
    {
      //       **Reaction** (SCHEMA ONLY)

      // - `reactionId`

      //   - Use Mongoose's ObjectId data type
      //   - Default value is set to a new ObjectId

      reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
