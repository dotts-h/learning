function range(start, end, step = 1){
    let array = [];

    if (start > end){
        for (let i = start; i >= end; i += step){
            array.push(i);
        }
        return array;
    }

    for (let i = start; i <= end; i += step){
        array.push(i);
    }
    return array;
}

function sum(array){
    let sum = 0;
    for (let i of array){
        sum += i;
    }
    return sum;
}

let test1 = range(1, 10, 2);
console.log(test1);
console.log(sum(test1));

let test2 = range(5, 2, -1);
console.log(test2);
console.log(sum(test2));