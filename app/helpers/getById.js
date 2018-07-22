const getById = (model) => (req, res) => {
  const itemId = req.params.id;
  model.findOne({ id: itemId })
    .then(item => res.json(item))
    .catch(err => res.send({ status: 500, error: err }));
};

module.exports = getById;
