const printDate = (req, res, next) => {
    const today = req.date
    req.date = new Date()
    next()
}