
let SECTIONS = null;
function getShapePoints(sides, randomazzo) {
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
    SECTIONS = document.getElementById("sections");

    new Section("banana",
        "This waffling session is shorter than the upcoming section both of which have no real relevance to the game itself. If you've continued reading past the first sentance I'll let you in on a little secret, I wrote this section after writing the following section and as such I can make refrences to without you understanding it. the game revolves around a new technology that lets people work and browse the internet in their sleep which at the time this was set in early internet this *might* have seemed cool by today I think most people would have seen it as dystopian",
        "This is incredible and very ununtemporary text that explains in much detail how the game is incredible and you have to buy it right now. lots of rainbows and magic were put into this game so that it truly is the perfect euphoric experince to play through it. People that don't play this game might not be real so you need to watch out for people that don't play this game. Instead you should trust people that waffle to fill a text box -> I think that a very big issue in current website design is the overeliance on the minimilist aesthetic to make the design look clean and perfect which the most people generally like so companies tend to choose it for their websites but I think smaller companies and small groups should try experimenting, I played this game hypnospace outlaw that tries to emulate the old internet aesthetic which I was obviosuly not there for and it looks like it was a lot of fun, another hinderence to this though is that most apps and places to meet peoople are now specific websites which is a somewhat modern concept since it used to be that you could make your own website to host so that people can figure out who you are easier and I think sites like twitter and facebook take a lot of that intersting aspect of the internet away.",
        "https://cdn.britannica.com/88/256588-050-069B5B0F/Dante-Alighieri-portrait-Divine-Comedy-Inferno.jpg?w=400&h=300&c=crop",
        "red", "radial-gradient(green, purple)", "orange", 6, "magenta"   
    );

    

})


class Section {
    constructor(title, text_1, text_2, img_src, title_colour, paper_bg, text_colour, random_factor, bg_colour) {
        let e_section = document.createElement("div");
        e_section.style.backgroundColor = bg_colour;
        e_section.classList.add("dynamic-section");

        let e_title = document.createElement("h1");
        e_title.textContent = title;
        e_title.style.color = title_colour;
        e_title.classList.add("section-title");
        e_section.appendChild(e_title);

        let e_paper_1 = document.createElement("div")
        e_paper_1.textContent = text_1;
        e_paper_1.style.backgroundImage = paper_bg;
        e_paper_1.style.color = text_colour;
        e_paper_1.classList.add("torn-paper", "paper-1");
        e_paper_1.style.clipPath = `polygon(${PointsToClippath(getShapePoints(100, random_factor))})`;
        e_section.appendChild(e_paper_1);
        
        let e_paper_2 = document.createElement("div")
        e_paper_2.textContent = text_2;
        e_paper_2.style.backgroundImage = paper_bg;
        e_paper_2.style.color = text_colour
        e_paper_2.classList.add("torn-paper", "paper-2");
        e_paper_2.style.clipPath = `polygon(${PointsToClippath(getShapePoints(100, random_factor))})`;
        e_section.appendChild(e_paper_2);

        let e_img = document.createElement("img");
        e_img.src = img_src;
        e_img.classList.add("section-image");
        e_section.appendChild(e_img);


        SECTIONS.appendChild(e_section);


    }
}