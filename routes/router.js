const express = require('express')
const path = require('path')

const bisectionRouter = require('./bisection-router')
const falsePositionRouter = require('./false-position-router')
const fixedPointRouter = require('./fixed-point-router')
const secantRouter = require('./secant-router')
const newtonRalphsonRouter = require('./newton-ralphson-router')

const router = express.Router()

router.get('/', (req, res) => {
    res.set('Cache-control', 'public, max-age=300', 's-maxage=600')
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'))
})

router.use('/bisection', bisectionRouter)
router.use('/false-position', falsePositionRouter)
router.use('/fixed-point-iteration', fixedPointRouter)
router.use('/secant', secantRouter)
router.use('/newton-ralphson', newtonRalphsonRouter)

module.exports = router