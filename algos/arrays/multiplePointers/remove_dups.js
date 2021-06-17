//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

const removeDuplicates = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        debugger;
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            debugger;
            i--;
        }
    }
    return nums.length;
};

let nums = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(nums);