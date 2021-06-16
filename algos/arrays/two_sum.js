// TWO SUM https://leetcode.com/problems/two-sum/

// O(n) solution
const twoSum = (nums, target) => {
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const currentMapVal = map[nums[i]]
        if (currentMapVal >= 0) {
            return [currentMapVal, i];
        } else {
            const numberToFind = target - nums[i];
            map[numberToFind] = i;
        }
    }
    
    return null;
};

// O(n**2) solution
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         const numToFind = target - nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] == numToFind) {
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// };