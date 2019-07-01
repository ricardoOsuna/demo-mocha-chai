/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const moment = require('moment');
module.exports.bootstrap = async function() {
  const custom = sails.config.custom;
  /***************************
   * FUNCTIONS TO VALIDATE DATA
   */
  global.validateStringLetters = (field, value, minLength = 1, maxLength = 200) => {
    const regExp = new RegExp(custom.regExps.letters);
    if (_.isUndefined(value)) {
      return `The ${field} is required`;
    } else if (!regExp.test(value)) {
      return `The ${field} is corrupted`;
    } else if (value.length < minLength || value.length > maxLength) {
      return `The ${field} must be between ${minLength} - ${maxLength} characters`;
    }
    return false;
  };

  global.validateEmail = (field, value, minLength = 16, maxLength = 35) => {
    const regExp = new RegExp(custom.regExps.email);
    if (_.isUndefined(value)) {
      return `The ${field} is required`;
    } else if (!regExp.test(value)) {
      return `The ${field} isn´t valid`;
    } else if (value.length < minLength || value.length > maxLength) {
      return `The ${field} must be between ${minLength} - ${maxLength} characters`;
    }
    return false;
  };

  global.validateDate = (field, value) => {
    const regExp = new RegExp(custom.regExps.date);
    if (_.isUndefined(value)) {
      return `The ${field} is required`;
    } else if (!regExp.test(value)) {
      return `The ${field} is corrupted`;
    } else if (!moment(value, 'YYYY-MM-DD').isValid()) {
      return `The ${field} isn´t valid`;
    }
    return false;
  };

  global.validatePhoneNumber = (field, value, phoneLength = 10) => {
    const regExp = new RegExp(custom.regExps.phoneNumber);
    if (_.isUndefined(value)) {
      return `The ${field} is required`;
    } else if (!regExp.test(value)) {
      return `The ${field} isn´t valid`;
    } else if (value.length !== phoneLength) {
      return `The ${field} must be has ${phoneLength} digits`;
    }
    return false;
  };

  global.validatePassword = (field, value, minLength = 8, maxLength = 20) => {
    const regExp = new RegExp(custom.regExps.password);
    if (_.isUndefined(value)) {
      return `The ${field} is required`;
    } else if (_.isEmpty(value)) {
      return `The ${field} is empty`;
    } else if (value.length < minLength || value.length > maxLength) {
      return `The ${field} must be between ${minLength} - ${maxLength} characters`;
    } else if (!regExp.test(value)) {
      return `The ${field} is corrupted`;
    }
    return false;
  };

  /***********************************
   * GLOBAL VARIABLES
   */
  global.moment = moment;
  global.custom = custom;
};

