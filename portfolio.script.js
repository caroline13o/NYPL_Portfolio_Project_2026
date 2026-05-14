console.log("what the yurt?");

// Array Called "myProjects"
let myProjects = [
  {
    title: "can you hear me now?",
    link: "https://codesandbox.io/p/sandbox/flamboyant-lamport-myvn28",
    description:
      "User Posts their Thoughts, their Frustrations and then Deletes All (Spring 2026)",
    imageSrc: "images/beez_kneez.jpg",
  },

  {
    title: "Color Switch",
    link: "https://codesandbox.io/p/sandbox/colorswitchstarter-forked-mgrpnh",
    description:
      "Celebration of Changing the Webpage Background Color (Spring 2026)",
    imageSrc: "images/library_books_resize.jpg",
  },

  {
    title: "Data Structures & Loops",
    link: "https://codesandbox.io/p/sandbox/corrected-hw-data-structures-and-loops-starter-kfm2tn",
    description:
      "Jubilee Array of Objects Looping as Function sets HTML to the Webpage (Spring 2026)",
    imageSrc: "images/loops_structures.jpg",
  },

  {
    title: "Three Functions",
    link: "https://codesandbox.io/p/sandbox/hw-threefunctionsstarter-mcqgdt",
    description: "Fete of Functions for Forms, Inches, and Evens (Spring 2026)",
    imageSrc: "images/three_functions.jpg",
  },

  {
    title: "Operators and Conditionals",
    link: "https://codesandbox.io/p/sandbox/hw-operators-conditionals-3cgdt5",
    description:
      "If feeling IF-fy, find out if that dress is worth 20-spot discount while mulling on your gen (Spring 2026)",
    imageSrc: "images/operator_condtional.jpg",
  },

  {
    title: "Caroline's Project Code Portfolio",
    link: "https://codesandbox.io/p/sandbox/personal-portfolio-py8c3s",
    description:
      "Project Code Phase One: Personal Portfolio Webpage Project (Fall 2024)",

    imageSrc: "images/Webpage_Project_2024.jpg",
  },

  {
    title: "World of Parasols",
    link: "https://caroline13o.github.io/QCC_Final_Project_2021/",
    description:
      "CUNY QCC Web Development Project: Frontend & Backend Web Site (Summer 2021)",
    imageSrc: "images/world_parasols.jpg",
  },
];

// "myProjects" for loop
for (let i = 0; i < myProjects.length; i++) {
  displayProject(myProjects[i]);
}

// "myProjects" function sets the HTML for each of the five objects and adds it to the webpage.
function displayProject(portfolio) {
  let portfolioGrid = document.getElementById("caroline_portfolio");

  let portfolioDiv = document.createElement("div");

  let titleH2 = document.createElement("h2");
  titleH2.innerText = portfolio.title;

  let descriptionH3 = document.createElement("h3");
  descriptionH3.innerText = portfolio.description;

  let link = document.createElement("a");
  let btn = document.createElement("button");
  btn.textContent = "🐝 My Project";
  btn.style.backgroundColor = "#20B2AA"; // Color Hex LightSeaGreen
  btn.style.cursor = "pointer";

  link.href = portfolio.link;
  link.setAttribute("target", "_blank");
  link.appendChild(btn);

  let portfolioImg = document.createElement("img");
  portfolioImg.src = portfolio.imageSrc;

  portfolioDiv.append(titleH2, descriptionH3, portfolioImg, link);
  portfolioDiv.className = "portfolio-info";
  portfolioGrid.append(portfolioDiv);
}

// ********************************************** //
