// Given two strings s and t, return true if t is an anagram of s, and false otherwise

#include <algorithm>
#include <iostream>
using namespace std;

bool areAnagrams(string s1, string s2)
{   
    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());
    // Sort both strings
    if(s1 == s2){
        
    return 1;
    }   
    return 0;
}

int main()
{
    string s = "anagram";
    string t = "nagaram";
    cout << "Enter String 1 : ";
    cin >>s;
    cout << "Entet String 2 : ";
    cin>>t;
    if(areAnagrams(s,t)){
        cout<< "True";
    } else{
        cout << "False";
    }

    return 0;
}