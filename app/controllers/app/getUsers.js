const data = require('../../fakeDB/db.js');

const getUsers = (req, res) => {
  const users = data.users;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(users);
};

module.exports = getUsers;
