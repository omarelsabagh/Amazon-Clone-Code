import express from 'express';
import dotenv from 'dotenv';
const cors = require('cors');
const path = require('path')
dotenv.config();

import { fetchAllRoutes } from './routes/allRoutes';

export const app: express.Application = express();


  app.use(express.static(path.join(__dirname,"../client/build")))



app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//env variable for the port
const port = process.env.PORT || 5000;

// allRoutes file in routes folder
fetchAllRoutes(app);

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"../client/build/index.html"))
})

app.listen(port,()=>{console.log(`server is running on port ${port}`);
});
