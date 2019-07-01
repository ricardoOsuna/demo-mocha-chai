/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate if user exist
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {

  if (!_.isUndefined(req.body.id) || !_.isUndefined(req.body.userId)) {
    const user = await Users.findOne(req.body.id || req.body.userId);
    if (!user) {
      return res.notFound(null, {
        message: 'The user doesn´t exist'
      });
    }
    req.user = user;
  }

  return next();
};
