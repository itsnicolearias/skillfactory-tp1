const logger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] [${req.method}] at ${req.url}`)
    next()
}

module.exports = logger