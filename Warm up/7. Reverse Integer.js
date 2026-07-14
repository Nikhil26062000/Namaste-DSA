/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let original = x;
    let range1 = -(2**31)
    let range2 = (2**31)-1
    if(x < 0) {
        x = Math.abs(x);
    }
    while(x > 0){
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x = Math.floor(x / 10);
    }
    if(rev <= range1 || rev > range2 ) return 0
    return original < 0 ? -rev : rev;
};