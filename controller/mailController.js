const nodemailer = require('nodemailer');
require('dotenv').config();
const email=process.env.email;
const password = process.env.password;
console.log(email ,"email" , password , "password" );
const mailController = async(req, res) => {
    const transporter = await nodemailer.createTransport({
      service:"gmail",
      auth: {
          user: email,
          pass: password
      }
    });

      const info = await transporter.sendMail({
        from: "rahul.joshi@c-zentrix.com",
        to: "rahuljoshi9837@gmail.com",
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