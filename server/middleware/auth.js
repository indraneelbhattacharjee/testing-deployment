const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    try { 
        let token =  req.headers['authorization'];
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, process.env.JWT_SECRET)
                req.userID = user.id;
            
        }
        else{
            return res.sendStatus(401).json({message : "Unauthorized User"}); // No token found
        }
        
        next();

    }catch(error){
        console.log(error);
        res.sendStatus(401).json({message: "Unauthorized User"})
    }

    // Check if the token is in the denylist
    //if (tokenDenylist.includes(token)) return res.sendStatus(401);
}    
module.exports = auth;
