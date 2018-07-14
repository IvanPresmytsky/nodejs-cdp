const { User } = require('../../models');

const importUsers = (user) => {
  return User
    .findOrCreate({
      where: { id: user.id },
      defaults: user,
    });
};

module.exports = importUsers;
