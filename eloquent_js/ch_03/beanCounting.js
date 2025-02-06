function countChar(str, char) {
    let count = 0;

    for (ch of str){
        if (ch == char) count++;
    }

    return count;
}

function countBs(str) {
    return countChar(str, 'B');
}

console.log(countBs('BBC')); // 2
console.log(countChar('kakkerlak', 'k')); // 4