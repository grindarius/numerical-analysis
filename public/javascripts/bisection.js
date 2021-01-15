const { evaluateFunction, absoluteError, round } = require('./helper-functions')

const bisectionIteration = (expression, a, b, iteration, decimalPoints, previousC = 0) => {
    let answerArray = []

    for (let i = 0; i < iteration; i++) {
        console.log(`iteration number ${i + 1}`)

        // * find f(a), f(b)
        const fa = round(evaluateFunction(expression, a), decimalPoints)
        const fb = round(evaluateFunction(expression, b), decimalPoints)
        
        // * find c
        const c = round((a + b) / 2, decimalPoints)

        // * find f(c)
        const fc = round(evaluateFunction(expression, c), decimalPoints)

        // * find tolerance
        const tolerance = round(absoluteError(c, previousC), decimalPoints)
        
        let answerObject = {}
        
        answerObject.i = i + 1
        answerObject.a = a
        answerObject.b = b
        answerObject.c = c
        answerObject.fa = fa
        answerObject.fb = fb
        answerObject.fc = fc
        answerObject.tolerance = tolerance
        
        answerArray.push(answerObject)
        
        console.log(`a = ${a}`)
        console.log(`b = ${b}`)
        console.log(`c = ${c}`)
        console.log(`f(a) = ${fa}`)
        console.log(`f(b) = ${fb}`)
        console.log(`f(c) = ${fc}`)
        console.log(`tolerance = ${tolerance}%`)
        console.log('\n---------------------------------\n')
        
        // * compare f(a) * f(c)
        if (fa * fc < 0) {
            b = c
        } else if (fa * fc > 0) {
            a = c
        }

        previousC = c
    }

    return answerArray
}

const bisectionTolerance = (expression, a, b, setTolerance, decimalPoints, previousC = 0) => {
    let answerArray = []
    let i = 0
    let tolerance = 100

    do {
        console.log(`iteration number ${i + 1}`)

        // * find f(a), f(b)
        const fa = round(evaluateFunction(expression, a), decimalPoints)
        const fb = round(evaluateFunction(expression, b), decimalPoints)

        // * find c
        const c = round((a + b) / 2, decimalPoints)

        // * find f(c)
        const fc = round(evaluateFunction(expression, c), decimalPoints)

        // * find tolerance
        tolerance = round(absoluteError(c, previousC), decimalPoints)

        let answerObject = {}

        answerObject.i = i + 1
        answerObject.a = a
        answerObject.b = b
        answerObject.c = c
        answerObject.fa = fa
        answerObject.fb = fb
        answerObject.fc = fc
        answerObject.tolerance = tolerance

        answerArray.push(answerObject)

        console.log(`a = ${a}`)
        console.log(`b = ${b}`)
        console.log(`c = ${c}`)
        console.log(`f(a) = ${fa}`)
        console.log(`f(b) = ${fb}`)
        console.log(`f(c) = ${fc}`)
        console.log(`tolerance = ${tolerance}%`)
        console.log('\n---------------------------------\n')

        // * compare f(a) * f(c)
        if (fa * fc < 0) {
            b = c
        } else if (fa * fc > 0) {
            a = c
        }

        i += 1
        previousC = c
    } while (!(tolerance < setTolerance))

    return answerArray
}

const bisectionZero = (expression, a, b, decimalPoints, previousC = 0) => {
    let answerArray = []
    let i = 0
    let tolerance = 100
    let fc

    do {
        console.log(`iteration number ${i + 1}`)

        // * find f(a), f(b)
        const fa = round(evaluateFunction(expression, a), decimalPoints)
        const fb = round(evaluateFunction(expression, b), decimalPoints)

        // * find c
        const c = round((a + b) / 2, decimalPoints)

        // * find f(c)
        const fc = round(evaluateFunction(expression, c), decimalPoints)

        // * find tolerance
        tolerance = round(absoluteError(c, previousC), decimalPoints)

        let answerObject = {}

        answerObject.i = i + 1
        answerObject.a = a
        answerObject.b = b
        answerObject.c = c
        answerObject.fa = fa
        answerObject.fb = fb
        answerObject.fc = fc
        answerObject.tolerance = tolerance

        answerArray.push(answerObject)

        console.log(`a = ${a}`)
        console.log(`b = ${b}`)
        console.log(`c = ${c}`)
        console.log(`f(a) = ${fa}`)
        console.log(`f(b) = ${fb}`)
        console.log(`f(c) = ${fc}`)
        console.log(`tolerance = ${tolerance}%`)
        console.log('\n---------------------------------\n')

        // * compare f(a) * f(c)
        if (fa * fc < 0) {
            b = c
        } else if (fa * fc > 0) {
            a = c
        }

        i += 1
        previousC = c
    } while (fc !== 0)

    return answerArray
}

module.exports = { bisectionTolerance, bisectionIteration, bisectionZero }