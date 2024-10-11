<?php
function test($array)
{
  $max = $sum = $array[0];

  for ($i = 1; $i < count($array); $i++) {
    $max = max($array[$i], $max + $array[$i]);
    if ($max > $sum) {
      $sum = $max;
    }
  }

  return $sum;
}

// Example usage
$array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
$result = test($array);
echo "The array sum is: " . $result;
