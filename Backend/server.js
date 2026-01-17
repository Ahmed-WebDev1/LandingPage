const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure your email (use Gmail for testing, or SMTP)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ahmedserpexperts@gmail.com',
    pass: 'lpbd wwnb gjhr qhji' 
  }
});

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  const mailOptions = {
    from: 'ahmedserpexperts@gmail.com',
    to: email,
    subject: 'Newsletter Subscription Confirmation',
    html: `
      <h1>Welcome!</h1>
      <p>You have successfully subscribed to our newsletter.</p>
      <p>Stay tuned for exclusive updates and offers.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
