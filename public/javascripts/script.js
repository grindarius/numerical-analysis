function showIteration() {
    document.getElementById('iteration').style.display = 'block'
    document.getElementById('iteration').required = true

    document.getElementById('tolerance').style.display = 'none'
    document.getElementById('tolerance').required = false
}

function showTolerance() {
    document.getElementById('tolerance').style.display = 'block'
    document.getElementById('tolerance').required = true

    document.getElementById('iteration').style.display = 'none'
    document.getElementById('iteration').required = false
}

function resetIterationToleranceView() {
    document.getElementById('iteration').style.display = 'none'
    document.getElementById('iteration').required = false

    document.getElementById('tolerance').style.display = 'none'
    document.getElementById('tolerance').required = false
}
