function capitalize(str) {
    let evenStr = '';
    let oddStr = '';
    
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        evenStr += str[i].toUpperCase();
        oddStr += str[i];
      } else {
        evenStr += str[i];
        oddStr += str[i].toUpperCase();
      }
    }
    
    return [evenStr, oddStr];
  }
  
  console.log(capitalize("abcdef")); 