const express = require('express');
const router = express.Router();

const { userController } = require('../controller');
const { verifyToken } = require('../middleware/verifyToken.js');

// * POST /user/signin
router.post('/signin', userController.signin.post);

// * POST /user/signout
router.post('/signout', userController.signout.post);

// * POST /user/signup
router.post('/signup', userController.signup.post);

// * GET /user/info
router.get('/info', verifyToken, userController.info.get);

module.exports = router;
