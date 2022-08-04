const { ErrorObject } = require('../error')
const Cart = require('../models/cart')

const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.getAll()
        res.status(200).json(carts)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getCartById = async (req, res) => {

}

const getUserCart = async (req, res) => {

}

const getBigCarts = async (req, res) => {
    //debe devolver todos los carritos que tengan más de 2 productos 
    //y que diga el nombre del usuario que ordeno ese carrito
}

module.exports = { getAllCarts, getBigCarts, getCartById, getUserCart }