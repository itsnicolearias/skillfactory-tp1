const { ErrorObject } = require('../error')
const Cart = require('../models/cart')

const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.getAll()
        res.json(carts)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getCartById = async (req, res) => {
    try {
        const id = req.params.id
        const cart = await Cart.getById(id)
        if (!cart){
            res.json('Error: Cart not found')
        }
        res.json(cart)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getUserCart = async (req, res) => {
    try {
        const userId = req.params.userId
        const carts = await Cart.getUserCarts(userId)
        if (!carts){
            res.json('Error: Invalid user')
        }
        res.json(carts)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getBigCarts = async (req, res) => {
    //debe devolver todos los carritos que tengan más de 2 productos 
    //y que diga el nombre del usuario que ordeno ese carrito
    try {
        const carts = await Cart.bigCarts()
        res.json(carts)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

module.exports = { getAllCarts, getBigCarts, getCartById, getUserCart }