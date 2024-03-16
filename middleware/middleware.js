const jwt = require("jsonwebtoken");

const jwtauth = async(req,res,next)=>{
    const{authorization} = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"You must be logged in"});
    }
    const token = authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({error:"You must be logged in"});
    }
    try{
        const verify = jwt.verify(token,process.env.JWT_SECRET);
        if(!verify){
            return res.status(401).json({error:"You must be logged in"});
        }
        req.user = verify;
        next();
    }
    catch(err){
        return res.status(401).json({error:"You must be logged in"});
    }
}

modules.export = jwtauth;