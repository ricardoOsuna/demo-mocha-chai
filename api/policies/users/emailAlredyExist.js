/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate if user exist
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {

  if (!_.isUndefined(req.body.email)) {
    const user = await Users.findOne({
      email: req.body.email
    });

    if (user) {
      return res.badRequest(null, {
        message: 'This email is alredy in use by some user'
      });
    }
  }

  return next();
};
