const insertionSort = arr => {
    // begin loop at 2nd element
    for (let i = 1; i < arr.length; i++) {
        // save currentVal in variable, instantiate j to access outside nested loop
        let currentVal = arr[i];
        let j;
        // beginning at the element before i, while j >= 0 and the current element is larger than the one after it
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // swap with the next element
            arr[j + 1] = arr[j];
        }
        // insert current val ahead of j
        arr[j + 1] = currentVal;
    }
    return arr;
}


console.log(insertionSort([2,1,9,76,4]))