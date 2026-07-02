/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // we are using two pointers here
    let p = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=nums[p]){
            p++;
            nums[p] = nums[i];
        }
        
    }
    return p+1;
};