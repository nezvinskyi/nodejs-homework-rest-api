const { Schema } = require('mongoose');

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
  },
  { timestamps: true },
);

module.exports = contactSchema;
