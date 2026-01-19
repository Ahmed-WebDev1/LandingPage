require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    await transporter.sendMail({
      from: `"SafeDecoy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "SafeDecoy – Early Access Confirmed",
      html: `
        <h2>Welcome to SafeDecoy</h2>
        <p>You’re officially on the early access list.</p>
        <p>We’ll notify you before launch.</p>
        <br/>
        <strong>– SafeDecoy Team</strong>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed" });
  }
});

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
