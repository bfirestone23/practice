function countUniqueValues(arr){
    if (!arr.length) {
        return 0;
    }
    
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
  }

  let arr = [1, 1, 1, 1, 1, 2]

  console.log(countUniqueValues(arr));