// - Output: 3
// - Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = function(s) {
    let charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];

        if (charIndexMap.has(currentChar)) {
            left = Math.max(left, charIndexMap.get(currentChar) + 1);
        }

        charIndexMap.set(currentChar, right);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))