const express = require('express')
const routes = require('./routes/router')
const path = require('path')

const app = express()
const port = 4000

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules', 'bulma')))
app.use(express.static(path.join(__dirname, 'node_modules', '@fortawesome', 'fontawesome-free')))

app.use('/', routes)

app.listen(port, (req, res) => {
    console.log(`we're listening to you at http://localhost:${port}`)
})