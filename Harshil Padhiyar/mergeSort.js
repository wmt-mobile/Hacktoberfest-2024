// Function to implement the Merge Sort algorithm
function mergeSort(arr) {
  // Base case: if the array has only one element, return it
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle of the array
  const middle = Math.floor(arr.length / 2);
  // Split the array into two halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively call mergeSort on the two halves
  return merge(mergeSort(left), mergeSort(right));
}

// Function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  // Compare elements of the two arrays and add the smaller one to the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add the remaining elements of the two arrays to the result
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Input array
const input = [38, 27, 43, 3, 9, 82, 10];
// Sort the array using Merge Sort
const output = mergeSort(input);
// Print the sorted array
console.log(output); 