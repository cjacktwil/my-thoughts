const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
// const { truncate } = require('fs');

const ReactionSchema = new Schema(
    {
        reactionId: {
            //Use Mongoose's ObjectId data type
            //Default value is set to a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            //280 character maximum
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            //Set default value to the current timestamp
            //Use moment in a getter method to format the timestamp on query
        }
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //Must be between 1 and 280 characters
        },
        createdAt: {
            type: Date,
            //Set default value to the current timestamp
            //Use moment in a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            //Array of nested documents created with the reactionSchema
        }
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;