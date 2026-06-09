// Print a right-angled triangle of stars with n rows.
// *
// * *
// * * *
// * * * *

const printRightAngledStarTriangle = (n) => {
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<=i;j++){
            row += "* ";
        }
        console.log(row);
    }
}

printRightAngledStarTriangle(4);