const Joi = require('joi');

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  phone: Joi.string(),
}).min(1);

module.exports = updateContactSchema;
