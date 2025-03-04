let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => Nan
// true => 1; false=>0

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn);
console.log(typeof booleanisLoggedIn)

// 1=> true; 0=> false;
// ""=>false


let isLoggeIn = ""

let booleanisLoggeIn = Boolean(isLoggeIn)

console.log(booleanisLoggeIn);
console.log(typeof booleanisLoggeIn)

// "hitesh" => true


let someNumber = 33;
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

let value = 3
let negative = -value
console.log(negative);



// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%3);

let str1 = "hello"
let str2 = " ritam"

let str3 = str1 + str2
console.log(str3);
console.log("1"+2); // all of wil be conversed to string
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(3+4*5%3);

console.log(true);
console.log(+true);
//console.log(++true); it will throw an error 
console.log(+"");

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);


