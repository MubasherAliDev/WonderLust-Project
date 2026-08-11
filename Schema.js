const Joi = require("joi")
module.exports.ListingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string()
      .min(3)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.min": "Title must be at least 3 characters long",
        "string.pattern.base": "Title must contain letters only!",
        "string.empty": "Title is required"
      }),
    description: Joi.string()
      .min(10)
      .required()
      .messages({
        "string.min": "Description must be at least 10 characters long",
        "string.empty": "Description is required"
      }),
    location: Joi.string()
      .min(3)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.min": "Location must be at least 3 characters long",
        "string.pattern.base": "Location must contain letters only!",
        "string.empty": "Location is required"
      }),
    country: Joi.string()
      .min(3)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.min": "Country must be at least 3 characters long",
        "string.pattern.base": "Country must contain letters only!",
        "string.empty": "Country is required"
      }),
        category: Joi.string().required(),
    price: Joi.number()
      .required()
      .min(1)
      .max(10000000)
      .messages({
        "number.base": "Price must be a number!",
        "number.min": "Price cannot be less than 1!",
        "number.max": "Price is too high!",
        "any.required": "Price is required"
      }),
    image: Joi.string().allow("", null)
  }).required()
});

module.exports.reviewSchema=Joi.object({
  review:Joi.object({
    rating:Joi.number().required().min(1).max(5),
    comment:Joi.string().required(),
  }).required(),
});