
function checkEven(num){
    if(num==0){
        return (num + ": It is a zero!!");
    }
    else if(num%2 == 0 ){
        return (num + " : is Even.");
    }
    else{
        return (num + " : is Odd.");
    }

}
console.log (checkEven(10));
console.log (checkEven(9));
console.log (checkEven(0));

