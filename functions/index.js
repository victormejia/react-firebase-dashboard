const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// env vars
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// create node mailer transport
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

async function sendWelcomeEmail(email) {
  const mailOptions = {
    from: 'The Grid Notifier <thegrid.notifier@gmail.com>',
    to: email,
    subject: 'Welcome to The Grid!',
    text: `Hey ${email}! Welcome to The Grid, the elite team of secret agents.`,
  };

  await mailTransport.sendMail(mailOptions);

  console.log('New welcome email sent to:', email);

  return null;
}

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const email = user.email;
  return sendWelcomeEmail(email);
});
