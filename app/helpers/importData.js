const importData = (model, mockData) => {
  model.collection.insertMany(mockData, (err, data) => {
    if (err) return;
  });
};

module.exports = importData;
