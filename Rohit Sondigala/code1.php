<?php

function twoSum($nums, $target) {
    $hashmap = [];
    
    // Loop through the list of numbers
    foreach ($nums as $index => $num) {
        $complement = $target - $num;
        
        // Check if the complement exists in the hashmap
        if (isset($hashmap[$complement])) {
            return [$hashmap[$complement], $index];
        }
        
        $hashmap[$num] = $index;
    }
    
    return [];
}

$nums = [2, 7, 11, 15];
$target = 9;
$result = twoSum($nums, $target);

print_r($result);  
