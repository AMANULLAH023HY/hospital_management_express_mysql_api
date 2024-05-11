const nodemailer = require("nodemailer");
const randomToken = require("random-token");
const db = require("../models/Users");

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

const signupController = (req, res) => {
  const { username, email, password } = req.body;
  const email_status = "not verified";

  db.signup(username, email, password, email_status);

  sendVerificationEmail(username, email);

  res.status(200).json({ message: "Check your email for the token to verify" });
};

module.exports = { signupController };
