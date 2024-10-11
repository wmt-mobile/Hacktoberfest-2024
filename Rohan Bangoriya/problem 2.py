## Q2. Given a string s, find the length of the longest substring without repeating characters.

s = "abcabcbb"

def lengthOfLongestSubstring(s):
    n = len(s)
    ans = 0
    for i in range(n):
        seen = set()
        for j in range(i, n):
            if s[j] in seen:
                break
            seen.add(s[j])
        ans = max(ans, len(seen))
    return ans

print(lengthOfLongestSubstring(s))