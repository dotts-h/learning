function deepEqual(o1, o2){
    if (o1 === null || o2 === null){
        console.log("\ttest for null");
        return false;
    }

    if (typeof o1 === "object" && typeof o2 === "object"){
        let o1Keys = Object.keys(o1);
        let o2Keys = Object.keys(o2);
        console.log("\ttest for object");
    
        if (o1Keys.length !== o2Keys.length){
            console.log("\ttest for keys length");
            return false;
        }

        for (let i = 0; i < o1Keys.length; i++){
            if (o1[o1Keys[i]] !== o2[o2Keys[i]]){
                console.log(`\t\tcompare keys index[${i}]`);
                return false;
            }
        }

        return true;
    }
    else if (typeof o1 === "object" || typeof o2 === "object"){
        console.log ("\ttest for if either one is object and the other not");
        return false;
    }

    console.log("\ttest for equality");
    return o1 === o2;
}

let o1 = [1, 2, 3];
let o2 = [1, 2, 3];
let o3 = {};
let o3_1 = null;
let o4 = {
    value: 1,
    test: "integer"
}
let o5 = {
    value: 1,
    test: "integer"
}
let o6 = {
    value: 1,
    test: "double"
}
let o6_1 = {
    value: 1,
    test: "double",
    item: {
        test: "float"
    }
}
let o7 = undefined;
let o8 = 10;
let o9 = 10;
let o10 = 11;
let o11 = "test";
let o12 = "test";
let o13 = "test_";

console.log("test array === array --> " + deepEqual(o1, o2));
console.log("test array !== empty_object --> " + deepEqual(o2, o3));
console.log("test array !== null_object --> " + deepEqual(o1, o3_1));
console.log("test array !== object --> " + deepEqual(o1, o4));
console.log("test array !== number --> " + deepEqual(o1, o8));
console.log("test array !== undefined --> " + deepEqual(o1, o7));
console.log("test object === object --> " + deepEqual(o4, o5));
console.log("test object !== object --> " + deepEqual(o4, o6));
console.log("test object !== object_higher_index --> " + deepEqual(o4, o6_1));
console.log("test object !== undefined --> " + deepEqual(o4, o7));
console.log("test object !== number --> " + deepEqual(o4, o8));
console.log("test object !== null_object --> " + deepEqual(o4, o3_1));
console.log("test number === number --> " + deepEqual(o8, o9));
console.log("test number !== number --> " + deepEqual(o8, o10));
console.log("test number !== null_object --> " + deepEqual(o8, o3_1));
console.log("test number !== undefined --> " + deepEqual(o8, o7));
console.log("test string === string --> " + deepEqual(o11, o12));
console.log("test string !== string --> " + deepEqual(o11, o13));