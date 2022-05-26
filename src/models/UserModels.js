import Joi from 'joi';
import { isValidPassword, isValidObjectId } from '../helpers/validation-helpers';

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required().custom(isValidPassword),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user'),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(isValidObjectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(isValidObjectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email({ tlds: { allow: false } }),
      password: Joi.string().custom(isValidPassword),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(isValidObjectId),
  }),
};

export {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
