<?php

class ListNode
{
  public $value;
  public $next;

  public function __construct($value = null, $next = null)
  {
    $this->value = $value;
    $this->next = $next;
  }
}

function reverseLinkedList($head)
{
  $prev = null;
  $current = $head;

  while ($current !== null) {

    $nextTemp = $current->next;

    $current->next = $prev;

    $prev = $current;
    $current = $nextTemp;
  }

  return $prev;
}

function createLinkedList($values)
{
  if (empty($values)) {
    return null;
  }

  $head = new ListNode(array_shift($values));
  $current = $head;

  foreach ($values as $value) {
    $current->next = new ListNode($value);
    $current = $current->next;
  }

  return $head;
}

function printLinkedList($head)
{
  $current = $head;
  $output = [];

  while ($current !== null) {
    $output[] = $current->value;
    $current = $current->next;
  }

  echo implode(" -> ", $output) . PHP_EOL;
}

$values = [1, 2, 3, 4, 5];
$head = createLinkedList($values);

echo "Original Linked List:" . PHP_EOL;
printLinkedList($head);


$reversedHead = reverseLinkedList($head);

echo "Reversed Linked List:" . PHP_EOL;
printLinkedList($reversedHead);
