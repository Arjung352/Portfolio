const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json()); // Using express.json() instead of bodyParser.json()

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Hey There!",
    email: process.env.ETHEREAL_USER,
    password: process.env.ETHEREAL_PASS,
  });
});

// Email route
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Message from ${name}`,
    text: message,
    html: `<p>You have a new message from your contact form:</p>
           <p><strong>Name: </strong> ${name}</p>
           <p><strong>Email: </strong> ${email}</p>
           <p><strong>Message: </strong> ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email", error });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});
