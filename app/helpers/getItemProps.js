const getItemProps = (model, prop) => (req, res) => {
  const itemId = req.params.id;
  model.findOne({ id: itemId })
    .then(item => {
      if (!item[prop]) {
        return res.status(404).send({
          message: `${prop} for product with id ${req.params.id} not found`,
        });
      }
      res.json(item[prop]);
    })
    .catch(err => res.send({ status: 500, error: err }));
};

module.exports = getItemProps;
