const solarSystem = [
    { name: "Mercure", color: "gray", moons: 0 },
    { name: "Vénus", color: "orange", moons: 0 },
    { name: "Terre", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturne", color: "yellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  
  const planetSection = document.querySelector('.listPlanets');
  
  solarSystem.forEach((planet, index) => {
    const planetDiv = document.createElement('div');
    planetDiv.className = `planet ${planet.name.toLowerCase()}`;
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
   
    planetDiv.style.left = `${index * 120 + 20}px`;
    planetDiv.style.top = '20px';
    
    if (planet.moons > 0) {
      for (let i = 0; i < planet.moons; i++) {
        if (i < 4) {
          const moonDiv = document.createElement('div');
          moonDiv.className = 'moon';
         
          const angle = (i / planet.moons) * Math.PI * 2;
          const distance = 60;
          moonDiv.style.left = `${50 + Math.cos(angle) * distance - 15}px`;
          moonDiv.style.top = `${50 + Math.sin(angle) * distance - 15}px`;
          
          planetDiv.appendChild(moonDiv);
        }
      }
    }
    
    planetSection.appendChild(planetDiv);
  });