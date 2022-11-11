const HapiJoi = require('@hapi/joi')
const validateUser = (data) => {
    
const userVal = HapiJoi.object({
  fullName: HapiJoi.string().required(),
  course: HapiJoi.string().required(),
  duration: HapiJoi.string(),
  userName: HapiJoi.string().required().min(3).max(25),
  email: HapiJoi.string().email().required(),
  password: HapiJoi.string().required(),
})
return userVal.validate(data)
}

module.exports.validateUser = validateUser;


const validateNews = (data) => {
    
    const newsVal = HapiJoi.object({
        title: HapiJoi.required().string(),
        description: HapiJoi.required().string()
    })
    return newsVal.validate(data)
    }
    
module.exports.validateNews = validateNews    
  
