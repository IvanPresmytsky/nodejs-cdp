const { addLastModified, checkItem } = require('./');

const postItem = (model) =>(req, res) => {
  const newItem = new model({ ...req.body });
  checkItem(model, newItem)
    .then(item => addLastModified(model, item.id))
    .then(item => res.json(item))
    .catch(err => res.send({ status: 500, error: err }));
};

module.exports = postItem;
