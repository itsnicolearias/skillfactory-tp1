const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getAll = () => {
    return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
    
}

let getById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
}

let getCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
}

async function getByCategory(name) {
    return fetch(`https://fakestoreapi.com/products/category/${name}`)
            .then(res => res.json())
}

async function getByPrices(order) {
    const products = await getAll()
    const orderProducts = products.map(p => ({
            id: p.id,
            title: p.title,
            price: p.price
       }))
    if (order === 'ASC'){
        return orderProducts.sort((a,b) => a.price - b.price)
    } else if (order === 'DESC'){
        return orderProducts.sort((a,b) => b.price - a.price)
    } return orderProducts;
    
}
let Product = {
    getAll,
    getById,
    getCategories,
    getByCategory,
    getByPrices
}

module.exports = Product