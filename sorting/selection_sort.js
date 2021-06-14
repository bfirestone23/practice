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