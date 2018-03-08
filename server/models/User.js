const mongoose = require('mongoose');
const encryption = require('../utility/encryption');
const propertyIsRequired = '{0} is required.';
const types = mongoose.Schema.Types;

let userSchema = mongoose.Schema({
  name: {
    type: types.String,
    required: propertyIsRequired.replace('{0}', 'Username'),
  },
  email: {
    type: types.String,
    required: propertyIsRequired.replace('{0}', 'Password')
  },
  salt: {
    type: types.String,
    required: true
  },
  password: {
    type: types.String,
    required: propertyIsRequired.replace('{0}', 'First name')
  },
  roles: [{ type: types.String }]
});

userSchema.method({
  authenticate: function (password) {
    let hashedPassword = encryption.generateHashedPassword(this.salt, password);

    if (hashedPassword === this.password) {
      return true;
    }

    return false;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.seedAdminUser = () => {
  User.find({ username: 'admin' }).then(users => {
    if (users.length === 0) {
      let salt = encryption.generateSalt();
      let hashedPass = encryption.generateHashedPassword(salt, 'Admin12');

      User.create({
        name: 'admin',
        email: 'admin@gmail.com',
        salt: salt,
        password: hashedPass,
        roles: ['Admin']
      });
    }
  });
};