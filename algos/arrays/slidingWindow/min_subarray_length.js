function minSubArrayLen(arr, target) {
    if (!arr.length) {
        return 0;
    }

    // let maxSum = 0;
    let i = 0;
    let tempSum = 0;
    let result = [];

    while (i < arr.length) {
        if (tempSum < target) {
            tempSum += arr[i];
            result.push(arr[i]);
        }
        i++
    }

    for (let j = i; j < arr.length; j++) {
        let tempResultLen = result.length;
        tempSum += arr[i] - arr[i - tempResultLen];
    }

    debugger;
}


minSubArrayLen([2,1,6,5,4], 9) 




// minSubArrayLen([2,3,1,2,4,3], 7); 2 ([4,3])
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) 1 ([62])