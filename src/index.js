const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const sendBasicEmail = require('./services/email-service');
const TicketController = require('./controllers/ticket-controllers')
const app = express();
const jobs = require('./utils/jobs')
function setupAndStartServer(){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create)

    app.listen(PORT, () => {
        console.log(`Server is started and running at port ${PORT}`)
        // jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'vkforyt@gmail.com',
        //     'This is a testing email',
        //     'Hello this is your boarding pass'
        // )

        
    })
}

setupAndStartServer();