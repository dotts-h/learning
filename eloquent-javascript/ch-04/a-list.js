function arrayToList(array){
    let list = {};
    let next = list;

    for (let i of array){
        next.value = i;
        next.rest = {};
        next = next.rest;
    }

    return list;
}

let test1 = [ 1, 2, 3 ];
let obj1 = arrayToList(test1);
console.log(obj1);

function listToArray(list){
    let array = [];
    let counter = list;

    while (counter.rest != null){
        array.push(counter.value);
        counter = counter.rest;
    }

    return array;
}

console.log(listToArray(obj1));

function prepend(el, list){
    return {
        value: el,
        rest: list
    }
}

let obj2 = prepend (2, obj1);
console.log(obj2);

function nth(list, index){
    if (list === null){
        return undefined;
    }

    let counterIndex = 0;
    let counter = list;
    while (counter != null){
        if (counterIndex === index){
            return counter.value;
        }
        counter = counter.rest;
        counterIndex++;
    }

    return undefined;
}

console.log(nth(obj1, 1));
console.log(nth(obj2, 1));
console.log(nth({}));
console.log(nth(obj1, 10));

function nthRecursive(list, index){
    if (list == null){
        return undefined;
    }
    
    if (index == 0){
        return list.value;
    }

    return nthRecursive(list.rest, index-1);
}

console.log(nthRecursive(obj1, 1));
console.log(nthRecursive(obj2, 1));
console.log(nthRecursive({}));
console.log(nthRecursive(obj1, 10));