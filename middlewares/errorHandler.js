const notFound = (req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    return next(err);
}

const errorHandler = {
    notFound
}

module.exports = errorHandler;