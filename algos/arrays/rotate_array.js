// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

const rotate = (nums, k) => {
    let i = 0;

    while (i < k) {
        let c = nums.pop();
        nums.unshift(c)
        i++
    }
    console.log(nums);
}

let nums = [1,2,3,4,5,6,7]
let k = 3

rotate(nums, k)