const mongoose= require('mongoose');
require('dotenv').config();

async function dbConnect(){
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser=true;
        useUnifiedTopology=true;
    }).then(()=>{
        console.log('Successfull connected to Mongo Atlas')
    }).catch((error)=>{
        console.log('Unable to Connect', error);
    })
}

module.exports=dbConnect;