void main(){
  String str1 = "listen";
  String str2 = "silent";

  print(areAnagrams(str1, str2));
}

bool areAnagrams(String str1, String str2) {
  // first we check both string are length same or not
  if (str1.length != str2.length) {
    return false;
  }

  // otherwise return true or false
  List<String> list1 = str1.toLowerCase().split('')..sort();
  List<String> list2 = str2.toLowerCase().split('')..sort();

  return list1.join() == list2.join();
}