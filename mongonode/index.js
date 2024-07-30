const http=require('http');
const app=require('./app');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const port=3000;

app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

