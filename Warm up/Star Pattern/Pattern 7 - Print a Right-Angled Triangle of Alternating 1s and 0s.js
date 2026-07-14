// Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s

// Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

// Output
// 1
// 1 0
// 1 0 1
// 1 0 1 0

const printPattern = (n) =>{
    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0;j<i+1;j++){
            row += (j%2 === 0) ? '1 ' : '0 ';
        }
        console.log(row);
    }
}

printPattern(4);