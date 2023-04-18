let arrayOfArrays = [ [0, 1],
                    [1, 2],
                    [2, 3], 
                    [4, 5, 6],
                    [7, 8, 0, 10]];

let array = arrayOfArrays.reduce((prev, cur) => prev.concat(cur));

console.log(arrayOfArrays);
console.log(array);