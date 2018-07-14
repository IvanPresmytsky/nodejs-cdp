const { User } = require('../../models');

const getUser = (req, res) => {
  return User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `user with id ${req.params.id} not found`,
        });
      }
      return res.status(200).send(user);
    })
    .catch(err => res.status(400).send(err));
};

module.exports = getUser;
