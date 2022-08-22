const User = require('./user')

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

let bigCarts = async () => {
    const carts = await getAll()
    const users = await User.getAll()
    
  const response = await carts.filter((cart) => {
        if (cart.products.length > 1) {
           const user = users.filter((user) => user.id === cart.userId)  
           cart.user = user.name
                return cart
          }
   
    })
    return response
}

let Cart = {
    getAll,
    getById,
    getUserCarts,
    bigCarts
}

module.exports = Cart