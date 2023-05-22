require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./config/connection')
const app = express()
const PORT = process.env.PORT || 4000
const path = require('path')
const userRoute = require('./routes/user.route')
const adminRoute = require('./routes/admin.route')

db.connect()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, ('./public'))))
app.use('/admin', adminRoute)
app.use('/', userRoute)

app.listen(PORT,console.log(`connected at ${PORT}`))