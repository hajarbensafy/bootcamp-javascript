let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
  
  const j = table.rows[i].cells.length - 1 - i;
  table.rows[i].cells[j].style.backgroundColor = 'red';
}

