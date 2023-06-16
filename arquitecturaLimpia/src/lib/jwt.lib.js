const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

//hacer el token
const sign = (payload = {}) => {
    return jwt.sing(payload, SECRET_KEY, { expiresIn: "5h" })
}

const verify = ( token ) => {
    return jwt.verify(token, SECRET_KEY);
}

module.exprots = { sign, verify }