//Remove Duplicate Elements from an Array
let arr = [1, 2, 3, 3, 5, 5, 6, 7, 8, 8];
let newArr = [];
for (let i = 0 ; i<arr.length ; i++){
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
}}
console.log(newArr);


// Find wheather string is palindrome or not
let value1 = prompt("Enter a string :");
function isPalindrome(value){
    let reversedValue = value.split('').reverse().join('');
    if (value == reversedValue){
        console.log('True');
    } else {
        console.log('False');
    }
}
isPalindrome();

// Reverse a String
let value2 = prompt("Enter a string :");
let reversedValue = value.split('').reverse().join('');
console.log(reversedValue);

