const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const sendBasicEmail = require('./services/email-service');

const app = express();
const cron = require('node-cron')

function setupAndStartServer(){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, () => {
        console.log(`Server is started and running at port ${PORT}`)

        // sendBasicEmail(
        //     'support@admin.com',
        //     'vkforyt@gmail.com',
        //     'This is a testing email',
        //     'Hello this is your boarding pass'
        // )

        // cron.schedule('*/2 * * * *' , () => {
        //     console.log("Running a task every two minutes");
        // })
    })
}

setupAndStartServer();