const intersect = (nums1, nums2) => {
    let numMap = {};
    for (let i = 0; i < nums1.length; i++) {
        let curr = nums1[i];
        !numMap[curr] ? numMap[curr] = 1 : numMap[curr]++
    }
    
    let result = [];
    for (let i = 0; i < nums2.length; i++) {
        let curr = nums2[i]
        
        if (numMap[curr] > 0) {
            result.push(curr);
            numMap[curr]--;
        }
    }
    
    return result;
}

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

console.log(intersect(nums1, nums2));