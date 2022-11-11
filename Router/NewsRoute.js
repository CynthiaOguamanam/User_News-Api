const express = require(express)
const newsRoute = express.Router();

const { createNewNews,getOneNews } = require('../Handler/NewsHandler')

newsRoute
    .route('/news')
    .post(createNewNews)
    .get(getOneNews)

    module.exports = newsRoute