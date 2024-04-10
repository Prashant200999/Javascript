function fibonacciSeries(number){

let num1 = 0;
let num2 = 1;
let newnum;

for(let i = 1; i <= number; i++){
    console.log(num1);
    newnum = num1+num2;
    num1 = num2;
    num2 = newnum;
   
}
}
fibonacciSeries(10);