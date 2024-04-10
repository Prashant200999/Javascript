let a = [1,2,3,4,5,5,6,7,7,8,9];

function findMax(arr){
return Math.max.apply(null,arr);
}

console.log(findMax(a));