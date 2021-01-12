const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { secantOneIteration, secantOneTolerance, secantOneZero } = require('../public/javascripts/secant-type-one')
const { secantTwoIteration, secantTwoTolerance, secantTwoZero } = require('../public/javascripts/secant-type-two')

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'secant.html'))
})

router.post('/answer', (req, res) => {
    console.log(req.body)
    const data = req.body
    let answer

    if (data.findUsing === 'time') {
        if (data.graphType === 'one') {
            answer = secantOneIteration(data.expression, parseFloat(data.start), parseFloat(data.end), parseInt(data.iteration), parseInt(data.decimalPoints))
        } else if (data.graphType === 'two') {
            answer = secantTwoIteration(data.expression, parseFloat(data.start), parseFloat(data.end), parseInt(data.iteration), parseInt(data.decimalPoints))
        }
    } else if (data.findUsing === 'tole') {
        if (data.graphType === 'one') {
            answer = secantOneTolerance(data.expression, parseFloat(data.start), parseFloat(data.end), parseFloat(data.tolerance), parseInt(data.decimalPoints))
        } else if (data.graphType === 'two') {
            answer = secantTwoTolerance(data.expression, parseFloat(data.start), parseFloat(data.end), parseFloat(data.tolerance), parseInt(data.decimalPoints))
        }
    } else if (data.findUsing === 'until') {
        if (data.graphType === 'one') {
            answer = secantOneZero(data.expression, parseFloat(data.start), parseFloat(data.end), parseInt(data.decimalPoints))
        } else if (data.graphType === 'two') {
            answer = secantTwoZero(data.expression, parseFloat(data.start), parseFloat(data.end), parseInt(data.decimalPoints))
        }
    } else {
        throw 'Radio select is not selected'
    }

    if (data.graphType === 'one') {
        res.render('secant-answer-one', { answer: answer })
    } else if (data.graphType === 'two') {
        res.render('secant-answer-two', { answer: answer })
    } else {
        throw 'unknown graph type'
    }
})

module.exports = router