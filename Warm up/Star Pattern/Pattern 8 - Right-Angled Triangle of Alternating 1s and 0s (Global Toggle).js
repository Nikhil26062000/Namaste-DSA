// Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
// Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

// Output
// 1
// 0 1
// 0 1 0
// 1 0 1 0


const printPattern = (n) =>{
    let toggle = 1; // Start with 1
    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0;j<i+1;j++){
            row += toggle + ' ';
            toggle = 1 - toggle; // Toggle between 1 and 0
        }
        console.log(row);
    }
}

printPattern(4);