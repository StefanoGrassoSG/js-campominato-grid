
function gnrNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(gnrNumber(1, 100))