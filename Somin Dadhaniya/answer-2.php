<?php
function lengthOfLongestSubstring($s)
{
    $charMap = []; // To store the latest index of each character
    $maxLength = 0;
    $start = 0; // Left boundary of the sliding window

    // Loop through the string
    for ($i = 0; $i < strlen($s); $i++) {
        $char = $s[$i];

        // If the character is already in the map and the index is within the current window
        if (isset($charMap[$char]) && $charMap[$char] >= $start) {
            // Move the start of the window to the right of the last occurrence of the current character
            $start = $charMap[$char] + 1;
        }

        // Update the latest index of the character
        $charMap[$char] = $i;

        // Calculate the current window length and update the max length
        $maxLength = max($maxLength, $i - $start + 1);
    }

    return $maxLength;
}

// Example usage
$s = "abcabcbb";
$result = lengthOfLongestSubstring($s);
echo $result; // Output: 3  