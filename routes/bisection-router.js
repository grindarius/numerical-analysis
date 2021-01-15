const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { bisectionTolerance, bisectionIteration, bisectionZero } = require('../public/javascripts/bisection')

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    res.set('Cache-control', 'public, max-age=300', 's-maxage=600')
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'bisection.html'))
})

router.post('/answer', (req, res) => {
    console.log(req.body)
    const data = req.body
    let answer

    if (data.findUsing === 'time') {
        answer = bisectionIteration(data.expression, parseFloat(data.start), parseFloat(data.end), parseInt(data.iteration), parseInt(data.decimalPoints))
    } else if (data.findUsing === 'tole') {
        answer = bisectionTolerance(data.expression, parseFloat(data.start), parseFloat(data.end), parseFloat(data.tolerance), parseInt(data.decimalPoints))
    } else if (data.findUsing === 'until') {
        answer = bisectionZero(data.expression, parseFloat(data.start), parseFloat(data.end), parseInt(data.decimalPoints))
    } else {
        throw 'Radio select is not selected'
    }

    res.render('bisection-answer', { answer: answer })
})

module.exports = router