const jwt = require("jsonwebtoken");
const accessTokenSecret = 'youraccesstokensecret';


const authenticateJWT = async (req, res, next) => {
    const token = req.headers["authorization"] || req.query.authorization || req.body.authorization;

  if (!token){
        res.status(200).send({success:false,msg:"a token is required for authentication"})
  }  
  try{
const decode = jwt.verify(token,accessTokenSecret)
req.user = decode;
}
catch (error) {
res.status(400).send("invalid token")
  }
  return next();
}

module.exports = authenticateJWT;