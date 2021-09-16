var sum = (...x) => {
    var total = 0;
    for(i in x) {
        total += x[i];
    }
    return "Total: " + total;
}

sum(2, 3, 9); //Can add any number of parameters