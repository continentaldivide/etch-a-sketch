const gridContainer = document.querySelector("#container");
let gridDimension = 16;

function buildGrid() {
  for (let i = 0; i < gridDimension; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let j = 0; j < gridDimension; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridRow.appendChild(gridSquare);
      gridSquare.style.height = 600 / gridDimension + "px";
      gridSquare.style.backgroundColor = "#cacfd5";
    }
  }
}

buildGrid();

function addHover() {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#606e81";
    });
  });
}

addHover();
