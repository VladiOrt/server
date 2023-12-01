
const userRouter = require('express').Router();
const { studioController } = require('../controllers')

userRouter.get('/:id', studioController.getInfoStudio)


module.exports =  userRouter;