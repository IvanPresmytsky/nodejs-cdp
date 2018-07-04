const data = require('../../fakeDB/db.js');
const getById = require('../../helpers');

const getUser = (req, res) => {
  const user = data.users && getById(data.users, req.params.id);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(user);
};

module.exports = getUser;