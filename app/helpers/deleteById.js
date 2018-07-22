const deleteById = (model) =>(req, res) => {
  const itemId = req.params.id;
  
  model.deleteOne({ id: itemId })
    .then((result) => {
      console.log(`deleted ${result.n} documents`);
      res.end();
    })
    .catch(err => res.send({ status: 500, error: err }));
}

module.exports = deleteById;
