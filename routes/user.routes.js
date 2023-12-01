const userRouter = require('express').Router();
const { usersController } = require('../controllers');
const { validateRol } = require('../middlewares/roles')
 
userRouter.get('/find/:id', usersController.getUserById)
userRouter.get('/all', usersController.getAllUsers)
userRouter.post('/add',  validateRol , usersController.addUser)
userRouter.put('/update/:id', usersController.updateUser)
userRouter.delete('/delete/:id', usersController.deleteUser)
//userRouter.patch('/active/:id', usersController.deleteUser)

module.exports =  userRouter;