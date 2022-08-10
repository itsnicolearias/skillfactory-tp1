const Product = require('../models/product')
const { ErrorObject } = require('../error')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.getAll()
        res.json(products)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getProductById = async (req, res) => {
    try {
        const  id = req.params.id
        const product = await Product.getById(id)
        if (!product){
            res.json('Error: Product not found')
        }
        res.json(product)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getAllCategories = async (req, res) => {
    try {
        const categories = await Product.getCategories()
        res.json(categories)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getCategoryByName = async (req, res) => {
    try {
        const name = req.params.name
        const category = await Product.getByCategory(name)
        if (!category){
            res.json('Error: Category not found')
        }
        return res.json(category)
       
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getByPrices = async (req, res) => {
    try {
        const order = req.query.order
        const products = await Product.getByPrices(order)
        res.json(products)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getExpensiveProducts = async (req, res) => {
    //debe devolver todos los productos que sean los más caros de su categoria
    try {
        const name = req.query.name
        const expensives = await Product.expensives(name)
        if (!expensives){
            throw new ErrorObject('Category with name not found', 404)
        }
        res.json(expensives)
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}
module.exports = { 
    getAllProducts,
    getAllCategories, 
    getByPrices, 
    getExpensiveProducts, 
    getProductById,
    getCategoryByName
 }