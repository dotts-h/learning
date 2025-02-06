char1 = ' ';
char2 = '#';

for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        console.log((char1 + char2).repeat(4));
    } else {
        console.log((char2 + char1).repeat(4));
    }
}