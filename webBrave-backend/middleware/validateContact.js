import contactSchema from "../validators/contactValidator.js";
 const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validate failed.",
      error: error.details.map((err) => err.message),
    });
  }

  next();
};

export default validateContact;