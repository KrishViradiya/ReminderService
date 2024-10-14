const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');

const app = express();

function setupAndStartServer(){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, () => {
        console.log(`Server is started and running at port ${PORT}`)
    })
}

setupAndStartServer();