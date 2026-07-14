// Write a function that returns the largest number in an array.

const largestNumberInArray = (arr) => {
    if(arr.length === 0){
        return "Array should not be empty";
    }
    let largest = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}

const arr = [3, 5, 7, 2, 8, 1];
const result = largestNumberInArray(arr);
console.log("The largest number in the array is: " + result);