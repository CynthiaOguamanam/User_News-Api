const mongoose = require ('mongoose')

const UserSchema =  mongoose.Schema({
    fullName:{
        type: String
    },
    course:{
        type: String
    },
    duration:{
        type: String
    },
    userName:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }

}, {timestamps: true});

module.exports = mongoose.model('user', UserSchema)