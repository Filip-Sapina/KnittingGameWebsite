const SIDE_COUT = 50;

function getShapePoints(sides, random_factor    ) {
  const points = [];

  const width = 100;
  const height = 100;

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
      x += (Math.random() - 0.5) * random_factor;
      y += (Math.random() - 0.5) * random_factor;

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

class RGB {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

function hexToRGB(hex) {
    console.log(hex)
    let h = hex.replace(/^#/, ""); 
    h = parseInt(h, 16);
    return new RGB(h>>>16, (h&0x00ff00)>>>8, h&0x0000ff);
};


document.addEventListener("DOMContentLoaded", () => {
    let elements = document.getElementsByClassName("torn-paper");
    
    Array.from(elements).forEach(element => {
        const style = window.getComputedStyle(element);

        const rnd_factor = style.getPropertyValue('--random_factor');
        if (rnd_factor != 0) {element.style.clipPath = `polygon(${PointsToClippath(getShapePoints(100, rnd_factor))})`;   };

        const bg_colour = style.getPropertyValue('--bg_colour');
        console.log(hexToRGB(bg_colour))

        
    })
    

    
})