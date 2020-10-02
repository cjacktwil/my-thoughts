const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

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
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
              }
          ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
              }
          ]
    }
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;