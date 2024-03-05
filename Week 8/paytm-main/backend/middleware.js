const jwt = require('jsonwebtoken');
const JWT_SECRECT = require('./config');

const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];


    try{
        const decoded = jwt.verify(token, JWT_SECRECT);
        req.userId = decoded.userId;

        next();
    }catch(err){
        return res.staus(403).json({});
    }
};

module.exports = {
    authmiddleware
}