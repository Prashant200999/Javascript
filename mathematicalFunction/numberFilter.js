let a = [1,2,3,4,5,6,7,8,9]

function filterEven(arr){
    return arr.filter(num => num%2 == 0);
}
function filterOdd(arr){
    return arr.filter(num => num%2 == 1);
}


console.log(filterEven(a))
console.log(filterOdd(a))