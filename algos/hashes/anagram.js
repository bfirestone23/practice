function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    for (let char of str1) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }

    for (let char of str2) {
        !lookup[char] ? false : lookup[char] -= 1;
    }
    
    return true;
  }

  let str1 = 'iceman';
  let str2 = 'cinema';

  console.log(validAnagram(str1, str2));