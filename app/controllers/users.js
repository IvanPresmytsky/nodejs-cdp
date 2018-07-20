const Users = require('../models/user');

exports.getAllUsers = (req, res) => {
  Users.find({})
    .then(data => res.json(data))
    .catch(err => res.send({ status: 500, error: err }));
};

exports.getUser = (req, res) => {
    const userId = req.params.id;
    Users.findOne({ id: userId })
      .then(user => res.json(user))
      .catch(err => res.send({ status: 500, error: err }));
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  Users.deleteOne({ id: userId })
    .then((result) => {
      console.log(`deleted ${result.n} documents`);
      res.end();
    })
    .catch(err => res.send({ status: 500, error: err }));
}