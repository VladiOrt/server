const userRouter = require('express').Router();
const { rolesController } = require('../controllers')

userRouter.get('/all', rolesController.getRoles)
module.exports =  userRouter;