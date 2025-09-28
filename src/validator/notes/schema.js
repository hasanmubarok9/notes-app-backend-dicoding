const Joi = require('joi');

const NotePayloadSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required().allow(''),
  tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };
