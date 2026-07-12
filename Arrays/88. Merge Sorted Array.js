

/**
 * 1st solution with O(m+n) time complexity and O(m) space complexity
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let temp = [...nums1];
    let p1 = 0;
    let p2 = 0;
    for (let i=0;i<m+n;i++){
        if(p2>=n || (temp[p1]<=nums2[p2]&&p1<m)){
            nums1[i] = temp[p1];
            p1++;
        }else{
            nums1[i] = nums2[p2];
            p2++
        }
    }
};