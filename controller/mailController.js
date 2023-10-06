const nodemailer = require('nodemailer');
require('dotenv').config();
const senderEmail=process.env.senderEmail;
const receiverEmail=process.env.receiverEmail;
const password = process.env.password;

const mailController = async(req, res) => {
    const transporter = await nodemailer.createTransport({
      service:"gmail",
      auth: {
          user: senderEmail,
          pass: password
      }
    });

      const info = await transporter.sendMail({
        from: senderEmail,
        to: receiverEmail,
        subject: "Request to send mail through Node js API.",
        text: "Hello Rahul, This email send by Node js email Api. This is the testing email.",
        html: "<b>I hope you are doing well.?</b>",
      });

      console.log("Message sent: %s", info.messageId);
      console.log(info);

      res.json({
            "Mail sent to the user " :info.envelope.to })
}

module.exports = mailController;