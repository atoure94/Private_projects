const Pool=require('pg').Pool;
const pool=new Pool({
    user:'postgres',
    password:'HORIZON',
    database:'Log_and_regis',
    port:5432
})

require('dotenv').config();

const dbConnect = async ()=>{
    try{
        await pool.connect();
        console.log('Connected');

    }catch(e){
        console.error('Enable to connect', e);

    }
}

module.exports={
    dbConnect,
    pool
}