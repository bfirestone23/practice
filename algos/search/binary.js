const binarySearch = (arr, n) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end)/2);

    while (arr[mid] !== n && start <= end) {
        if (arr[mid] > n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end)/2);
    }

    if (arr[mid] === n) return mid;
    return -1;
}

console.log(binarySearch([1,2,3,4,5], 1))