const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const ticketRepo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail ( {
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
        console.log(response);
    } catch (error) {
        throw error;
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await ticketRepo.get({status:'PENDING'});
        console.log("TYPEEE----", typeof response);
        return response;
    } catch (error) {
        throw error;
    }
}

const createNotification = async (data) => {
    try {
        const response = await ticketRepo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

const updateTicket = async(ticketId,data) => {
    try {
        const response = await ticketRepo.update(ticketId,data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}