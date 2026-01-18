const express = require("express");
const app = express();
const path = require("path"); // Node.js path module
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

// resume route
app.get("/resume", (req, res) => {
  const filePath = path.join(
    __dirname,
    "public",
    "Arjun Gupta-FullStack Developer.pdf",
  );
  res.setHeader(
    "Content-Disposition",
    'inline; filename="Arjun_Gupta_Resume.pdf"',
  );
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error({ "Error sending resume": err });
      res.send("Error sending resume").status(500);
    }
  });
});
// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});
