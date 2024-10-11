// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
//  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function sumTarget(arr = [], target) {
    let sum = 0;
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      sum = 0;
      for (let j = 0; j < arr.length; j++) {
        if (i === j) {
          continue;
        }
        sum = arr[i] + arr[j];
        if (sum === target) {
          tempArr.push(i);
          tempArr.push(j);
          break;
        }
      }
      if (tempArr.length > 0) {
        break;
      }
    }
    if (tempArr.length > 0) {
      return tempArr;
    } else {
      return -1;
    }
  }
  console.log(sumTarget([2, 7, 11, 15], 17));