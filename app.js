const express = require('express')
const indexRouter = require('./routes/index')
const morgan = require('morgan')
const logger = require('./middlewares/logger')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use(logger)

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('Server running')
})