const NewsModel = require('../Model/NewsModel')
const newValidator = require('../Validate')
const createNewNews = async (req, res) => {
    try{

        const {error} = newValidator.validateNews()
        if(error){
            res.status(409).json({
                status:409,
                message: error.message
            })
        }
        const newsAdd = await NewsModel.create({
            title: req.body.title,
            description: req.body.description
        })

        res.status(200).json({
            status:"newsadded",
            data: newsAdd
        })
    }catch(error){
        res.status(400).json({
            status:"news not created",
            message: error.message
        })
    }
}
const getOneNews = async (req, res) => {
    try{
        const newsId = req.params.id;
        const newUser = await UserModel.findById(newsId)

        res.status(200).json({
            status:"successful",
            data: newUser
        })
    }catch(error){
        res.status(404).json({
            status: "failed",
            message: error.message
        })
    }
}

module.exports ={
    createNewNews,
    getOneNews
}