const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "abraham.champlin17@ethereal.email",
      pass: "6tC14S2NjFaveEbXtd"
    }
  });

  let info = await transporter.sendMail({
    from: '"H3X-T" <h3xt@pm.me>',
    to: "supakorn0728@gmail.com",
    subject: "Hello",
    html: "<h2>Hulalalalala</h2>"
  });
  res.json(info);
};

// const sendEmail = async (req, res) => {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: "h3xt@pm.me", // Change to your recipient
//     from: "learncodetutorial@gmail.com", // Change to your verified sender
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>"
//   };
//   const info = await sgMail.send(msg);
//   res.json(info);
// };

module.exports = sendEmail;
