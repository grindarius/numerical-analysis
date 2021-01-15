const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
    res.set('Cache-control', 'public, max-age=300', 's-maxage=600')
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'newton-ralphson.html'))
})

module.exports = router