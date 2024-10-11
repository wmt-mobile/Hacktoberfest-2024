<?php
function test2($s, $t) {
  if (strlen($s) !== strlen($t)) {
      return false;
  }

  $sortedS = str_split($s);
  $sortedT = str_split($t);
  sort($sortedS);
  sort($sortedT);

  return $sortedS === $sortedT;
}

$s = "anagram";
$t = "nagaram";
$result = test2($s, $t);
echo $result ? 'true' : 'false';  