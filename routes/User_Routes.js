// this routes are generally used for the purpose of user login and logout and registration 

const jwt = require('jsonwebtoken');
const express = require('express');
import {users} from '../types/types';
const app = expresss();
app.use(express.json());
import user from '../models/User_Schema';

app.post('/signup',async(req,res)=>{
    const{payload} = req.body;
    const{parsedpayload} = users.safeParse(payload);
    if(!parsedpayload){
        return res.status(400).json({error:"Invalid payload"});
    }
    try{
        const finding = await user.findOne({username:parsedpayload.username});
        if(finding){
            return res.status(400).json({error:"Username already exists"});
        }
        const genereatetoken = jwt.sign({username:parsedpayload.username},process.env.SECRET);
        const user = new user(parsedpayload);
        await user.save();
        return res.status(201).json({token:genereatetoken});

    }
    catch(err){
        return res.status(500).json({error:"Internal server error"});
    }
})

app.post('/login',async(req,res)=>{})