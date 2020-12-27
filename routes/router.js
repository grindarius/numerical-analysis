const express = require('express')
const path = require('path')

const bisectionRouter = require('./bisectionRouter')
const falsePositionRouter = require('./falsePositionRouter')
const fixedPointRouter = require('./fixedPointRouter')
const secantRouter = require('./secantRouter')
const newtonRalphsonRouter = require('./newtonRalphsonRouter')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'))
})

router.use('/bisection', bisectionRouter)
router.use('/false-position', falsePositionRouter)
router.use('/fixed-point-iteration', fixedPointRouter)
router.use('/secant', secantRouter)
router.use('/newton-ralphson', newtonRalphsonRouter)

module.exports = router