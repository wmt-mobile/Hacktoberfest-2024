import 'dart:collection';

void main() {
  LinkedList list = LinkedList();

  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);

   list.head!.next!.next!.next!.next!.next = list.head!.next;

   print(list.hasCycle());
}

class Node {
  int value;
  Node? next;

  Node(this.value);
}

class LinkedList {
  Node? head;

   bool hasCycle() {
    if (head == null || head!.next == null) {
      return false;
    }

    Node? slow = head;
    Node? fast = head;

    while (fast != null && fast.next != null) {
      slow = slow!.next;
      fast = fast.next!.next;
      if (slow == fast) {
        return true;
      }
    }

    return false;
  }

  void add(int value) {
    Node newNode = Node(value);
    if (head == null) {
      head = newNode;
    } else {
      Node? temp = head;
      while (temp!.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }
}
