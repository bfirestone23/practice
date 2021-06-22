const selectionSort = arr => {
    // begin outer loop at first element
    for(let i = 0; i < arr.length; i++) {
        // set current lowest to first element (index)
        let lowest = i;
        // begin inner loop at next element after i
        for (let j = i + 1; j < arr.length; j++) {
            // if this element is less than lowest, set new lowest
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        // once inner loop has completed, swap values (if i is not he same as lowest)
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        
    }
    return arr;
}

console.log(selectionSort([3,2,1,29,5,89]))
