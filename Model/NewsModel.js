const mongoose = require ('mongoose')
const NewsSchema =  mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('news', NewsSchema);
