const jwt = require('jsonwebtoken')
const User = require("../services/users/schema")

//function that gives us a user and gets a token
const authenticate = async (user) => {
    try {
        //generate tokens
        const newToken = await generateJWT({ id: user._id })
        console.log(newToken)
        return newToken
    } catch (error) {
        console.log(error)
        throw new Error("problem with authenitcation")
    }
}

const generateJWT = (payload) => new Promise((res, rej) => {
    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '5h' },
        (err, token) => {
            if (err) rej(err)
            res(token)
        })
})


const verifyJWT = (token) =>
    new Promise((res, rej) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
            if (err) rej(err)
            res(verified)
        })
    })
module.exports = { authenticate, verifyJWT }