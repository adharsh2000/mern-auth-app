
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const data = require('../config/data')


const randomIndex = Math.floor(Math.random() * data.length);
const randomImageUrl = data[randomIndex];

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Username is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique: true,
    },
    phone:{
        type:Number,
        required:[true, 'Phone is required'],
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },
    image:{
        type:String,
        default:randomImageUrl
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
    
})


userSchema.pre('save', async function(next){
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword;
        next()
    } catch (error) {
        console.log(error);
    }
})


const User = mongoose.model('User', userSchema)
module.exports = User;