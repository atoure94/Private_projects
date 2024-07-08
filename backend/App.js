const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {dbConnect}= require('./db/dbConnect');
const {ApiUser} = require("./crud");
const cors=require('cors');
const port=3000; 

dbConnect();

app.use(bodyParser.json());

app.use(cors());

app.post('/user/add',ApiUser.createUser);
app.post('/login',ApiUser.logUser);


app.get('/api', (req, res) => {
    res.json("API");
});

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})