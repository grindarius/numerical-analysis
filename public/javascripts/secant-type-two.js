const { evaluateFunction, absoluteError, round } = require('./helper-functions')

const secantTwoIteration = (expression, a, b, iteration, decimalPoints, previousC = 0) => {
    let answerArray = []

    for (let i = 1; i <= iteration; i++) {
        console.log(`iteration number ${i}`)

        if (i === 1) {
            let answerObject = {}

            answerObject.i = i
            answerObject.c = a
            answerObject.fc = round(evaluateFunction(expression, a), decimalPoints)
            answerObject.tolerance = 'initial value'

            answerArray.push(answerObject)

            console.log(`c = ${a}`)
            console.log(`f(c) = ${round(evaluateFunction(expression, a), decimalPoints)}`)
            console.log(`tolerance = initial value`)
            console.log('\n---------------------------------\n')
        } else if (i === 2) {
            let answerObject = {}

            answerObject.i = i
            answerObject.c = b
            answerObject.fc = round(evaluateFunction(expression, b), decimalPoints)
            answerObject.tolerance = 'initial value'

            answerArray.push(answerObject)

            console.log(`c = ${b}`)
            console.log(`f(c) = ${round(evaluateFunction(expression, b), decimalPoints)}`)
            console.log(`tolerance = initial value`)
            console.log('\n---------------------------------\n')
        } else {
            // * find f(a) f(b)
            const fa = round(evaluateFunction(expression, a), decimalPoints)
            const fb = round(evaluateFunction(expression, b), decimalPoints)

            // * find c, f(c)
            const c = round(b - ((fb * (b - a)) / (fb - fa)), decimalPoints)
            const fc = round(evaluateFunction(expression, c), decimalPoints)

            // * find tolerance
            const tolerance = round(absoluteError(c, previousC), decimalPoints)

            let answerObject = {}

            answerObject.i = i
            answerObject.c = c
            answerObject.fc = fc
            answerObject.tolerance = tolerance

            answerArray.push(answerObject)

            console.log(`c = ${c}`)
            console.log(`f(c) = ${fc}`)
            console.log(`tolerance = ${tolerance}`)
            console.log('\n---------------------------------\n')

            // * a becomes b, and b becomes c
            a = b
            b = c
            previousC = c
        }
    }

    return answerArray
}

const secantTwoTolerance = (expression, a, b, setTolerance, decimalPoints, previousC = 0) => {
    let answerArray = []
    let i = 1
    let tolerance = 100

    do {
        if (i === 1) {
            let answerObject = {}

            answerObject.i = i
            answerObject.c = a
            answerObject.fc = round(evaluateFunction(expression, a), decimalPoints)
            answerObject.tolerance = 'initial value'

            answerArray.push(answerObject)

            console.log(`c = ${a}`)
            console.log(`f(c) = ${round(evaluateFunction(expression, a), decimalPoints)}`)
            console.log(`tolerance = initial value`)
            console.log('\n---------------------------------\n')
        } else if (i === 2) {
            let answerObject = {}

            answerObject.i = i
            answerObject.c = b
            answerObject.fc = round(evaluateFunction(expression, b), decimalPoints)
            answerObject.tolerance = 'initial value'

            answerArray.push(answerObject)

            console.log(`c = ${b}`)
            console.log(`f(c) = ${round(evaluateFunction(expression, b), decimalPoints)}`)
            console.log(`tolerance = initial value`)
            console.log('\n---------------------------------\n')
        } else {
            // * find f(a) f(b)
            const fa = round(evaluateFunction(expression, a), decimalPoints)
            const fb = round(evaluateFunction(expression, b), decimalPoints)

            // * find c, f(c)
            const c = round(b - ((fb * (b - a)) / (fb - fa)), decimalPoints)
            const fc = round(evaluateFunction(expression, c), decimalPoints)

            // * find tolerance
            tolerance = round(absoluteError(c, previousC), decimalPoints)

            let answerObject = {}

            answerObject.i = i
            answerObject.c = c
            answerObject.fc = fc
            answerObject.tolerance = tolerance

            answerArray.push(answerObject)

            console.log(`c = ${c}`)
            console.log(`f(c) = ${fc}`)
            console.log(`tolerance = ${tolerance}`)
            console.log('\n---------------------------------\n')

            // * a becomes b, and b becomes c
            i += 1
            a = b
            b = c
            previousC = c
        }
    } while (typeof tolerance === 'string' || (!(tolerance < setTolerance)))

    return answerArray
}

const secantTwoZero = () => {
    let answerArray = []
    let i = 1
    let fc = 0

    do {
        if (i === 1) {
            let answerObject = {}

            answerObject.i = i
            answerObject.c = a
            answerObject.fc = round(evaluateFunction(expression, a), decimalPoints)
            answerObject.tolerance = 'initial value'

            answerArray.push(answerObject)

            console.log(`c = ${a}`)
            console.log(`f(c) = ${round(evaluateFunction(expression, a), decimalPoints)}`)
            console.log(`tolerance = initial value`)
            console.log('\n---------------------------------\n')
        } else if (i === 2) {
            let answerObject = {}

            answerObject.i = i
            answerObject.c = b
            answerObject.fc = round(evaluateFunction(expression, b), decimalPoints)
            answerObject.tolerance = 'initial value'

            answerArray.push(answerObject)

            console.log(`c = ${b}`)
            console.log(`f(c) = ${round(evaluateFunction(expression, b), decimalPoints)}`)
            console.log(`tolerance = initial value`)
            console.log('\n---------------------------------\n')
        } else {
            // * find f(a) f(b)
            const fa = round(evaluateFunction(expression, a), decimalPoints)
            const fb = round(evaluateFunction(expression, b), decimalPoints)

            // * find c, f(c)
            const c = round(b - ((fb * (b - a)) / (fb - fa)), decimalPoints)
            fc = round(evaluateFunction(expression, c), decimalPoints)

            // * find tolerance
            const tolerance = round(absoluteError(c, previousC), decimalPoints)

            let answerObject = {}

            answerObject.i = i
            answerObject.c = c
            answerObject.fc = fc
            answerObject.tolerance = tolerance

            answerArray.push(answerObject)

            console.log(`c = ${c}`)
            console.log(`f(c) = ${fc}`)
            console.log(`tolerance = ${tolerance}`)
            console.log('\n---------------------------------\n')

            // * a becomes b, and b becomes c
            i += 1
            a = b
            b = c
            previousC = c
        }
    } while (fc !== 0)
}

module.exports = { secantTwoIteration, secantTwoTolerance, secantTwoZero }