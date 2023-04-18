function loop(value, testFunction, updateFunction, bodyFunction){
    for (let i = value; testFunction(i); i = updateFunction(i)){
        bodyFunction();
    }
}