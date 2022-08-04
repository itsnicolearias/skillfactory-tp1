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
        const { id } = req.params
        const product = await Product.getById(req.params.id)
        if (!product){
            throw new ErrorObject('Product not found', 404)
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
        const name = req.params
        const category = await Product.getByCategory(name)
         return res.json(category)
       
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

const getByPrices = async (req, res) => {
    ///prices debe devolver una lista de productos que tengan id, titulo y precio 
    //de cada producto y que se pueda ordenar por precio 
    //y se pueda elegir si en orden ascendiente o descendiente a traves de un query “order”

}

const getExpensiveProducts = async (req, res) => {
    //debe devolver todos los productos que sean los más caros de su categoria

}
module.exports = { 
    getAllProducts,
    getAllCategories, 
    getByPrices, 
    getExpensiveProducts, 
    getProductById,
    getCategoryByName
 }