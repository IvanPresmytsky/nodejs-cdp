const data = require('../../fakeDB/db.js');

const checkUsers = (req, res, next) => {
  const users = data.users;
  if (!users) {
    res.status(404)
      .json({message: `users not found`});
  }
  next();
};

module.exports = checkUsers;