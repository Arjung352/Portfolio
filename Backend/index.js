// const express = require("express");
// const app = express();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// require("dotenv").config(); // Load environment variables from .env file

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Home route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hey There!",
//     email: process.env.ETHEREAL_USER,
//     password: process.env.ETHEREAL_PASS,
//   });
// });

// // Email sending route
// app.post("/send", (req, res) => {
//   const { name, email, message } = req.body;

//   // Use Ethereal for testing purposes (no real emails are sent)
//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: process.env.GMAIL_USER, // Your Gmail email address
//       pass: process.env.GMAIL_PASS, // App password generated for Gmail
//     },
//   });

//   const mailOptions = {
//     from: `"${name}" <${email}>`, // Sender's name and email
//     to: "arjung7751@gmail.com", // Recipient email
//     subject: `Message from ${name}`,
//     text: message,
//     html: `<p>You have a new message from your contact form:</p>
//            <p><strong>Name: </strong> ${name}</p>
//            <p><strong>Email: </strong> ${email}</p>
//            <p><strong>Message: </strong> ${message}</p>`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).json({ message: "Error sending email", error });
//     }
//     res.status(200).json({ message: "Email sent successfully", info });
//   });
// });

// // Start server
// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server is listening on port ${process.env.PORT || 3000}`);
// });
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email address
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "arjung7751@gmail.com",
      subject: `Message from ${name}`,
      text: message,
      html: `<p>You have a new message from your contact form:</p>
             <p><strong>Name: </strong> ${name}</p>
             <p><strong>Email: </strong> ${email}</p>
             <p><strong>Message: </strong> ${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});
