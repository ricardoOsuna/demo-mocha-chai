/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    lastName: {
      type: 'string',
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    birthdate: {
      type: 'string',
      columnType: 'datetime',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 16,
      maxLength: 35,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 20,
    },

    // Relations
    phones: {
      collection: 'Phones',
      via: 'userId',
    }
  },

};

