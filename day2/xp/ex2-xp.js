const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
  };  
  
  const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
  };
  
  const shoppingList = ["banana", "orange", "apple"];
  
  function myBill() {
    let total = 0;
    
    for (const item of shoppingList) {
      if (item in stock && stock[item] > 0) {
        total += prices[item];
        stock[item] -= 1; // Bonus: décrémente le stock
      }
    }
    
    return total;
  }
  
  console.log("Total price:", myBill());
  console.log("Updated stock:", stock);