void main(){
  List<int> arr = [3, 5, 7, 2, 8];

  // call this function
  print(findSecondLargest(arr));
}

int findSecondLargest(List<int> arr) {
  //first check length two or more
  if (arr.length < 2) {
    throw Exception("Array should have at least two elements");
  }

  int largest = arr[0];
  int secondLargest = arr[0];

  for (int i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}