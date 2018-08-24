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
]

// listen on http://localhost:3000
server.listen(3000);