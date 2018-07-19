const checkItem = (model, item) => {
  return model.find({ id: item.id })
    .then(result => {
      if (result.length > 0) {
        console.log('City already exists');
        return {};
      }
        return item.save();
    })
    .catch(err => console.log(err));
  };
  
module.exports = checkItem;