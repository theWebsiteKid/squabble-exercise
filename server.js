const express = require('express');
let server = express();
// array of users
let users = [
    { 
        id: '1',
        name: '@theWebsiteKid',
        email: 'xavierduncan@pm.me',
        password: 'tokyo'
    },
    {
        id: '2',
        name: '@nybblr',
        email: 'jonathan@digitalcrafts.com',
        password: 'europe'
    }
];
// function to retrieve all users
const getUsers = (req, res) => {
    res.send(users);
}
// make get request for users
server.get('/users', getUsers);
// listen on http://localhost:3000
server.listen(3000);