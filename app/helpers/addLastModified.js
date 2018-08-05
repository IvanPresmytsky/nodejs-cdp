const addLastModified = (model, id) => {
  const lastModifiedDate = new Date().toString();
  
  return model.findOneAndUpdate({ id: id }, { lastModifiedDate })
    .then(item => item)
    .catch(err => console.log(err));
};

module.exports = addLastModified;
