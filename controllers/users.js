const User = require('../models/user')
const { ErrorObject } = require('../error')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAll()
        res.status(200).json(users)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params
        const user = await User.getById(id)
        res.status(200).json(user)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getFirstUsers = async (req, res) => {
    //debe devolver los 3 primeros usuarios ordenados por ID
}

module.exports = { getAllUsers, getUserById, getFirstUsers}