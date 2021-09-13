const nodemailer = require("nodemailer");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("./secrets");
}

console.log("I",secrets.EMAIL_USERNAME);

const emailService = nodemailer.createTransport({
    host: secrets.EMAIL_HOST,
    port: secrets.EMAIL_PORT,
    service: 'gmail',
    secure: true,
    auth: {
        user: secrets.EMAIL_USERNAME,
        pass: secrets.EMAIL_PW,
    },
});

module.exports = emailService;
