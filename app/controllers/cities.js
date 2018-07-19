const Cities = require('../models/city');
const { addLastModified, checkItem } = require('../helpers');

exports.getAllCities = (req, res) => {
  Cities.find({})
    .then(data => res.json(data))
    .catch(err => res.send({ status: 500, error: err }));
};
  
exports.postCities = (req, res) => {
  const newCity = new Cities({ ...req.body });
  checkItem(Cities, newCity)
    .then(city => addLastModified(Cities, city.id))
    .then(city => res.json(city))
    .catch(err => res.send({ status: 500, error: err }));
};
  
exports.updateCityById = (req, res) => {
  const cityId = req.params.id;
  
  Cities.find({ id: cityId })
    .then(city => {
      if (city.length === 0) {
        const newCity = new Cities({ ...req.body });
        return checkItem(Cities, newCity)
          .then(city => res.json(city))
          .catch(err => res.send({ status: 500, error: err }));
      }
      Cities.updateOne({ id: cityId }, req.body)
        .then((result) => {
          console.log(`modified ${result.nModified} document(s)`);
          return Cities.findOne({ id: cityId })
            .then(city => addLastModified(Cities, city.id))
            .then(city => res.json(city))
            .catch(err => res.send({ status: 500, error: err}));
        })
        .catch(err => console.log(err));
    })
    .catch(err => res.send({ status: 500, error: err }));
};
  
exports.deleteCityById = (req, res) => {
  const cityId = req.params.id;
  
  Cities.deleteOne({ id: cityId })
    .then((result) => {
      console.log(`deleted ${result.n} documents`);
      res.end();
    })
    .catch(err => res.send({ status: 500, error: err }));
}