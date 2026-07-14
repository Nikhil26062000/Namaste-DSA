// Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

// 1 2 3 4
// 1 2 3
// 1 2
// 1

const printReverseRightAngledNumberTriangle = (n) => {
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<n-i;j++){
            row += (j+1) + " ";
        }
        console.log(row);
    }
}

printReverseRightAngledNumberTriangle(4);