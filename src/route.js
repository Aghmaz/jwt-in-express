const express = require("express");
const users = require("./database")
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticateJWT = require("./middleware")

const accessTokenSecret = 'youraccesstokensecret';


router.post('/login', (req, res) => {
    // Read username and password from request body
    const { name, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.name === name && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ name: user.name, role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('name or password incorrect');
    }
});

router.get('/books', authenticateJWT, (req, res) => {
    res.json(users.books);
});


module.exports = router;