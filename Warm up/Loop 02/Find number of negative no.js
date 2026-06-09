// Write a function that returns the number of negative numbers in an array

const countNegativeNumbers = (arr) => {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [3, -5, 7, -2, 8, -1];
const result = countNegativeNumbers(arr);
console.log("The number of negative numbers in the array is: " + result);

