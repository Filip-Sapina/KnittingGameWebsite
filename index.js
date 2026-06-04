
function getShapePoints(sides, randomazzo) {
  const points = [];

  const width = 80;
  const height = 50;

  for (let i = 0; i < sides; i++) {
      const t = i / sides;

      let x, y;

      // Top edge
      if (t < 0.25) {
          x = 50 - width / 2 + (t / 0.25) * width;
          y = 50 - height / 2;
      }
      // Right edge
      else if (t < 0.5) {
          x = 50 + width / 2;
          y = 50 - height / 2 + ((t - 0.25) / 0.25) * height;
      }
      // Bottom edge
      else if (t < 0.75) {
          x = 50 + width / 2 - ((t - 0.5) / 0.25) * width;
          y = 50 + height / 2;
      }
      // Left edge
      else {
          x = 50 - width / 2;
          y = 50 + height / 2 - ((t - 0.75) / 0.25) * height;
      }

      // Random wobble
      x += (Math.random() - 0.5) * randomazzo;
      y += (Math.random() - 0.5) * randomazzo;

      points.push({
          x: x.toFixed(2),
          y: y.toFixed(2)
      });
  }

  return points;
}
  
function PointsToClippath(points) {
    let str = "";
    points.forEach(point => {
        let str_point =  `${point.x}% ${point.y}%, `
        str += str_point;
    });

    let result = str.slice(0, -2);

    return result;
}
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 101; i += 2) {
    let element = document.createElement("div");
    element.style.backgroundImage = "linear-gradient(white, black)";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.textAlign = "center"
    element.style.padding = "100px";
    element.style.alignItems = "center";
    element.style.color = "white";
    element.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetu" 
    ;
    element.style.height = "500px";
    element.style.width = "500px";

    element.style.clipPath = `polygon(${PointsToClippath(getShapePoints(100, i))})`;

    document.getElementById("sections").appendChild(element);
  }
})