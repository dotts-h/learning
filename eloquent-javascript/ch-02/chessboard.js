let size = 9;
const filled = "#";
const empty = " ";

for (let i = 0; i < size; i++){
    let output = "";
    for (let j = 0; j < size; j++){
        if (i % 2 === 0){
            if (j % 2 === 0){
                output += empty;
            }
            else {
                output += filled;
            }
        } else {
            if (j % 2 === 0){
                output += filled;
            }
            else {
                output += empty;
            }
        }
    }
    console.log(output);
}