const connectDB = require("../config/db");
//  Add new doctorquery
module.exports.addDoctor = function (
  first_name,
  last_name,
  email,
  dob,
  gender,
  address,
  phone,
  department,
  biography,
  callback
) {
  var query =
    "INSERT INTO `doctor`(`first_name`,`last_name`,`email`,`dob`,`gender`,`address`,`phone`,`department`,`biography`) values ('" +
    first_name +
    "','" +
    last_name +
    "','" +
    email +
    "','" +
    dob +
    "','" +
    gender +
    "','" +
    address +
    "','" +
    phone +
    "','" +
    department +
    "','" +
    biography +
    "')";
  connectDB.query(query, callback);
  console.log(query);
};

// get all doctor details query
module.exports.getAllDoc = function (callback) {
  var query = "select * from doctor";
  connectDB.query(query, callback);
};

// get single doctor details query

module.exports.getDoctorById = function (id, callback) {
  var query = "select * from doctor where id =" + id;
  connectDB.query(query, callback);
};

// Update doctor details query

module.exports.editDoctor = function (
  first_name,
  last_name,
  email,
  dob,
  gender,
  address,
  phone,
  department,
  biography,
  id,
  callback
) {
  var query =
    "UPDATE `doctor` SET " +
    "`first_name` = '" +
    first_name +
    "', " +
    "`last_name` = '" +
    last_name +
    "', " +
    "`email` = '" +
    email +
    "', " +
    "`dob` = '" +
    dob +
    "', " +
    "`gender` = '" +
    gender +
    "', " +
    "`address` = '" +
    address +
    "', " +
    "`phone` = '" +
    phone +
    "', " +
    "`department` = '" +
    department +
    "', " +
    "`biography` = '" +
    biography +
    "' " +
    "WHERE `id` = " +
    id;

  connectDB.query(query, callback);
};

module.exports.deleteDoctror = function (id, callback) {
  //console.log("i m here");
  var query = "delete from doctor where id=" + id;
  connectDB.query(query, callback);
};

module.exports.searchDoc = function (key, callback) {
  var query = 'SELECT  *from doctor where first_name like "%' + key + '%"';
  connectDB.query(query, callback);
  console.log(query);
};
