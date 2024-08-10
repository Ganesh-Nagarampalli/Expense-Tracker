const express = require('express');
const cors = require('cors')
const app = express();
const {db} = require('./db/db');
const {readdirSync} = require('fs');
require('dotenv').config();
const port = process.env.port;

//middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync('./routes').map((route) => {
    try{
        app.use('/api/v1', require('./routes/' + route));
    } catch(error){
        console.log(`Error loading route : ${route}`, error);
    }
});


// app.get('/', (req,res)=>{
//     res.send("welcome");
// });

const server = ()=> {
    db();
    app.listen(port, ()=>{
        console.log(`server listening on port : ${port}`);
    });
}

server();



