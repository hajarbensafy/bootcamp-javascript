function hotelCost() {
    let nights;
    do {
      nights = prompt("Combien de nuits à l'hôtel ?");
    } while (isNaN(nights) || nights === null || nights === "");
    return 140 * Number(nights);
  }
  
  function planeRideCost() {
    let destination;
    do {
      destination = prompt("Quelle est votre destination ?");
    } while (typeof destination !== "string" || destination === null || destination === "");
    
    switch (destination.toLowerCase()) {
      case "londres": return 183;
      case "paris": return 220;
      default: return 300;
    }
  }
  
  function rentalCarCost() {
    let days;
    do {
      days = prompt("Combien de jours de location de voiture ?");
    } while (isNaN(days) || days === null || days === "");
    
    let cost = 40 * Number(days);
    if (days > 10) cost *= 0.95; // 5% de réduction
    return cost;
  }
  
  function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    
    console.log(`Hôtel: $${hotel}, Vol: $${plane}, Voiture: $${car}`);
    console.log(`Total: $${total}`);
    return total;
  }
  
  totalVacationCost();