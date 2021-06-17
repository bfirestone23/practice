// LONGEST SUBSTRING https://leetcode.com/problems/longest-substring-without-repeating-characters/

// O(n**2) solution
function lengthOfLongestSubstring(s) {
    s.length < 2 ? s.length : null;

    let longest = 0;

    for (let i = 0; i < s.length; i++) {

        let seenChars = {};
        let currentLength = 0;

        for (let j = i; j < s.length; j++) {
            let currentChar = s[j];

            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }

    return longest;
};

let s = "abccabb"
lengthOfLongestSubstring(s)