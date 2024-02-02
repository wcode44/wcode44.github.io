
function menuPortfolio() {

  const header = document.createElement("header");
  header.classList.add("portfolio__header", "portfolio__header--disabled");

  // LOGO
  const logoPortfolio = document.createElement("span");
  logoPortfolio.classList.add("portfolio__logo");

  // MENU
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const listTech = document.createElement("li");
  const listProject = document.createElement("li");
  const barSelect = document.createElement("span");
  barSelect.classList.add("barSelect");

  ul.classList.add("portfolio__menu");

  listTech.innerHTML = "TECNOLOGÍAS";
  listProject.innerHTML = "PROYECTOS";

  ul.appendChild(listTech);
  ul.appendChild(listProject);
  
  nav.appendChild(ul);
  nav.appendChild(barSelect);

  header.appendChild(logoPortfolio);
  header.appendChild(nav);

  return header;

}

export default menuPortfolio;