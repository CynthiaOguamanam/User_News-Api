const express = require ('express')
const router = express.Router();

const {CreateUser, getOneUser, getAllUser, updateUser, deleteUser} = require('../Handler/UserHandle')

router
    .route('/user')
    .post(CreateUser)
    .get(getAllUser)


router
    .route('/user/:userId')
    .get(getOneUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;