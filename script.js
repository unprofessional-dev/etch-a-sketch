const container = document.getElementById("container");
container.classList.add("container");
const randomClrsBtn = document.getElementById("randomClrsBtn");
const singleClrBtn = document.getElementById("singleClrBtn");

function clrGenerator() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
}

// const randomClr = clrGenerator();

// Using the direct function clrGenerator so it executes on every hover, using a variable would have stored a single color

function randomClrsTable(num) {
  if (num > 100) {
    return alert("Choose a value upto 100");
  }

  if (container.hasChildNodes()) {
    container.removeChild(container.firstElementChild);
  }

  const table = document.createElement("div");
  table.classList.add("table");
  for (let i = 1; i < num + 1; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    table.appendChild(row);

    for (let j = 1; j < num + 1; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
      column.addEventListener("mouseenter", () => {
        if (column.style.backgroundColor) {
          let current = parseFloat(column.style.opacity);
          column.style.opacity = current + 0.1;
          return;
        }
        const color = clrGenerator();
        column.style.backgroundColor = color;
        column.style.borderColor = color;
        column.style.opacity = 0.1;
      });
    }
  }

  container.appendChild(table);
}

function singleClrTable(num) {
  if (num > 100) {
    return alert("Choose a value upto 100");
  }

  if (container.hasChildNodes()) {
    container.removeChild(container.firstElementChild);
  }

  const color = clrGenerator();

  const table = document.createElement("div");
  table.classList.add("table");
  for (let i = 1; i < num + 1; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    table.appendChild(row);

    for (let j = 1; j < num + 1; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
      column.addEventListener("mouseenter", () => {
        if (column.style.backgroundColor) {
          let current = parseFloat(column.style.opacity);
          column.style.opacity = current + 0.1;
          return;
        }
        column.style.backgroundColor = color;
        column.style.borderColor = color;
        column.style.opacity = 0.1;
      });
    }
  }

  container.appendChild(table);
}

randomClrsBtn.addEventListener("click", () => {
  randomClrsTable(Number(prompt("Enter")));
});

singleClrBtn.addEventListener("click", () => {
  singleClrTable(Number(prompt("Enter")));
});