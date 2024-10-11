void main() {
  var arr = [1, 2, 3, 4, 5];
  var finarr = [];
  int n = 2;

  for (int i = n ; i <= arr.length - 1; i++) {
    finarr.add(arr[i]);
  }
  for (int i = 0; i <= n - 1; i++) {
    finarr.add(arr[i]);
  }

  print(finarr);
}
