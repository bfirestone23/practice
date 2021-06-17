// BACKSPACE STRING COMPARE https://leetcode.com/problems/backspace-string-compare/

const backspaceCompare = (s, t) => {

    let p1 = s.length - 1;
    let p2 = t.length - 1;

    s = "ab#c", t = "ad#c"

    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] === '#' || t[p2] === '#') {
            if (s[p1] === '#') {
                let backcount = 2;
                while (backcount > 0) {
                    p1--;
                    backcount--;
                    if (s[p1] === '#') {
                        backcount = backcount + 2;
                    }
                }
            }
            if (t[p2] === '#') {
                let backcount = 2;
                while (backcount > 0) {
                    p2--;
                    backcount--;
                    if (t[p2] === '#') {
                        backcount = backcount + 2;
                    }
                }
            }
        } else {
            if (s[p1] !== t[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true;
}

// O(n) solution
// const backspaceCompare = (s, t) => {
//     let finalS = buildString(s);
//     let finalT = buildString(t);

//     if (finalS.length != finalT.length) {
//         return false;
//     }

//     for (let i = 0; i < finalS.length; i++) {
//         if (finalS[i] != finalT[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// const buildString = str => {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         str[i] == '#' ? result.pop() : result.push(str[i]);
//     }
//     return result;
// }

s = "ab##", t = "c#d#"
console.log(backspaceCompare(s, t));