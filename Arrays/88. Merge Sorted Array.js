

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


// second solution with time complexity of O(m+n) and space complexity of O(1)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = (m + n) - 1;
    let p1 = m - 1; //undefined
    let p2 = n-1; // 0
    while(p1 >= 0 && p2 >= 0 ){
        if(nums2[p2] >= nums1[p1]){
            nums1[i] = nums2[p2];
            p2--;
            i--;
            
        }else{
            nums1[i] = nums1[p1];
            p1--;
            i--
        }
    }

    while(p2>=0){
        nums1[i] = nums2[p2];
        p2--;
        i--;
    }

};