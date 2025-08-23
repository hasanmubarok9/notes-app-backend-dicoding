const Joi = require('joi');

const NotePayloadSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().allow(''),
  tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };
