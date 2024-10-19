const cron = require("node-cron");
const emailService = require("../services/email-service");
const sender = require("../config/emailConfig");
/**
 * 10:00 am
 * every 5 minutes
 * we will check are there any pending emails which are expected to be sent by now and is pendidng
 */

const setupJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    // console.log("Running at every 5 minutes");
    const response = await emailService.fetchPendingEmails();
    console.log(typeof response);

    response.forEach((element) => {
      sender.sendMail(
        {
            to: element.recipientEmail,
            subject: element.subject,
            text: element.content
        },
        async (err , data) => {
            if(err){
                console.log("Error in sending email", err);
            }else{
                console.log("Email sent successfully");
                await emailService.updateTicket(element.id, {status: 'SUCCESS'});
            }
        }
      )
    });

    // now once the email have been sent the next step is to change the pending status to success
  });
};

module.exports = setupJobs;
