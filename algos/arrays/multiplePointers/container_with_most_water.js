// CONTAINER WITH MOST WATER https://leetcode.com/problems/container-with-most-water/

// O(n) solution
const maxArea = nums => {
    let maxArea = 0;
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        let height = Math.min(nums[i], nums[j]);
        let width = (j - i);
        let currentArea = height * width;
        maxArea = Math.max(currentArea, maxArea);

        if (nums[i] <= nums[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
}

//O(n**2) solution
// const maxArea = nums => {
//     let maxArea = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let height = Math.min(nums[i], nums[j]);
//             let width = (j - i);
//             let currentArea = height * width;
//             maxArea = Math.max(currentArea, maxArea);
//         }
//     }
//     return maxArea;
// };