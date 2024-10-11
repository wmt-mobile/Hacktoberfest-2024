void main() {
  int num = 18;
  print(squareRoot(num));
}

int squareRoot(int num) {
  if (num < 0) {
    print("Input must be a non-negative number.");
  }

  if (num == 0 || num == 1) {
    return num;
  }

  int low = 1, high = num, result = 0;

  while (low <= high) {
    int mid = (low + high) ~/ 2;
    if (mid * mid == num) {
      return mid;
    }

    if (mid * mid < num) {
      low = mid + 1;
      result = mid;
    } else {
      high = mid - 1;
    }
  }

  return result;
}
