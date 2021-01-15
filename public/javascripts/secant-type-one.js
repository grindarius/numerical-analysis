const { evaluateFunction, absoluteError, round } = require('./helper-functions')

const secantOneIteration = (expression, a, b, iteration, decimalPoints, previousC = 0) => {
    let answerArray = []
    
    for (let i = 1; i <= iteration; i++) {
        console.log(`iteration number ${i}`)

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

        // * a becomes b, and b becomes c
        a = b
        b = c
        previousC = c
    }

    return answerArray
}

const secantOneTolerance = (expression, a, b, setTolerance, decimalPoints, previousC = 0) => {
    let answerArray = []
    let i = 1
    let tolerance = 100

    do {
        console.log(`iteration number ${i}`)

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

        // * a becomes b, and b becomes c
        i += 1
        a = b
        b = c
        previousC = c
    } while (!(tolerance < setTolerance))

    return answerArray
}

const secantOneZero = (expression, a, b, decimalPoints, previousC = 0) => {
    let answerArray = []
    let i = 1
    let fc = 0

    do {
        console.log(`iteration number ${i}`)

        // * find f(a) f(b)
        const fa = round(evaluateFunction(expression, a), decimalPoints)
        const fb = round(evaluateFunction(expression, b), decimalPoints)

        // * find c, f(c)
        const c = round(b - ((fb * (b - a)) / (fb - fa)), decimalPoints)
        fc = round(evaluateFunction(expression, c), decimalPoints)

        // * find tolerance
        tolerance = round(absoluteError(c, previousC), decimalPoints)

        let answerObject = {}

        answerObject.i = i
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

        // * a becomes b, and b becomes c
        i += 1
        a = b
        b = c
        previousC = c
    } while (fc !== 0)
}

module.exports = { secantOneIteration, secantOneTolerance, secantOneZero }