const { Schema, SchemaTypes } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'The name is required'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true },
);

module.exports = contactSchema;
