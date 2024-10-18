<?php 

function lengthOfLongestSubstring($s) {
    // Initialize variables
    $charMap = [];
    $left = 0;
    $maxLength = 0;

    // Loop through the string
    for ($right = 0; $right < strlen($s); $right++) {
        $currentChar = $s[$right];
        
        if (isset($charMap[$currentChar]) && $charMap[$currentChar] >= $left) {
            $left = $charMap[$currentChar] + 1;
        }
        
        $charMap[$currentChar] = $right;
        
        $maxLength = max($maxLength, $right - $left + 1);
    }

    return $maxLength;
}

// Example usage:
$s = "abcabcbb";
echo lengthOfLongestSubstring($s);  
