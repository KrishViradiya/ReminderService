const { where, Op } = require('sequelize');
const {NotificationTicket} = require('../models/index');

class TicketRepository {

    async getAll() {
        try {
            const response = await NotificationTicket.findAll();
            return response;
        } catch (error) {
            console.log("Somethig went wrong in fetchall in ticket repo");
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log("Something went wrong in creating in ticket repo");
            console.log(error.message);
            throw error;
        }
    }

    async get(filter){
        try {
            console.log("Status in get", filter.status);
            const tickets = await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notoficationTime:{
                        [Op.lte] : new Date()
                    }
                }
            })
            console.log("Tickets in get"  , tickets);
            return tickets;
        } catch (error) {
            console.log("Something went wrong in fetching the tickeet in tickets repo");
            throw error;
        }
    }

    async update (ticketId, data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(!ticket){
                throw new Error("Ticket not found");
            }
            ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log("Something went wrong in updating the ticket in tickets repo");
            throw error;
        }
    }
}

module.exports = TicketRepository;