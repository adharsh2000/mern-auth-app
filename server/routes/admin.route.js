const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controller/admin.controller')
const jwt = require('../utils/jwt')

adminRouter.post('/login', adminController.login);
adminRouter.get('/getusers',jwt.verifyAdminToken,adminController.getUsers);
adminRouter.get('/edituser/:id', jwt.verifyAdminToken,adminController.loadUserDetails)
adminRouter.patch('/edituser/:id', jwt.verifyAdminToken, adminController.editUserDetails)
adminRouter.post('/searchuser', jwt.verifyAdminToken, adminController.searchUser)
adminRouter.delete('/deleteuser/:id', jwt.verifyAdminToken,adminController.deleteUser)
adminRouter.post('/adduser', jwt.verifyAdminToken, adminController.AddUser)


module.exports = adminRouter; 