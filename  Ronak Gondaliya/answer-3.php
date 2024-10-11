<?php
class ListNode {
    public $val;
    public $next;

    public function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function detectCycle($head) {
    if ($head === null) {
        return null; // No nodes in the list
    }

    $slow = $head;
    $fast = $head;

    // Step 1: Detect if there is a cycle
    while ($fast !== null && $fast->next !== null) {
        $slow = $slow->next;           // Move slow pointer by 1
        $fast = $fast->next->next;     // Move fast pointer by 2

        // If they meet, there is a cycle
        if ($slow === $fast) {
            // Step 2: Find the entry point of the cycle
            $entry = $head;
            while ($entry !== $slow) {
                $entry = $entry->next; // Move entry pointer by 1
                $slow = $slow->next;   // Move slow pointer by 1
            }
            return $entry; // Cycle starts here
        }
    }

    return null; // No cycle found
}

// Example usage:
$node1 = new ListNode(1);
$node2 = new ListNode(2);
$node3 = new ListNode(3);
$node4 = new ListNode(4);

$node1->next = $node2;
$node2->next = $node3;
$node3->next = $node4;
$node4->next = $node2; // Creates a cycle starting at node 2

$cycleStartNode = detectCycle($node1);
if ($cycleStartNode) {
    echo "Cycle starts at node with value: " . $cycleStartNode->val; // Output: Node 2
} else {
    echo "No cycle detected.";
}
