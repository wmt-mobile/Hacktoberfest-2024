<?php

function findDuplicate($nums)
{
    // Step 1: Initialize tortoise and hare
    $tortoise = $nums[0];
    $hare = $nums[0];

    // Step 2: Move tortoise and hare to find the cycle
    do {
        $tortoise = $nums[$tortoise];
        $hare = $nums[$nums[$hare]];
    } while ($tortoise != $hare);

    // Step 3: Find the entry point of the cycle (duplicate number)
    $tortoise = $nums[0];
    while ($tortoise != $hare) {
        $tortoise = $nums[$tortoise];
        $hare = $nums[$hare];
    }

    // The meeting point is the duplicate number
    return $hare;
}

// Example usage
$nums = [1, 3, 4, 2, 2];
$result = findDuplicate($nums);
echo $result; // Output: 2