<?php
function test2($s, $t) {
  // If lengths are not the same, they cannot be anagrams
  if (strlen($s) !== strlen($t)) {
      return false;
  }

  // Sort the characters of both strings
  $sortedS = str_split($s);
  $sortedT = str_split($t);
  sort($sortedS);
  sort($sortedT);

  // Compare the sorted arrays
  return $sortedS === $sortedT;
}

// Example usage
$s = "anagram";
$t = "nagaram";
$result = test2($s, $t);
echo $result ? 'true' : 'false';  // Output: true