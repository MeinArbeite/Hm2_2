// урок 1
var num1 = Number(prompt("Введите первое число"))
var num2 = Number(prompt("Введите второе число"))
if (num1>num2){
    console.log(num1+" "+ "первое число больше");
}else if (num1<num2){
    console.log(num2+" "+ "второе число больше");
}else if (num1===num2){
    console.log("число равно");
}else{
    console.log("ведите число правильно");
}
// урок 2

let arr = "*";
while (arr.length <= 7) {
    console.log(arr);
    arr += "*";
}
//  урок3
const numbers = [];

for(let i = 1;i < 101;i++){
    if (i % 15 === 0) {
        numbers.push("FizzBuzz")
    }else if(i % 5 === 0) {
        numbers.push("Buzz")
    }else if(i % 3 === 0) {
        numbers.push("Fizz")
    }else{
        numbers.push(i)
    }
}
console.log(numbers);