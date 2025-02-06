function range(start, end, step = 1) {
    let arr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }

    return arr;
}

function sum(arr) {
    let total = 0;
    for (let nr of arr) {
        total += nr;
    }
    return total;
}

console.log(sum(range(1, 10))); // 55
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(5, 2, -1)); // [5, 4, 3, 2]