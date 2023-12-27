const express = require('express');
const router = express.Router();

//User Management
const userManagement = require('./RegisterUsers/registerUsers');
const validateUser = require('./RegisterUsers/validateUsers');
const insertClients = require('./RegisterUsers/insertClients');

userManagement(router);
validateUser(router);
insertClients(router);

module.exports = router;

