import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .required(),

  email: Joi.string()
    .trim()
    .email()
    .max(100)
    .required(),

  subject: Joi.string()
    .trim()
    .max(100)
    .allow(""),

  message: Joi.string()
    .trim()
    .min(10)
    .max(1000)
    .required(),
});

export default contactSchema;