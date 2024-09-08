const root = document.querySelector(".root");

const generateGrid = (rows, cols, className) => {
  const div = document.createElement("div");
  div.classList.add(className);
  root.appendChild(div);

  for (let i = 0; i < rows * cols; i++) {
    const item = document.createElement("div");
    item.textContent = i + 1;
    div.appendChild(item); // Hata buradaydı: className yerine div kullanılmalı
  }
};

generateGrid(4, 4, "container");
generateGrid(3, 3, "container");
generateGrid(5, 5, "container");
generateGrid(6, 6, "container");
