const User = require('../models/user')
const { ErrorObject } = require('../error')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAll()
        res.json(users)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.getById(id)
        if (!user){
            res.json('Error: User not found')
        }
        res.json(user)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getFirstUsers = async (req, res) => {
    //debe devolver los 3 primeros usuarios ordenados por ID
    try {
        const users = await User.firstThree()
        res.json(users)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

module.exports = { getAllUsers, getUserById, getFirstUsers}