function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

const doubleIt =function myFUn(num){
    return num * 2;
}
const result = doubleIt(7);
console.log(result);

const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

const add = (x,y) => x + y;
const result = add(50,70);
console.log(result);

const give5 = () => 5;
const result2 = give5();
console.log(result2);

const doMath = (x,y) =>{
    const sum = x + y;
    const different = x - y;
    const result = sum * different;
    return result;
}
const result3 = doMath(7,5);
console.log(result3);
