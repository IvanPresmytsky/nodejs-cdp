const { addLastModified, checkItem } = require('./');

const updateItem = (model) => (req, res) => {
  const itemId = req.params.id;
    
  model.find({ id: itemId })
    .then(item => {
      if (item.length === 0) {
        const newItem = new model({ ...req.body });
        return checkItem(model, newItem)
          .then(item => res.json(item))
          .catch(err => res.send({ status: 500, error: err }));
      }
      model.updateOne({ id: itemId }, req.body)
        .then((result) => {
          console.log(`modified ${result.nModified} document(s)`);
          return model.findOne({ id: itemId })
            .then(item => addLastModified(model, item.id))
            .then(item => res.json(item))
            .catch(err => res.send({ status: 500, error: err}));
        })
        .catch(err => console.log(err));
    })
    .catch(err => res.send({ status: 500, error: err }));
  };

module.exports = updateItem;
