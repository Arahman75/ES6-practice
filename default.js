function add(num1,num2){
    return num1 + num2;
}
const total = add(12,8);
console.log(total);

function add(num1,num2){
    return num1 + num2;
}
const total = add(12);
console.log(total);

function add(num1,num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(12);
console.log(total);

function add(num1,num2){
    num2 = num2 || 0;
    return num1 + num2;
}
const total = add(12);
console.log(total);

function add(num1,num2){
    num2 = num2 || 20;
    return num1 + num2;
}
const total = add(12);
console.log(total);

function add(num1,num2 = 20){
   
    return num1 + num2;
}
const total = add(12,3);
console.log(total);