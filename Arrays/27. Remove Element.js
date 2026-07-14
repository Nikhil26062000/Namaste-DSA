/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // we are using two pointers here
    let temp=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]==val){
            continue;
        }else{
            nums[temp] = nums[i];
            temp++
        }
    }
    return temp;
};