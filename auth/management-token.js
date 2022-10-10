var jwt = require('jsonwebtoken');
var uuid4 = require('uuid4');
var config = require("./config.json");

//maybe make it more secure in the future.
function makeManagementToken(){
    jwt.sign(
        {
            access_key: config.app_access_key.trim(),
            type: 'management',
            version: 2,
            iat: Math.floor(Date.now() / 1000),
            nbf: Math.floor(Date.now() / 1000)
        },
        config.app_secret.trim(),
        {
            algorithm: 'HS256',
            expiresIn: '24h',
            jwtid: uuid4()
        },
        function (err, token) {
            console.log(token);
        }
    );

}

function getManagementToken(){
    return config.managementToken;
}

exports.authObj=  { "makeManagementToken":makeManagementToken, "getManagementToken": getManagementToken};