/**
 * Create a new user
 *
 *
 * @param {*} req
 * @param {*} res
 */

module.exports = async (req, res) => {
  const data = _.pick(req.body, [
    'firstName',
    'lastName',
    'birthdate',
    'email',
    'password',
  ]);

  let user;
  try {
    user = await Users.create(data).fetch();
  } catch(e) {
    console.log(e);
    return res.negotiate(e);
  }

  try {
    await Phones.create({
      name: req.body.firstName,
      phone: req.body.phone,
      userId: user.id,
      main: true
    });
  } catch(e) {
    console.log(e);
    await Users.destroy(user.id);
    return res.negotiate(e);
  }

  return res.ok();
};
