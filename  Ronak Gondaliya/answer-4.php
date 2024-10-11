<?php

function quickSort(&$array, $left, $right) {
    if ($left < $right) {
        // Partitioning index
        $pivotIndex = partition($array, $left, $right);
        
        // Recursively sort elements before and after partition
        quickSort($array, $left, $pivotIndex - 1);
        quickSort($array, $pivotIndex + 1, $right);
    }
}

function partition(&$array, $left, $right) {

    $pivot = $array[$right];
    $i = $left - 1;

    for ($j = $left; $j < $right; $j++) {
        if ($array[$j] <= $pivot) {
            $i++; 
            $temp = $array[$i];
            $array[$i] = $array[$j];
            $array[$j] = $temp;
        }
    }
    $temp = $array[$i + 1];
    $array[$i + 1] = $array[$right];
    $array[$right] = $temp;

    return $i + 1; 
}

$array = array(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
quickSort($array, 0, count($array) - 1);

echo "Original Array: " . implode(", ", $array) . "\n";
echo "Sorted Array: " . implode(", ", $array) . "\n";
?>
