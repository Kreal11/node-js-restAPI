// const brevo = require("@getbrevo/brevo");
// const { envsConfig } = require("../configs");

// const apiInstance = new brevo.TransactionalEmailsApi();

// apiInstance.authentications.apiKey.apiKey = envsConfig.brevoApiKey;

// const email = {
//   subject: "Test",
//   sender: { email: envsConfig.email, name: "Kyrylo" },
//   to: [{ email: "kirillshyrokov2@gmail.com" }],
//   htmlContent: "<html><body><div>Hello, user !</div></body></html>",
// };

// apiInstance.sendTransacEmail(email).then(() => {
//   console.log("Sended");
// });

const nodemailer = require("nodemailer");
const { envsConfig } = require("../configs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: envsConfig.email,
    pass: envsConfig.gmailPass,
  },
});

// const email = {
//   subject: "Test",
//   from: envsConfig.email,
//   to: "kirillshyrokov2@gmail.com",
//   html: "<div>Hello, user !</div>",
// };

const sendEMail = async (data) => {
  const email = { ...data, from: envsConfig.email };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendEMail;

// transporter.sendMail(email);
