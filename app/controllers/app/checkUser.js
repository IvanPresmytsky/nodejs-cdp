const data = require('../../fakeDB/db.js');
const { getById } = require('../../helpers');

const checkUser = (req, res, next) => {
  const user = data.users && getById(data.users, req.params.id);
  if (!user) {
    res.status(404)
      .json({message: `user with id ${req.params.id} not found`});
  }
  next();
};

module.exports = checkUser;
