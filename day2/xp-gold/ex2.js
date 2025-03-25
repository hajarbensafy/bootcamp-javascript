function abbrevName(fullName) {
    const parts = fullName.split(' ');
    if (parts.length < 2) return fullName;
    return `${parts[0]} ${parts[1][0]}.`;
  }
  
  console.log(abbrevName("Robin Singh")); 
  console.log(abbrevName("John Doe"));
  console.log(abbrevName("Alice")); 