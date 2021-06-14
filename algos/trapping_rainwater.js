// TRAPPING RAINWATER https://leetcode.com/problems/trapping-rain-water/

// O(n) solution
const trap = nums => {
    let total = 0;

    let left = 0;
    let right = nums.length - 1;

    let maxL = 0;
    let maxR = 0;

    while (left < right) {
       if (nums[left] <= nums[right]) {
           if (nums[left] >= maxL) {
               maxL = nums[left];
           } else {
               total += maxL - nums[left];
           }
           left++;
       } else {
           if (nums[right] >= maxR) {
               maxR = nums[right];
           } else {
               total += maxR - nums[right]
           }
           right--;
       }
    }

    return total;
}


// O(n**2) solution
// const trap = nums => {
//     let total = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let maxL = 0;
//         let maxR = 0;
//         let leftP = i;
//         let rightP = i;

//         while (leftP >= 0) {
//             maxL = Math.max(maxL, nums[leftP]);
//             leftP--;
//         }

//         while (rightP < nums.length) {
//             maxR = Math.max(maxR, nums[rightP]);
//             rightP++;
//         }

//         const currentWater = Math.min(maxL, maxR) - nums[i];
//         if (currentWater >= 0) {
//             total += currentWater;
//         }
//     }
//     return total;
// }

let arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
console.log(trap(arr));
