const express = require('express');
const { login } = require('../controller/LoginController')
const router = express.Router();

router.post('/', login);

module.exports = router;