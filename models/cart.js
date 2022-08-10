const { response } = require('express')
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
    const carrito =  await carts.filter((cart) => cart.products.length > 1)
        /*if {
       const usuarios = users.filter((user) => {
          if (user.id === cart.userId){
            const response = {
              name: user.name,
              carts: JSON.stringify(cart)
            }
            console.log(response)
            
          }
          
        })

        return  usuarios
     }
    })
        
     //return response*/

    return carrito
    
    
}

let Cart = {
    getAll,
    getById,
    getUserCarts,
    bigCarts
}

module.exports = Cart