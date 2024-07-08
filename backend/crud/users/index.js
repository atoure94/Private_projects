const {pool}=require('../../db/dbConnect');
const bcrypt= require('bcrypt');
const saltRounds=10;


const createUser = async (req, res)=>{
    const {name, firstname, email, password}=req.body;

    try{
        const emailExist=await pool.query('SELECT user_email FROM users.users WHERE user_email=$1',[email]);
            if(emailExist.rows.length>0){
                return res.status(400).send('Email already exists');
            }
            const salt = await bcrypt.genSalt(saltRounds);

            const hashedPassword = await bcrypt.hash(password,salt);



        const result= await pool.query('INSERT INTO users.users (user_name,user_firstname,user_email,user_password) VALUES ($1,$2,$3,$4)',[name,firstname,email,hashedPassword]);
            res.status(201).send({success:true, message: 'adding successfull', result});
    }catch(error){
        res.status(500).send(error.message);
    }
}

const logUser = async (req, res)=>{
    const {email,password}=req.body;

    try{
        const result= await pool.query('SELECT user_password FROM users.users WHERE user_email=$1',[email]);

        if(result.rows.length===1){

            const hashedPassword = result.rows[0].user_password;
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            if(passwordMatch){
                return res.status(200).json({success:true, message: 'Login successfull'});
            }
        }

        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }catch (error){
        res.status(400).json({success:false, message:'Login failed, an error occured'});
        console.error(error);
    }
};

module.exports={
    createUser,
    logUser
}