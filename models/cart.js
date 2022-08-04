const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getAll = () => {
    return fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json())
}

let getById = async (id) => {
    return await fetch(`https://fakestoreapi.com/carts/${id}`)
    .then(res=>res.json())
}

let getUserCarts = async (userId) => {
    return await fetch(`https://fakestoreapi.com/carts/user/${userId}`)
    .then(res=>res.json())
}

let Cart = {
    getAll,
    getById,
    getUserCarts
}

module.exports = Cart