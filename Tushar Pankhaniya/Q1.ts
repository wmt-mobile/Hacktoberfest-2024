interface Anagram {
  (str1: string, str2: string): boolean;
}

function isAnagram(str1:string,str2:string): boolean {
  if (str1.length != str2.length) {
    return false;
  }
  return str1.split('').sort().join('') == str2.split('').sort().join('');
}

console.log(isAnagram('listen', 'silent'));