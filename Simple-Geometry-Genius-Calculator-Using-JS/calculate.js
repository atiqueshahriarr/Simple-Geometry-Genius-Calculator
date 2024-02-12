console.log("Hello");

function calculateTriangleArea() {
  const base = document.getElementById("triangleFirstInput").value;
  const height = document.getElementById("triangleSecondInput").value;

  const result = 0.5 * parseFloat(base) * parseFloat(height);

  const paraArea = document.getElementById("triangleAreaShow");
  paraArea.innerText = result;
}


function calculateRectangleArea() {
  const width = document.getElementById("rectangleFirstInput").value;
  const length = document.getElementById("rectangleSecondInput").value;

  const result = 0.5 * parseFloat(width) * parseFloat(length);

  const paraArea = document.getElementById("rectangleAreaShow");
  paraArea.innerText = result;
}