const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.port;
const {db} = require('./db/db');

//middlewares
app.use(express.json());
app.use(cors());

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



