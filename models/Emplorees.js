const connectDB = require("../config/db");

// add employee Query

module.exports.addEpm = (
  name,
  email,
  contact,
  date,
  role,
  salary,
  callback
) => {
  const query =
    "INSERT INTO `employee`(`name`, `email`,`contact`,`date`,`role`, `salary`)VALUES(?, ?, ?, ?, ?,?)";

  connectDB.query(query, [name, email, contact, date, role, salary], callback);

  console.log(query);
};

// get single employee by id query
module.exports.getSingleEmp = function (id, callback) {
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

module.exports.updateEpmDetails = (
  name,
  email,
  contact,
  date,
  role,
  salary,
  id,
  callback
) => {
  const query =
    "UPDATE `employee` SET `name` = ?, `email` = ?, `contact` = ?, `date` = ?, `role` = ?, `salary` = ? WHERE `id` = ?";

  connectDB.query(
    query,
    [name, email, contact, date, role, salary, id],
    callback
  );

  console.log(query);
};

// delete employee query

module.exports.deleteEmp = (id, callback) => {
  const query = "DELETE FROM `employee` WHERE id = ?";

  connectDB.query(query, [id], callback);

  console.log(query);
};
