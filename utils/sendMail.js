const nodemailer = require('nodemailer');
require('dotenv').config();

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'mail.adm.tools',
  port: 465,
  secure: true,
  auth: {
    user: 'dmitry@767.team',
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendMail = async ({ to, subject, text }) => {
  const mail = {
    from: 'dmitry@767.team',
    to,
    subject,
    text,
  };

  try {
    const result = await transporter.sendMail(mail).then(info => console.log(info));
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = sendMail;
