/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate user params
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {
  let message = validateStringLetters('First Name', req.body.firstName, 5, 100);
  if (message) {
    return res.badRequest(null, { message });
  }

  message = validateStringLetters('Last Name', req.body.lastName, 5, 100);
  if (message) {
    return res.badRequest(null, { message });
  }

  message = validateDate('Birthdate', req.body.birthdate);
  if (message) {
    return res.badRequest(null, { message });
  }

  message = validateEmail('Email', req.body.email, 16, 35);
  if (message) {
    return res.badRequest(null, { message });
  }

  message = validatePassword('Password', req.body.password, 8, 20);
  if (message) {
    return res.badRequest(null, { message });
  }

  message = validatePhoneNumber('Phone', req.body.phone, 10);
  if (message) {
    return res.badRequest(null, { message });
  }

  return next();
};
