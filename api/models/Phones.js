/**
 * Phones.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    phone: {
      type: 'number',
      unique: true,
      required: true,
    },
    main: {
      type: 'boolean',
      defaultsTo: false,
    },

    // relations
    userId: {
      model: 'Users',
      required: true
    }
  },

};
