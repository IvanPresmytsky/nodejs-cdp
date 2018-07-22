const getAll = (model) => (req, res) => {
  model.find({})
    .then(data => res.json(data))
    .catch(err => res.send({ status: 500, error: err }));
};

module.exports = getAll;
