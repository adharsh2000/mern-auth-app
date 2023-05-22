const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/user.controller')
const {upload} = require('../utils/multer')
const jwt = require('../utils/jwt')

userRouter.post('/signup', userController.SignUp)
userRouter.post('/login', userController.Login)
userRouter.get('/details', jwt.verifyUserToken, userController.userDetails)
userRouter.patch('/update', jwt.verifyUserToken, upload.single('image'), userController.updateProfile)


module.exports = userRouter;