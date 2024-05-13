const nodemailer = require("nodemailer");
const randomToken = require("random-token");
const session = require("express-session");
const sweetalert = require("sweetalert2");
const db = require("../models/Users");
const connectDB = require("../config/db");
const { validationResult } = require("express-validator");

// User name and email Verification
const sendVerificationEmail = (username, email) => {
  const token = randomToken(8);

  const output = `
        <p>Dear ${username},</p>
        <p>Thank you for signing up. Your verification ID and token are:</p>
        <ul>
            <li>Verification ID: ${email}</li>
            <li>Token: ${token}</li>
        </ul>
        <p>Verify link: <a href="http://localhost:8000/verify">Verify</a></p>
        <p><b>This email is authentically generated.</b></p>
    `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "amana170829@gmail.com",
      pass: "aman@@@123",
    },
  });

  const mailOptions = {
    from: "amana170829@gmail.com",
    to: email,
    subject: "Email verification ",
    html: output,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      // Handle error, e.g., log it or return an error response
    } else {
      console.log(info);
      // Email sent successfully, you may log it or handle it as needed
    }
  });
};

// user signup Controller
const signupController = (req, res) => {
  try {
    const { username, email, password } = req.body;
    const email_status = "not verified";

    db.signup(username, email, password, email_status);

    sendVerificationEmail(username, email);

    res
      .status(200)
      .json({ message: "Check your email for the token to verify" });
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
      error: error.message,
    });
  }
};

// User login controller
const signinController = async (req, res) => {
  console.log(req.session);
  console.log("hi");
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array(),
      });
    }
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
      connectDB.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result, fields) => {
          if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({
              message: "Internal Server Error",
              error: err.message,
            });
          }
          if (result && result.length > 0) {
            req.session.loggedIn = true;
            req.session.username = username;
            res.cookie("username", username);

            const status = result[0].email_status;
            if (status == "not_verified") {
              return res.json("Please verify your email");
            } else {
              sweetalert.fire("logged in");
              return res.status(200).json({
                message: "User Login successfully!",
              });
            }
          } else {
            return res.status(401).json({
              message: "Incorrect Username or Password",
            });
          }
          res.end();
        }
      );
    } else {
      return res.status(402).json({
        message: "Username and Password are required",
      });
      res.end();
    }
  } catch (error) {
    console.error("Internal Server Error:", error);
    return res.status(500).json({
      message: "Internal server Error",
      error: error.message,
    });
  }
};

// Verify user controller

// const verifyController = (req, res) => {
//   const id = req.body.id;
//   const token = req.body.token;
//   try {
// // Function match toke

//     db.matchToken(id, token, (err, result) => {
//       console.log(result);

//       if (result.length > 0) {
//         const email = result[0].email;
//         const email_status = "verified";

// // Function update verify 

//         db.updateverify(email, email_status, (err, result) => {
//           res.json("Email verified");
//         });
//       } else {
//         res.send("Token did not match");
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server Error",
//       error: error.message,
//     });
//   }
// };


const verifyController = (req, res) => {
  const id = req.body.id;
  const token = req.body.token;
  try {
    // Function match token
    db.matchToken(id, token, (err, result) => {
      if (err) {
        console.error("Error executing matchToken:", err);
        return res.status(500).json({
          message: "Internal Server Error",
          error: err.message,
        });
      }

      // Check if result is defined and not empty
      if (result && result.length > 0) {
        const email = result[0].email;
        const email_status = "verified";
        
        // Function update verify 
        db.updateverify(email, email_status, (err, result) => {
          if (err) {
            console.error("Error executing updateverify:", err);
            return res.status(500).json({
              message: "Internal Server Error",
              error: err.message,
            });
          }
          res.json("Email verified");
        });
      } else {
        res.send("Token did not match");
      }
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


module.exports = { signupController, signinController, verifyController };
