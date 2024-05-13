
const connectDB = require("../config/db");

module.exports.addDoctor = function (
    first_name,
    last_name,
    email,
    dob,
    gender,
    address,
    phone,
    image,
    department,
    biography,
    callback
  ) {
    var query =
      "INSERT INTO `doctor`(`first_name`,`last_name`,`email`,`dob`,`gender`,`address`,`phone`,`image`,`department`,`biography`) values ('" +
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
      image +
      "','" +
      department +
      "','" +
      biography +
      "')";
    con.query(query, callback);
    console.log(query);
  };
  
  module.exports.getAllDoc = function (callback) {
    var query = "select * from doctor";
    con.query(query, callback);
  };
  
  module.exports.getDoctorById = function (id, callback) {
    var query = "select * from doctor where id =" + id;
    con.query(query, callback);
  };
  
  module.exports.getEmpbyId = function (id, callback) {
    var query = "select * from employee where id =" + id;
    con.query(query, callback);
  };
  
  module.exports.editDoctor = function (
    id,
    first_name,
    last_name,
    email,
    dob,
    gender,
    address,
    phone,
    image,
    department,
    biography,
    callback
  ) {
    var query =
      "update `doctor` set `first_name`='" +
      first_name +
      "', `last_name`='" +
      last_name +
      "', `email`='" +
      email +
      "', `dob`='" +
      dob +
      "',`gender`='" +
      gender +
      "',`address`='" +
      address +
      "',`phone`='" +
      phone +
      "',`image`='" +
      image +
      "',`department`='" +
      department +
      "',`biography`='" +
      biography +
      "' where id=" +
      id;
    con.query(query, callback);
    // console.log(query);
  };
  
  module.exports.editEmp = function (
    id,
    name,
    email,
    contact,
    join_date,
    role,
    callback
  ) {
    var query =
      "update `employee` set `name`='" +
      name +
      "', `email`='" +
      email +
      "', `contact`='" +
      contact +
      "', `join_date`='" +
      join_date +
      "', `role`='" +
      role +
      "' where id=" +
      id;
    con.query(query, callback);
  };
  
  module.exports.deleteDoctror = function (id, callback) {
    //console.log("i m here");
    var query = "delete from doctor where id=" + id;
    con.query(query, callback);
  };

  module.exports.searchDoc = function (key, callback) {
    var query = 'SELECT  *from doctor where first_name like "%' + key + '%"';
    con.query(query, callback);
    console.log(query);
  };