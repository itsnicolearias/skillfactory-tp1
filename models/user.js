const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getAll = () => {
    return fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
}

const getById = async (id) => {
    return  await fetch(`https://fakestoreapi.com/users/`+ id)
    .then(res=>res.json())
}

let User = {
    getAll,
    getById
}

module.exports = User