class Node {
  int data;
  Node? next;

  Node(this.data);
}

class LinkedList {
  Node? head;


  Node? findMiddleElement() {
    Node? slow = head;
    Node? fast = head;

    while (fast != null && fast.next != null) {
      slow = slow?.next;
      fast = fast.next?.next;
    }

    return slow;
  }

  // Function to insert a new   
  void insertAtBeginning(int data) {
    Node newNode = Node(data);
    newNode.next = head;
    head = newNode;
  }

  // Function to insert a new node at the end
  void insertAtEnd(int data) {
    Node newNode = Node(data);

    if (head == null) {
      head = newNode;
      return;
    }

    Node current = head!;
    while (current.next != null) {
      current = current.next!;
    }

    current.next = newNode;
  }

  // Function to delete a node with the given   

  void deleteNode(int key) {
    if (head == null) {
      return;
    }

    if (head!.data == key) {
      head = head!.next;
      return;
    }

    Node current = head!;
    while (current.next != null && current.next!.data != key) {
      current = current.next!;
    }

    if (current.next == null) {
      return;
    }

    current.next = current.next!.next;
  }

  // Function to print the linked list
  void printList() {
    Node? current = head;
    while (current != null) {
      print("${current.data} ");
      current = current.next;
    }
    print("");
  }
}

void main() {
  LinkedList list = LinkedList();

  // Insert nodes
  list.insertAtBeginning(10);
  list.insertAtBeginning(20);
  list.insertAtEnd(30);
  list.insertAtEnd(40);

  // Find and print the middle element
  Node? middleElement = list.findMiddleElement();
  print("Middle element: ${middleElement?.data ?? 'not found'}");

  // Print the linked list
  list.printList();

  // Delete a node
  list.deleteNode(30);

  // Print the updated linked list
  list.printList();
}