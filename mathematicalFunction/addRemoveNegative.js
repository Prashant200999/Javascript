let arr = [-2,-1,-3,-4,1,2,3,4,5];



function separatearray(arr){
    let negativepart = [];
    let positivepart = [];

    for(i=0; i < arr.length; i++){
        if (arr[i] < 0 ){
            negativepart.push(arr[i]);
        
        }else{
            positivepart.push(arr[i]);
        }
    }
    console.log(arr);
    console.log(negativepart);
    console.log(positivepart);  
}

separatearray(arr);