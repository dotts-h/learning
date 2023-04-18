function everything(array, predicate){
    for (let el of array){
        if (predicate(el) === false){
            return false;
        }
    }
    return true;
}

function everythingSome(array, predicate){
    return !array.some(element => predicate(element) === false);
}

function pred(element){
    return element >= 0;
}

let test1 = [0, 1, 2, 3, 4, 5];
console.log(everything(test1, pred));
console.log(everythingSome(test1, pred));

let test2 = [0, 1, -2, 3, 4];
console.log(everything(test2, pred));
console.log(everythingSome(test2, pred));