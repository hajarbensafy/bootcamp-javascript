function createCalendar(year, month) {
    const daysOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = (firstDay.getDay() + 6) % 7; 
    const table = document.createElement('table');
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    daysOfWeek.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    let date = 1;
    
    for (let i = 0; i < 6; i++) {
      if (date > daysInMonth) break;
      
      const row = document.createElement('tr');
      
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        
        if (i === 0 && j < startingDay) {
          cell.textContent = '';
        } else if (date > daysInMonth) {
          cell.textContent = '';
        } else {
          cell.textContent = date;
          date++;
        }
        
        row.appendChild(cell);
      }
      
      tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  createCalendar(2012, 9); 