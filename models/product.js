const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getAll = () => {
    return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
    
}

let getById = () => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
}

let getCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
}

async function getByCategory(name) {
    const res = await fetch(`https://fakestoreapi.com/products/category/` + name)
    return await res.json()
}

let Product = {
    getAll,
    getById,
    getCategories,
    getByCategory
}

module.exports = Product