// Q2. Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

function lengthLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        // Shrink the window from the left if a duplicate is found
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        // Add the current character to the set
        charSet.add(s[right]);

        // Update the maximum length of the window
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(lengthLongestSubstring("abcabcbb"));

