
function checkPalindrome(num){
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
 
 }
 console.log(checkPalindrome(123));
 console.log(checkPalindrome(12321));