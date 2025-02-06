function reverseArray(arr){
    let _arr = [];
    for (let i = arr.length - 1; i >=0 ; i--){
        _arr.push(arr[i]);
    }
    return _arr;
}

function reverseArrayInPlace(arr){
    for (let i = 0, j = arr.length - 1; i < j; i++, j--){
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
}

let arr = [1, 2, 3, 4, 5];
console.log("reversed", reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log("original", arr); // [1, 2, 3, 4, 5]
reverseArrayInPlace(arr);
console.log("reversed in place", arr); // [5, 4, 3, 2, 1]