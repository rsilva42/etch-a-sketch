function darken(info) {
    info.target.style.backgroundColor = 'black';
}

function populateGrid(gridDiv, size) {
    let hoverFunction = darken;

    for(let i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for(let k = 0; k < size; k++) {
            let square = document.createElement('div');
            square.classList.add('grid-square');
            square.addEventListener('mouseover', darken);
            gridRow.appendChild(square);
        }
        gridDiv.appendChild(gridRow);
    }
}

function clearGrid() {
    let squares = document.querySelectorAll(".grid-square");

    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}

function resizeGrid() {
    let grid = document.querySelector(".grid");

    let answer = prompt("How big would you like the grid to be? Enter a number between 1 and 100.");

    // if user cancelled
    if (answer == null) {
        return;
    }

    //convert text to number
    let gridSize = +answer;

    if (gridSize > 0 && gridSize <= 100) {
        // empty grid
        grid.innerHTML = "";

        populateGrid(grid, gridSize);
        return;
    }

    // keep asking user for a valid input
    while (true) {
        answer = prompt("Invalid input: \"" + gridSize + "\" is not a number between 1 and 100.");

        // if user cancelled
        if (answer == null) {
            return;
        }

        // convert text to number
        gridSize = +answer

        if (gridSize > 0 && gridSize <= 100) {
            // empty grid
            grid.innerHTML = "";

            populateGrid(grid, gridSize);
            return;
        }
    }

}

const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear");
const resizeButton = document.querySelector(".resize");

let gridSize = 16;
populateGrid(grid, gridSize);

clearButton.addEventListener('click', clearGrid);
resizeButton.addEventListener('click', resizeGrid);
