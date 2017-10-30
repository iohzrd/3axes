
z = 106
for (var a = 0; a < z; a += 15) {
    for (var b = 0; b < z; b += 15) {
        for (var c = 0; c < z; c += 15) {
            if (a === 105) {a = 100}
            if (b === 105) {b = 100}
            if (c === 105) {c = 100}
            console.log(`?i=${a}.0&p=${b}.0&s=${c}.0`)
        }
    }
}