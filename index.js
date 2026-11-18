 
//11111111111111111111111111111111111111111111111111111111111111
/*

let num = "123";
let numAfterConvert = Number(num);

console.log(numAfterConvert + 7);
*/
///222222222222222222222222222222///////////////////////////
/*
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
})
rl.question("Please, Enter a value:" , (function(value){
  if(Number(value)){
    console.log("Valid");
  }
else{
  console.log("Invalid");
}
rl.close();
}))
*/
////3333333333333333333333333333333333//////////
/*
for(let i =1; i<10; i++){
  if(i % 2 === 0){
    continue;
  }
  console.log(i);
}
  */
//444444444444444444444444444444444444444444444444444444444444444444444
/*
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
})
rl.question("please, Enter numbers:" , (answer)=>{
  let arr = answer.split("").map(Number);

  console.log( arr.filter((num) => num % 2 === 0));
  rl.close();
})
*/
//55555555555555555555555555555555555555555555555555555555555555
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
*/
//666666666666666666666666666666666666666666666666666666666666
/*
const number = 4;

switch (number){
  case 1:
    console.log("sunday");
  break;
  case 2:
    console.log("monday");
    break;
    case 3:
      console.log("tusday");
      break;
      case 4:
        console.log("wednesday");
        break;
        
        case 5:
          console.log("thursdy");
          break;

          case 6:
          console.log("friday");
          break;

          case 7:
          console.log("saturday");
          break;
}
          */
  //7777777777777777777777777777777777777777777777777777777777777777777777777
  /*
  const arrOfStrings = ["a" , "ab" ,"abc"];
  const result = arrOfStrings.map((str)=> str.length);
  console.log(result);
*/
  //888888888888888888888888888888888888888888888888888888888888888
  /*
    const check = ()=>{
      const number = 15;
    if (number % 3 === 0 && number % 5 === 0){
      console.log("Divisible by both");
    }
      else {
        console.log("Not divisible by both");
      }
    }
    check();
    */
    //9999999999999999999999999999999999999999999999999999999999999999
/*
    const square = ()=>{
      const number = 5;
      const result = number * number;
      console.log(result);
    }
    square();
    */
    //1000000000000000000000000000000000000000000000000000000000000000000000
    /*
    function destruction(){
      const person = {
        name : "John",
        age :25
      }
      const {name, age}= person;
      console.log(`${name} is ${age} years old`);

    }
    destruction();
    */
    //111111111111111111111111111111111111111111111111111111111111111111
/*
    function sum(...numbers){
      let total = 0;
      for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
      }
      return total;
    }
    const result = sum(1,2,3,4,5);
    console.log(result);
*/
    //1222222222222222222222222222222222222222222222222222222222222
/*
    function test(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log("Success");
          resolve();
        }, 3000);
      })
    }
    test();
*/
    //133333333333333333333333333333333333333333333333333333333333
    /*
function maxNumber(...arr){
let max = arr[0];
for(let i = 0; i < arr.length; i++){
  if(arr[i]>max){
    max = arr[i];
  }
}
console.log(max);
}
maxNumber(1, 4, 7,9);
*/
//14444444444444444444444444444444444444444444444444444
/*
function print(){
  const obj ={name: "John", age: 25};
  const keys = Object.keys(obj);
  console.log(keys);
}
print();
*/
//1555555555555555555555555555555555555555555555555
/*
function printAfterSplit(){
  const input = "the quick brown fox";
  const words = input.split(" ");
  console.log(words);
}
printAfterSplit();
*/
/////////////////////////////////////////////////////////////////////

/*
1-the difference between forEach and for of is:
forEach is a method in array itself , and for of is a loop i can use it on any object
 i can use forEach when i want to iterate over an array and perform a specific action on each element, while for of is used to iterate over iterable objects like arrays, strings, maps, sets




 2- hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase
 temporal dead zone is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration, resulting in a ReferenceError if accessed before initialization. This is because these variables are in a "temporal dead zone" from the start of the block until the declaration is encountered.
for example(hoisting):
console.log(x);
var x = 10;
output: undefined

for example(temporal dead zone):
console.log(y);
let y = 20;
output: ReferenceError: Cannot access 'y' before initialization




 3-the difference between == and === is:
== is a loose equality operator that compares values for equality after performing type coercion if necessary, while === is a strict equality operator that compares both value and type without performing type coercion.



4- try-catch works in JavaScript by allowing you to handle exceptions that may occur during the execution of code. The code inside the try block is executed, and if an error occurs, control is transferred to the catch block, where you can handle the error gracefully without crashing the program.


5- the difference between type conversion and type coercion is:
Type conversion is the explicit conversion of a value from one type to another, while type coercion is the implicit conversion of a value from one type to another.
example of type conversion:
let num = "123";
let numAfterConvert = Number(num); 
example of type coercion:
let num2 = "123";
let result = num2 * 1;

*/
