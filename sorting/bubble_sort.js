const bubbleSort = arr => {
    // initialize variable to break loop once no swaps have been made
    let noSwaps;
    // set loop decrementing from end of array
    for (let i = arr.length; i > 0; i--) {
        // assume noSwaps is true
        noSwaps = true;
        // loop through array up to one element before i
        for (let j = 0; j < i - 1; j++) {
            // if the first element is larger than the second
            if (arr[j] > arr[j + 1]) {
                // swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                // set noSwaps to false because a swap has been made
                noSwaps = false;
            }
        }
        // if inner loop completes and no swaps were made on last pass, sorting is done
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([3,10,8,1,5,20,100,99]))