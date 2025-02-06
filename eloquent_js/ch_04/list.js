function arrayToList(arr) {
    let list = {
        value: arr[0],
        rest: undefined
    }

    let itter = list;
    for (let i = 1; i < arr.length; i++) {
        itter.rest = {
            value: arr[i],
            rest: undefined
        }
        itter = itter.rest;
    }

    return list
}

function listToArray(list) {
    let arr = [];

    let itter = list;
    while (itter != undefined) {
        arr.push(itter.value);
        itter = itter.rest;
    }

    return arr;
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    }
}

function nth(list, index){
    let count = 0;
    let itter = list;

    while (itter != undefined){
        if (count === index){
            return itter.value;
        }
        itter = itter.rest;
        count++;
    }
    return undefined;
}

function nthRecursive(list, index){
    if (index === -1 || list === undefined){
        return undefined;
    }

    if (index === 0){
        return list.value;
    }
    
    return nthRecursive(list.rest, index - 1);
}

console.log(arrayToList([10, 20])); // { value: 10, rest: { value: 20, rest: null } }
console.log(arrayToList([10, 20, 30])); // { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }

console.log(listToArray(arrayToList([10, 20, 30]))); // [10, 20, 30]
console.log(listToArray(arrayToList([10, 20]))); // [10, 20]

console.log(prepend(10, arrayToList([20, 30]))); // { value: 10, rest: { value: 10, rest: { value: 20, rest: null } } }
console.log(prepend(10, arrayToList([20, 30, 40]))); // { value: 10, rest: { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } } }

console.log(nth(arrayToList([10, 20, 30]), 1)); // 20
console.log(nth(arrayToList([10, 20, 30]), 2)); // 30
console.log(nth(arrayToList([10, 20, 30]), 3)); // undefined

console.log(nthRecursive(arrayToList([10, 20, 30]), 1)); // 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 2)); // 30
console.log(nthRecursive(arrayToList([10, 20, 30]), 3)); // undefined