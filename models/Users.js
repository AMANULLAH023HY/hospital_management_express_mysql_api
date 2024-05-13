const connectDB = require("../config/db");

// Function to signup a user
module.exports.signup = (username, email, password, status, callback) => {
  // Check if the email already exists
  connectDB.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    (err, result) => {
      if (err) {
        console.error("Error checking existing email:", err);
        return callback(err, null);
      }

      if (result.length > 0) {
        console.log("Email already exists");
        return callback(null, false); // Email already exists, return false
      } else {
        // Email doesn't exist, insert the new user
        const query =
          "INSERT INTO users (username, email, password, email_status) VALUES (?, ?, ?, ?)";
        connectDB.query(
          query,
          [username, email, password, status],
          (err, result) => {
            if (err) {
              console.error("Error signing up user:", err);
              return callback(err, null);
            } else {
              console.log("User signed up successfully:", result);
              return callback(null, true); // User signed up successfully, return true
            }
          }
        );
      }
    }
  );
};

// Function to verify user
module.exports.verify = (username, email, token, callback) => {
  const query =
    "INSERT INTO `verify` (username, email, token) VALUES (?, ?, ?)";
  connectDB.query(query, [username, email, token], callback);
};

// Function to get user ID
module.exports.getUserId = (email, callback) => {
  const query = "SELECT * FROM `verify` WHERE email = ?";
  connectDB.query(query, email, callback);
};

// Function match token
module.exports.matchToken = (id, token, callback) => {
  const query = "SELECT * FROM `verify` WHERE token = ? AND id = ?";
  connectDB.query(query, [token, id], callback);
};

// Function update verify
module.exports.updateverify = (email, email_status, callback) => {
  const query = "UPDATE `users` SET `email_status` = ? WHERE `email` = ?";
  connectDB.query(query, [email_status, email], callback);
};

// Find one user function

module.exports.findOne = (email, callback) => {
  const query = "SELECT * FROM user WHERE email = '" + email + "' ";
  connectDB.query(query, email, callback);
  console.log(query);
};

// Find one user function

module.exports.temp = (id, email, token, callback) => {
  const query = "INSERT INTO `temp` (`id`, `id`, `token`)VALUES(?,?,?) ";
  connectDB.query(query, [id, email, token], callback);
  console.log(query);
};
