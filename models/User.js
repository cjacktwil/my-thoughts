const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
const ThoughtSchema = require('./Thought.js')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            //add email validation
        },
        thoughts: [
            // ThoughtSchema],
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
              }
          ],
        friends: [
            // UserSchema]
          {
                type: Schema.Types.ObjectId,
                ref: 'User'
              }
          ]
    },
    {
       toJSON: {
           virtuals: true,
           getters: true
       },
       id: false 
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;