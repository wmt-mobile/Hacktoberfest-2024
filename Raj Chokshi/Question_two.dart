void main() {
  List<int> list = [8,7,6,5,4,3,2,1]; // for demonstration purpose i used simple list from 8-1 
  print("Given Array is :\n$list");
  List<int> sortedList = mergeSort(list);
  print("Sorted Array is :\n$sortedList");
}

List<int> mergeSort(List<int> array) {
  
  if (array.length <= 1) {
    return array;
  }

  int splitIndex = array.length ~/ 2; // ~/2 means Divide, returning an integer result

  List<int> leftArray = mergeSort(array.sublist(0, splitIndex));
  List<int> rightArray = mergeSort(array.sublist(splitIndex));
  return merge(leftArray, rightArray);
}

List<int> merge(left_array, right_array) {
  List<int> result = [];
  int? i = 0;
  int? j = 0;

  while (i! < left_array.length && j! < right_array.length) {
    if (left_array[i] <= right_array[j]) {
      result.add(left_array[i]);
      i++;
    } else {
      result.add(right_array[j]);
      j++;
    }
  }

  while (i! < left_array.length) {
    result.add(left_array[i]);
    i++;
  }

  while (j! < right_array.length) {
    result.add(right_array[j]);
    j++;
  }
  return result;
}