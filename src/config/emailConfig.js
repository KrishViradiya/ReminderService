// wee need to create a transport object
//  What is transport object

// transporter is going to be an object that is used to send mail

const nodemailer = require('nodemailer');
const { EMAIL_ID, EMAIL_PASSWORD } = require('./serverConfig');
// console.log(EMAIL_ID,EMAIL_PASSWORD);
const sender = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user: EMAIL_ID,
        pass: EMAIL_PASSWORD
    }
})

module.exports = sender