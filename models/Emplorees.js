const connectDB = require("../config/db");

// add employee Query

module.exports.addEpm = (
    name,
    email, 
    contact, 
    json_date, 
    role, 
    callback) => {
  const query =
    "INSERT INTO `employee`(`name`, `email`,`contact`,`json_date`,`role`)VLUES(?, ?, ?, ?, ?)";

  connectDB.query(query, [name, email, contact, json_date, role], callback);

  console.log(query);
};

// get single employee by id query
module.exports.getEmpbyId = function (id, callback) {
  var query = "SELECT * FROM employee WHERE id =" + id;
  connectDB.query(query, callback);
  console.log(query);
};

//   get All employee query

module.exports.getAllEmp = (callback) => {
  const query = "SELECT * FROM `employee`";

  connectDB.query(query, callback);
  console.log(query);
};

// upadte employee query

module.exports.updateEpm = (
  name,
  email,
  contact,
  json_date,
  role,
  id,
  callback
) => {
  const query =
    "UPDATE `employee` SET (`name`, `email`,`contact`,`json_date`,`role`, `role`,)VLUES(?, ?, ?, ?, ?)";

  connectDB.query(query, [name, email, contact, json_date, role], callback);

  console.log(query);
};

// delete employee query

module.exports.deleteEmp = (id, callback) => {
  const query = "DELETE FROM `employee` WHERE id = ?";

  connectDB.query(query, callback);

  console.log(query);
};
