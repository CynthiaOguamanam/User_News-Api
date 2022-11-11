const mongoose = require ('mongoose')
const url = "mongodb://localhost/UserNewsApi"

mongoose.connect(url).then(()=>{
    console.log('successfully connected')
}).catch((error) => {
    console.log(error.message)
})

module.exports = mongoose;