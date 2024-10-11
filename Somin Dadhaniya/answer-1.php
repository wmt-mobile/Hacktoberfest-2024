<?php
function twoSum($nums, $target)
{
    $map = []; // To store value => index pairs

    // Loop through each number in the array
    foreach ($nums as $index => $num) {
        // Calculate the complement that, when added to $num, equals the target
        $complement = $target - $num;

        // Check if the complement already exists in the map
        if (isset($map[$complement])) {
            // Return the indices of the two numbers
            return [$map[$complement], $index];
        }

        // Otherwise, store the current number's index in the map
        $map[$num] = $index;
    }

    // If no solution is found (although the problem states that one will always exist)
    return [];
}

// Example usage
$nums = [2, 7, 11, 15];
$target = 9;
$result = twoSum($nums, $target);
print_r($result);
