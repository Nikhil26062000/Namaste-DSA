// Write a program that prints a right-angled triangle where each row contains the same number repeated.

// 1
// 2 2
// 3 3 3
// 4 4 4 4

const printRightAngledRepeatedNumberTriangle = (n) => {
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<=i;j++){
            row += (i + 1) + " ";
        }
        console.log(row);
    }
}

printRightAngledRepeatedNumberTriangle(8);