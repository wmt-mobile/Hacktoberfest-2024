//  1. Given an integer array nums, find the subarray with the largest sum, and return its sum.
#include <bits/stdc++.h>
using namespace std;

int maxSubarraySum(vector<int> &arr) {
    int result = arr[0];
  
      for(int i = 0; i < arr.size(); i++) {
        int currSum = 0;
      
        for(int j = i; j < arr.size(); j++) {
            currSum = currSum + arr[j];
          
            result = max(result, currSum);
        }
    }
    return result;
}

int main() {
    vector<int> arr = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubarraySum(arr);
    return 0;
}