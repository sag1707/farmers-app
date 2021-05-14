const express = require('express');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const { errorMiddlewareHandler } = require('../middlewares/errorMiddlewareHandler');
const User = require('../models/User');
const generateToken = require('../utils/generateTokens');

const usersRoute = express.Router();

//rgister
usersRoute.post(
    '/register',
    asyncHandler(async (req,res) => {
    const{name, email, password}=req.body;

    const userExists = await User.findOne({email: email});
    if(userExists)
    {
        //throw new Error ('user Exist');
        res.status(500);
        res.send({message :'User Exist'});
    }
    const userCreated = await User.create({name,email,password});  
    res.json({
        _id:userCreated.id, 
        name:userCreated.name,
        password:userCreated.password,
        email:userCreated.email,
        token : generateToken(userCreated._id),
     });
    })

      );


//login
usersRoute.post(
    '/login',
    asyncHandler(async(req,res) => {
    const{ email,password } = req.body;

    const user = await User.findOne({email});

    if(user && (await user.isPasswordMatch(password))){
        //res.send(user);

        res.status(200);

        res.json({
           _id:user.id, 
           name:user.name,
           password:user.password,
           email:user.email,
           token : generateToken(user._id),
        });
    }
    else{
        
        res.status(401);
       res.send( { message :'Invalid Credentials'});}
})
);

//update
usersRoute.put('/update',(req,res) => {
    res.send('Update route');
});


//delete user
usersRoute.delete('/:id',(req,res) => {
    res.send('Delete route');
});

//fetch users
usersRoute.get('/', authMiddleware, (req,res)=>{
    res.send('Fetch users');
});


 module.exports = usersRoute; 