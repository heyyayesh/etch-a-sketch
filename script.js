const frame = document.querySelector('.frame');
const okBtn = document.querySelector('#ok-btn');
const clearBtn = document.getElementById('clear');
const toggleGrid = document.getElementById('toggle-grid');
let gridSize = 16;

function createPix(n){
  if(n <= 0 || n > 64){
    return 'error';
  }

  for(let i=0; i<n*n; i++){
    const pix = document.createElement('div');
    pix.style.boxSizing = 'border-box'
    pix.style.width = `${640 / n}px`;
    pix.style.height = `${640 / n}px`;
    frame.appendChild(pix);
    pix.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = 'black';
    });
  }
}

createPix(gridSize);

okBtn.addEventListener('click', (e) => {
  const getGridSize = document.getElementById("grid-size").value;
  gridSize = getGridSize;
  clear();
  createPix(gridSize);
});

function clear(){
  frame.innerHTML = '';
}

toggleGrid.addEventListener('click', (e) => {
  frame.classList.toggle('grid');
})

clearBtn.addEventListener('click', () => {
  clear();
  createPix(gridSize);
});
