function countBs(str){
    return countChar(str, 'B')
}

function countChar(str, char){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === char){
            count++;
        }
    }
    return count;
}

console.log(countBs("Better than Ever Before"));
console.log(countChar("whatever is going on", 'o'));