function reverseArray(array){
    let result = [];

    for (let i = array.length-1; i >= 0; i--){
        result.push(array[i]);
    }

    return result;
}

function reverseArrayInPlace(array){
    for (let i = 0, j = array.length-1; i < array.length/2; i++, j--){
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
}

let test1 = [ 1, 2, 3, 4, 5 ];
console.log(reverseArray(test1));
console.log(test1);
reverseArrayInPlace(test1);
console.log(test1);

let test2 = [ 2, 4, 3, 6, 5, 6];
console.log(reverseArray(test2));
console.log(test2);
reverseArrayInPlace(test2);
console.log(test2);