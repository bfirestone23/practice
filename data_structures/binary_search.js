const binarySearch = (arr, start, end, target) => {
    while (start < end) {
        const mid = Math.floor((start + end)/2)
        const foundVal = arr[mid]

        if (foundVal === target) {
            return mid;
        } else if (foundVal < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}


const searchRange = (arr, target) => {
    if (arr.length === 0) return [-1, -1];

    const firstPos = binarySearch(arr, 0, arr.length - 1, target);

    if (firstPos === -1) return [-1, -1];

    let startPos = firstPos;
    let endPos = firstPos;
    let temp1, temp2;

    while (startPos !== -1) {
        temp1 = startPos;
        startPos = (binarySearch(arr, 0, startPos - 1, target))
    }

    startPos = temp1;

    while (endPos !== -1) {
        temp2 = endPos;
        endPos = binarySearch(arr, endPos + 1, arr.length - 1, target)
    }

    endPos = temp2;

    return [startPos, endPos]
}

let arr = [1, 3, 3, 5, 5, 5, 8, 9]
let target = 5

searchRange(arr, target)