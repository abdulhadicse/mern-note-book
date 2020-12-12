const userRouter = require('express').Router();
const userController = require('../../server/Controller/userController');
const auth = require('../Middleware/auth');


userRouter.post('/login', userController.loginUser)
userRouter.post('/register', userController.regiserUser)
userRouter.get('/verify', userController.verifyToken)



module.exports = userRouter;