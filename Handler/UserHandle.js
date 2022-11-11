const UserModel = require ('../Model/UserModel')
const validateNewUser = require('../Validate')
const bcrypt = require ('bcrypt')


const CreateUser = async (req, res) => {
    try{

        const {error} = validateNewUser.validateUser()
        if(error){
            res.status(409).json({
                status: 409,
                message: error.message
            })
        } else{
            //validate user registration
            //first check if user exist in the database
            const oldUser = await UserModel.findOne({email: req.body.email})
            if(oldUser){
                res.json({message: `${oldUser.email} already exist`})
            }else{
                //the generate salt is the number of times the password will be salted
                const saltedPassword = await bcrypt.genSalt(10)
                //hash the salted password
                const hashedPassword = await bcrypt.hash(req.body.password, saltedPassword)
            

                 //create a user object..
            const newUser = {
            fullName: req.body.fullName,
            course: req.body.course,
            duration: req.body.duration,
            userName: req.body.userName,                                       
            email: req.body.email,
            password: hashedPassword
                }

                 //create user 
        const user = await UserModel.create(newUser)

        res.status(200).json({
            status: 'User Created Successfully',
            data: user
        })
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
    } catch(error){
        res.status(404).json({
            status:"failed",
            message: error.message
        })
    }
}

//SignUP function
const SignIn = async (req, res) => {
    try{
        const { error } = validateSignIn( req.body )
        if ( error ) {
            res.json( {
                message: error.details[0].message
            });
        } else {
            const user = await userModel.findOne( { email: req.body.email } )
            if ( !user ) {
                res.json( {
                    message: "User not recognized!!!"
                })
            } else {
                const passwordCheck = await bcrypt.compare( req.body.password, user.password )
                if ( !passwordCheck ) {
                    res.json({message: 'Invalid password'})
                } else {
                    const { password, ...info } = user._doc;
                    const token = jwt.sign(
                        // payload or data
                        {
                            _id: user._id,
                            fullName: user.fullName,
                            course: user.course,
                            duration: user.duration,
                            // username: user.username,
                            // email: user.email
                        },
                        // secrete
                        'mytoken',
                        // option
                        {expiresIn: '2d'}
                    )
                    res.json( {
                        message: `Welcome back ${user.fullName}`,
                        data: {token}
                    })
                }
            }
        }
    }catch(error){
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        } )
    }
}

const getOneUser = async (req, res) => {
    try{
        const userId = req.params.id;
        const newUser = await UserModel.findById(userId)

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

const getAllUser = async (req, res) => {
    try{
        const allUser = await UserModel.find();
        res.status(200).json({
            status:"All User",
            message: allUser
        })
    }catch(error){
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try{
        const userId = req.params.id;
        const updateOne = await UserModel.findByIdAndUpdate(userId, req.body, {new: true})

        res.status(200).json({
            status:"updated successfully",
            data: updateOne
        })
    }catch{
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try{
        const userId = req.params.id;
        const delUser = await UserModel.findByIdAndDelete(userId)

        res.status(200).json({
            status: 'deleted successfully',
            data: delUser
        })
    }catch(error){
        res.status(404).json({
            status:404,
            message: error.message
        })
    }
}
module.exports = {
    CreateUser,
    getOneUser,
    getAllUser,
    updateUser,
    deleteUser,
    SignIn
}