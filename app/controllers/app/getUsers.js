const { User } = require('../../models');

const getUsers = (req, res) => {
  return User
    .findAll()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(404).send(err));
};

module.exports = getUsers;
