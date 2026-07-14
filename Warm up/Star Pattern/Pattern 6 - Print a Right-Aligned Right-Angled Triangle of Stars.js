// Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

// Output
//       *
//     * *
//   * * *
// * * * *

const printPattern = (n) =>{
    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0;j<n-i-1;j++){
            row += '_ ';
        }
        for(let k=0;k<i+1;k++){
            row += '* ';
        }
        console.log(row);
    }
}

printPattern(4);