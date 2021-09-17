const sum = (...x) => {
    let total = 0;
    for(i in x) {
        total += x[i];
    }
    return total;
}

console.log(`Total : ${sum(2, 3, 9)}`); //Can add any number of parameters