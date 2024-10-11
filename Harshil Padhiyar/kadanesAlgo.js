function maxSubArraySum(arr) {
  let maxCurrent = maxGlobal = arr[0];
  let tempStart = start = 0;
  let end = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxCurrent + arr[i]) {
      maxCurrent = arr[i];
      tempStart = i;
    } else {
      maxCurrent = maxCurrent + arr[i];
    }

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
      start = tempStart;
      end = i;
    }
  }

  return arr.slice(start, end + 1);
}

// Example usage
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const output = maxSubArraySum(input);
console.log(output);

