function findFactorial(num){

let fact = 1;
    for(let i=1; i<=num; i++){
     fact *=i;
    }
    console.log("Factorial of "+ num + " is " + fact +".");
}

findFactorial(5);
