function getShapePoints( sides) {
    const points = [];
    const angleStep = (Math.PI * 2) / sides;
  
    for (let i = 0; i < sides; i++) {
      const angle = angleStep * i;
      const x = (50 + ((100 * Math.cos(angle))/2)).toFixed(2);
      const y = (50 + ((100 * Math.sin(angle))/4)).toFixed(2);
      points.push({ x, y });
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
  for (let i = 2; i < 101; i += 2) {
    let element = document.createElement("div");
    element.style.backgroundImage = "linear-gradient(45deg, blue, red)";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.textAlign = "center"
    element.style.padding = "50px";
    element.style.alignItems = "center";
    element.style.color = "white";
    element.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " 
    ;
    element.style.height = "500px";
    element.style.width = "500px";

    element.style.clipPath = `polygon(${PointsToClippath(getShapePoints(i))})`;

    document.getElementById("sections").appendChild(element);
  }
})