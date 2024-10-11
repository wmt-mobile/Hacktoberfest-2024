// - ## Q2. Given a string s, find the length of the longest substring without repeating characters.
// - Example 1:
// - Input: s = "abcabcbb"
// - Output: 3
// - Explanation: The answer is "abc", with the length of 3.

function LongestSubstring(s) {
    const numMap = new Map();
    let maxLength = 0;
    let left = 0; 
    for (let right = 0; right < s.length; right++) {
        if (numMap.has(s[right]) && numMap.get(s[right]) >= left) {
            left = numMap.get(s[right]) + 1;
        }
        numMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

const input = "abcabcbb";
const output = LongestSubstring(input);
console.log(output);