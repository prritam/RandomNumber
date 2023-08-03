const prompt = require("prompt-sync")();
const target=Math.round(Math.random()*100);
console.log(target);

const predict = prompt("Predict the random number");

if(predict>target){
    console.log("Try lower value");
}
if(predict<target){
    console.log("Try Higher value");
}
else{
    console.log("your guess is correct");
}