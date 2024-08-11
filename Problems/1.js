/*
write a javascript prgm to check two numbers ans return true if one of the number is 100 
or 
if the sum of the two number is 100
*/
// 1
function twoinputs (a,b){
if (a === 100 || b === 100){
    return true
}else if(a+b === 100){
 return true
}else{
    return false
}
}

console.log(twoinputs(10,90));
// 2
const checkEqualto100 =(a,b)=>a===100 || b===100 || (a+b) === 100;
console.log(checkEqualto100(80,20));
