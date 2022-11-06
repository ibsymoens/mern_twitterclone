import jwt from "jsonwebtoken";

const verifyAuthToken = async (req, res, next) => {
    console.log("#################################middleware - verifyAuthToken#################################");
    let token;
    if(req.headers.authorization)
        token = req.headers.authorization.split(" ")[1];
    else 
        token = req.body.headers.Authorization.split(" ")[1];
        
    if(!token) return res.status(401).json({ message: "Unauthorized." }); 
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if(err) return res.status(401).json({ message: "Unauthorized." });
        req.userId = decoded.id;
        next();
    });
}

export default verifyAuthToken;