const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getAll = () => {
    return fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
}

const getById = async (id) => {
    return  await fetch(`https://fakestoreapi.com/users/${id}`)
    .then(res=>res.json())
}

const firstThree = async () => {
    return await fetch('https://fakestoreapi.com/users?limit=3')
            .then(res=>res.json())
}

let User = {
    getAll,
    getById,
    firstThree
}

module.exports = User