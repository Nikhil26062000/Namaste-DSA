// Write a program that prints a right-angled triangle of numbers of height n.

// 1
// 1 2
// 1 2 3
// 1 2 3 4

const printRightAngledNumberTriangle = (n) => {
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<=i;j++){
            row += (j+1) + " ";
        }
        console.log(row);
    }
}
printRightAngledNumberTriangle(4);