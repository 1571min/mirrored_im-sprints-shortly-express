'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
    },
    {
      hooks: {
        afterValidate: (data, options) => {
          var genRandomString = function (length) {
            return crypto
              .randomBytes(Math.ceil(length / 2))
              .toString('hex') /** convert to hexadecimal format */
              .slice(0, length); /** return required number of characters */
          };
          let secret = genRandomString(Math.floor(Math.random() * 100));
          const hashed = crypto
            .createHmac('sha256', secret)
            .update(data.password)
            .digest('hex');

          data.salt = secret;
          data.password = hashed;
          console.log(secret);
          console.log(hashed);
        },
      },
    }
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
