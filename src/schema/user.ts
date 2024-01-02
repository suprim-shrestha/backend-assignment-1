import Joi from "joi";

export const getCreateUserSchema = Joi.object({
  username: Joi.string().required().min(4).messages({
    "any.required": "Username is required",
    "string.empty": "Username cannot be empty",
    "string.min": "Username should have at least 4 characters",
  }),
  password: Joi.string().required().min(8).messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
    "string.min": "Password should have at least 8 characters",
  }),
});
