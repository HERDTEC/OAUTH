const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const { config } = require('./config')

const app = express();


app.use(bodyParser.json());

app.post("/api/auth/token", (req, res)=>{
    const { email, username, name } = req.body; 
    const token = jwt.sign( {sub: username, email, name}, config.authJwtSecret );
    res.json({ acces_token: token })
});

app.get("/api/auth/verify", (req, res)=>{
    const {access_token } = req.query; 
    try {
        const decoded = jwt.verify(access_tokenm, config.authJwtSecret);
        res.json({message:'The token is valid', username: decoded.sub});
    } catch (error) {
        next(error);
    }
});

const server = app.listen(5000, ()=>
                                console.log(`Listenning http://localhost:${server.address().port}`)
);
