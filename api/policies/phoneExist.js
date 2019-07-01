/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate if phone exist
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {

  if (!_.isUndefined(req.body.id) || !_.isUndefined(req.body.phoneId)) {
    const phone = await Phones.findOne(req.body.id || req.body.phoneId);
    if (!phone) {
      return res.notFound(null, {
        message: 'The phone doesn´t exist'
      });
    }
    req.phone = phone;
  }

  return next();
};
