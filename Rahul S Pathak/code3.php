<?php
function test3($arr) {
  if (count($arr) < 2) {
      return $arr;
  }

  $pivot = $arr[count($arr) - 1];
  $left = $right = [];

  for ($i = 0; $i < count($arr) - 1; $i++) {
      if ($arr[$i] < $pivot) {
          $left[] = $arr[$i]; 
      } else {
          $right[] = $arr[$i]; 
      }
  }

  return array_merge(test3($left), [$pivot], test3($right));
}

$input = [10, 80, 30, 90, 40, 50, 70];
$output = test3($input);
print_r($output); 