<?php 

function productExceptSelf($nums) {
    $n = count($nums);
    $answer = array_fill(0, $n, 1);  // Initialize the answer array with 1
    
    // Step 1: Calculate the prefix product for each element
    $prefix = 1;
    for ($i = 0; $i < $n; $i++) {
        $answer[$i] = $prefix;
        $prefix *= $nums[$i];
    }
    
    // Step 2: Calculate the suffix product and multiply with the prefix product
    $suffix = 1;
    for ($i = $n - 1; $i >= 0; $i--) {
        $answer[$i] *= $suffix;
        $suffix *= $nums[$i];
    }
    
    return $answer;
}

// Example usage:
$nums = [1, 2, 3, 4];
$result = productExceptSelf($nums);
print_r($result);  // Output: [24, 12, 8, 6]

