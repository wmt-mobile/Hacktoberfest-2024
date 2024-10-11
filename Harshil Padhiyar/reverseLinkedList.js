// Function to reverse a singly linked list
function reverseLinkedList(head) {
  // Initialize three pointers: prev, current, and next
  let prev = null;
  let current = head;
  let next = null;

  // Traverse the linked list until current is not null
  while (current !== null) {
    // Store the next node before changing current.next
    next = current.next;
    // Reverse the 'next' pointer of current node
    current.next = prev;
    // Move prev and current one position ahead
    prev = current;
    current = next;
  }

  // Return the new head node of the reversed linked list
  return prev;
}

// Node class for the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to print the linked list
function printList(node) {
  let result = "";
  // Traverse the linked list and append each node's data to the result string
  while (node !== null) {
    result += node.data + " -> ";
    node = node.next;
  }
  // Remove the extra " -> " at the end and print the result
  console.log(result.slice(0, -4)); 
}

// Driver code
let input = "1 -> 2 -> 3 -> 4 -> 5"
// Split the input string into an array of numbers
let values =input.split(" -> ").map(Number);
// Create the head node of the linked list
let head = new Node(values[0]);
// Populate the rest of the linked list
for (let i = 1; i < values.length; i++) {
  let newNode = new Node(values[i]);
  let current = head;
  // Find the last node in the linked list
  while (current.next !== null) {
    current = current.next;
  }
  // Add the new node at the end
  current.next = newNode;
}

// Reverse the linked list
let output = reverseLinkedList(head);

// Print the reversed linked list
printList(output);