// this routes are generally used for the purpose of user login and logout and registration 

const jwt = require('jsonwebtoken');
const express = require('express');
import {users} from '../types/types';
const app = expresss();
app.use(express.json());

app.post('/signup',async(req,res)=>{
    const{payload} = req.body;
    const{parsedpayload} = users.safeParse(payload);
    if(!parsedpayload){
        return res.status(400).json({error:"Invalid payload"});
    }
})