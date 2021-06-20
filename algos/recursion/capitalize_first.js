function capitalizeFirst(arr) {
    if (!arr.length) {
        return arr;
    }
    debugger;

    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)

    return capitalizeFirst(arr.slice(1))
}
  
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


console.log(capitalizeFirst(['car','taco','banana']))  