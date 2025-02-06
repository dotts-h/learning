function deepEqual(obj1, obj2) {
    if (!typeof(obj1) === 'object' || !typeof(obj2) === 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (keys2.includes(key)){
            if (obj1[key] !== obj2[key]){
                return false;
            } else {
                if (!deepEqual(obj1[key], obj2[key])){
                    return false;
                }
            }
        }
    }
    return true
}

console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2})); // true
console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 3})); // false