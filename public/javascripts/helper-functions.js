const math = require('mathjs')

const evaluateFunction = (expression, x) => {
    return math.evaluate(expression, { x: x })
}

const absoluteError = (b, a) => {
    return Math.abs((b - a) / b) * 100
}

const round = (numberToRound, decimalPoint) => {
    if (decimalPoint <= 0) return numberToRound
    else return Math.round(numberToRound * Math.pow(10, decimalPoint)) / Math.pow(10, decimalPoint)
}

module.exports = { evaluateFunction, absoluteError, round }