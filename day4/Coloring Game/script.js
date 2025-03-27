document.addEventListener('DOMContentLoaded', function() {
    const state = {
      currentColor: null,
      isDrawing: false,
      colors: [
        '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
        '#00FFFF', '#FFA500', '#A52A2A', '#808080', '#000000'
      ]
    };
    
    const colorPalette = document.getElementById('colorPalette');
    const drawingGrid = document.getElementById('drawingGrid');
    const clearBtn = document.getElementById('clearBtn');
    const randomColorsBtn = document.getElementById('randomColorsBtn');
    
    function initColorPalette() {
      state.colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color;
        colorOption.dataset.color = color;
        
        colorOption.addEventListener('click', function() {
          document.querySelectorAll('.color-option').forEach(option => {
            option.classList.remove('selected');
          });
         
          this.classList.add('selected');
          state.currentColor = color;
        });
        
        colorPalette.appendChild(colorOption);
      });
    }
    
    function initDrawingGrid() {
      drawingGrid.innerHTML = '';
      
      for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        
        cell.addEventListener('mousedown', function(e) {
          if (state.currentColor) {
            state.isDrawing = true;
            this.style.backgroundColor = state.currentColor;
          }
        });
        
        cell.addEventListener('mouseover', function() {
          if (state.isDrawing && state.currentColor) {
            this.style.backgroundColor = state.currentColor;
          }
        });
        
        drawingGrid.appendChild(cell);
      }
    }
    
    // Clear the grid
    function clearGrid() {
      document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
      });
    }
    
    // Fill grid with random colors
    function randomizeGrid() {
      document.querySelectorAll('.grid-cell').forEach(cell => {
        const randomColor = state.colors[Math.floor(Math.random() * state.colors.length)];
        cell.style.backgroundColor = randomColor;
      });
    }
    
    // Event listeners
    document.addEventListener('mouseup', function() {
      state.isDrawing = false;
    });
    
    clearBtn.addEventListener('click', clearGrid);
    randomColorsBtn.addEventListener('click', randomizeGrid);
    
    // Initialize the game
    initColorPalette();
    initDrawingGrid();
  });