// - ## Q4. Implement a function that rotates an array to the left by n positions.
// - Example:
// - Input: [1, 2, 3, 4, 5], n = 2,
// - Output: [3, 4, 5, 1, 2]

void main() {
  List<int> arr = [1, 2, 3, 4, 5];
  int n = 2;
  print(rotateArray(arr, n));
}

List<int> rotateArray(List<int> arr, int n) {
  List<int> newArr = [];
  for (int i = n; i < arr.length; i++) {
    newArr.add(arr[i]);
  }
  for (int i = 0; i < n; i++) {
    newArr.add(arr[i]);
  }
  return newArr;
}


