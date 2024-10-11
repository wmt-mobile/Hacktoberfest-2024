// - ## Q1. Implement a singly linked list and write a function to find the middle element of the linked list.
// - Example: For the list 1 -> 2 -> 3 -> 4 -> 5,
// - Output: 3

class Node {
  int data;
  Node? next;
  Node(this.data) {
    this.next = null;
  }
}

class LinkedList {
  Node? head;
  void insert(int data) {
    Node newNode = new Node(data);
    if (head == null) {
      head = newNode;
    } else {
      Node? temp = head;
      while (temp?.next != null) {
        temp = temp?.next;
      }
      temp?.next = newNode;
    }
  }

  void findMiddleElement() {
    Node? slow = head;
    Node? fast = head;
    if (head != null) {
      while (fast != null && fast.next != null) {
        fast = fast.next?.next;
        slow = slow?.next;
      }
      print("Middle element: ${slow?.data}");
    }
  }
}

void main() {
  LinkedList list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(4);
  list.insert(5);
  list.findMiddleElement();
}
