// SELECTION SORT
const findMinAndRemove = arr => {
    let min = arr[0]
    let minIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            minIndex = i
        }
    }

    arr.splice(minIndex, 1)
    return min;
}

const selectionSort = unsortedArr => {
    let sortedArr = []

    while (unsortedArr.length > 0) {
        sortedArr.push(findMinAndRemove(unsortedArr))
    }

    return sortedArr;
}

// MERGE SORT 
const findMinAndRemoveSorted = arr => {
    return arr.shift();
}

const merge = (arr1, arr2) => {
    let sorted = [];

    while (arr1.length != 0 && arr2.length != 0) {
        if (arr1[0] < arr2[0]) {
            sorted.push(findMinAndRemoveSorted(arr1))
        } else {
            sorted.push(findMinAndRemoveSorted(arr2))
        }
    }

    return sorted.concat(arr1).concat(arr2);
}

const mergeSort = arr => {
    let midpoint = arr.length/2;
    let firstHalf = arr.slice(0, midpoint);
    let secondHalf = arr.slice(midpoint, arr.length);

    if (arr.length < 2) {
        return arr;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}