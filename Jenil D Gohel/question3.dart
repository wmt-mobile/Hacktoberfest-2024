// - ## Q3. Write a function to find the square root of a number using Binary Search. The function should return the integer part of the square root.
// - Example: Input: 26,
// - Output: 5

import 'dart:io';

int squareRoot(int n) {
  if (n == 0 || n == 1) {
    return n;
  }
  int start = 1, end = n, ans = 0;
  while (start <= end) {
    int mid = (start + end) ~/ 2;
    if (mid * mid == n) {
      return mid;
    }
    if (mid * mid < n) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

void main() {
  print("Enter the number to find the square root of: ");
  int n = int.parse(stdin.readLineSync()!);
  print("The square root of $n is ${squareRoot(n)}");
}
