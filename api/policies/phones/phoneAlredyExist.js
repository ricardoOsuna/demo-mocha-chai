/**
 * create.js
 *
 * @module      :: Policy
 * @description :: Simple policy to validate if user exist
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = async (req, res, next) => {

  if (!_.isUndefined(req.body.phone)) {
    const phone = await Phones.findOne({
      phone: req.body.phone
    });

    if (phone) {
      return res.badRequest(null, {
        message: 'This phone is alredy in use by some user'
      });
    }
  }

  return next();
};
