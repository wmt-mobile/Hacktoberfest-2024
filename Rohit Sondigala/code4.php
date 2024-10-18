<?php 

function findDuplicate($nums) {
    // Step 1: Initialize two pointers (tortoise and hare)
    $tortoise = $nums[0];
    $hare = $nums[0];
    
    // Step 2: Phase 1 - Detect the cycle (Find the intersection point)
    do {
        $tortoise = $nums[$tortoise];  // Move tortoise by 1 step
        $hare = $nums[$nums[$hare]];   // Move hare by 2 steps
    } while ($tortoise != $hare);
    
    // Step 3: Phase 2 - Find the entry point of the cycle (Duplicate number)
    $tortoise = $nums[0];  // Move tortoise back to the start
    
    while ($tortoise != $hare) {
        $tortoise = $nums[$tortoise];  // Move both by 1 step
        $hare = $nums[$hare];          // until they meet
    }
    
    // The meeting point is the duplicate number
    return $hare;
}

// Example usage:
$nums = [1, 3, 4, 2, 2];
echo findDuplicate($nums); 
