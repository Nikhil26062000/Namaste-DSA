// Write a function that returns the smallest number in an array.

const smallestNumberInArray = (arr) => {
    if(arr.length === 0){
        return "Array should not be empty";
    }
    let smallest = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
let arr = [3, 5, 7, 2, 8, 1];
let arr2 = [-3, -5, -7, -2, -8, -1];
const result = smallestNumberInArray(arr);
console.log("The smallest number in the array is: " + result);
const result2 = smallestNumberInArray(arr2);
console.log("The smallest number in the second array is: " + result2);