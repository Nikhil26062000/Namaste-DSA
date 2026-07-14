// write a program to find the second largest number in an array

let arr = [3, 5, 7, 2, 8, 1];

const secondLargest = (arr) =>{
    let largest = -Infinity;
    let secondLargest = -Infinity;

    if(arr.length < 2){
        return "Array should have at least 2 elements";
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const result = secondLargest(arr);
console.log("The second largest number is: " + result);