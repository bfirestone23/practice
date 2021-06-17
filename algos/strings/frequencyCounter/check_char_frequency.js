function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) {
        return false;
    }

    let numMap = {};

    for (let i = 0; i < num1.length; i++) {
        let curr = num1[i];
        numMap[curr] = (numMap[curr] + 1) || 1;
    }

    for (let i = 0; i < num2.length; i++) {
        let curr = num2[i]
        if (numMap[curr] > 0) {
            numMap[curr]--;
        } else {
            return false;
        }
    }

    return true;
}

// sameFrequency(182, 281) true
// sameFrequency(22, 222) false
// sameFrequency(34, 14) false

console.log(sameFrequency(34, 14));