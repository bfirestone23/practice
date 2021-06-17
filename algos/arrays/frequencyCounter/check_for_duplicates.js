function areThereDuplicates(...input) {
    if (input.length < 2) {
        return false;
    }

    let map = {};

    for (let i = 0; i < input.length; i++) {
        let curr = input[i];
        map[curr] = (map[curr] + 1) || 1;

        if (map[curr] > 1) {
            return true;
        }
    }

    return false;
}

// areThereDuplicates(1, 2, 3) false
// areThereDuplicates(1, 2, 2) true
// areThereDuplicates('a', 'b', 'c', 'a') true

console.log(areThereDuplicates('a', 'b', 'c', 'a'));