// - ## Q3. Given an integer array arr, return an array answer such that answer[i] is equal to the product of all the elements of arr except arr[i].

// - The product of any prefix or suffix of arr is guaranteed to fit in a 32-bit integer.

// - You must write an algorithm that runs in O(n) time and without using the division operation.

// - Example 1:

// - Input: arr = [1,2,3,4]
// - Output: [24,12,8,6]

 

function addingProductArray(arr) {
    const n = arr.length;
    const tempArr = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        tempArr[i] = prefix;
        prefix *= arr[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        tempArr[i] *= suffix;
        suffix *= arr[i];
    }

    return tempArr;
}




console.log(addingProductArray([1,2,3,4]));
