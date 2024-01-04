import Joi from "joi";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../constants/pagination";

export const getCreateUserSchema = Joi.object({
  username: Joi.string().required().min(4).messages({
    "any.required": "Username is required",
    "string.empty": "Username cannot be empty",
    "string.min": "Username should have at least 4 characters",
    "string.base": "Username should be string",
  }),
  password: Joi.string().required().min(8).messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
    "string.min": "Password should have at least 8 characters",
    "string.base": "Password should be string",
  }),
});

export const getUserSchema = Joi.object({
  page: Joi.number().integer().min(1).default(DEFAULT_PAGE),

  size: Joi.number().integer().min(1).max(40).default(DEFAULT_PAGE_SIZE),

  username: Joi.string().min(3).default(""),
});
