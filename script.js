const container = document.querySelector(".grid-container");
const rangeNumber = document.querySelector(".range-number");
const rangeSize = document.querySelector(".select-size");
const blackBtn = document.querySelector(".black-button");
const resetBtn = document.querySelector(".reset-button");
const eraseBtn = document.querySelector(".eraser-button");
const rgbBtn = document.querySelector(".rgb-button");

rangeNumber.textContent = rangeSize.value;
let grid = rangeSize.value;

function createGrid(grid) {
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    for(let i = 0; i < grid * grid; i++) {
        let gridElement = document.createElement('div');
        gridElement.style.backgroundColor = "white";
        gridElement.classList.add('grid-element');
        container.insertAdjacentElement("beforeend", gridElement);
    }
}

function clearGrid() {
    let grids = container.querySelectorAll('div');
    grids.forEach(removedGrid => removedGrid.remove());
}

function colorGrid() {
    let grids = container.querySelectorAll('div');
    grids.forEach(coloredGrid => coloredGrid.addEventListener("mouseover", () => {
        coloredGrid.style.backgroundColor = "black";
    }))
}

function resetGrid() {
    let grids = container.querySelectorAll('div');
    grids.forEach(coloredGrid => coloredGrid.style.backgroundColor = "white");  
}

function eraseGrid() {
    let grids = container.querySelectorAll('div');
    grids.forEach(coloredGrid => coloredGrid.addEventListener("mouseover", () => {
        coloredGrid.style.backgroundColor = "white";
    }))
}

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function rgbGrid() {
    let grids = container.querySelectorAll('div');
    grids.forEach(coloredGrid => coloredGrid.addEventListener("mouseover", () => {
        coloredGrid.style.backgroundColor = `#${randomColor()}`;
    }))
}

rangeSize.addEventListener("input", () => {
    clearGrid();
    rangeNumber.textContent = rangeSize.value;
    grid = rangeSize.value;
    createGrid(grid);
})

createGrid(16);

eraseBtn.addEventListener("click", eraseGrid);
blackBtn.addEventListener("click", colorGrid);
resetBtn.addEventListener("click", resetGrid);
rgbBtn.addEventListener("click", rgbGrid);