let arr = [1, 2, 3, 4, 5];



function reversearr(arr) {
    let revarr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revarr.push(arr[i]);
    }

    console.log("Original array : " + arr)
    console.log("Reversed array : " + revarr);
    console.log("Length of array : " + arr.length)
}

reversearr(arr);