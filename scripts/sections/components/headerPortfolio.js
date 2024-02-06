
function menuPortfolio() {

  const header = document.createElement("header");
  header.classList.add("portfolio__header", "portfolio__header--disabled");

  // LOGO
  const logoPortfolio = document.createElement("span");
  logoPortfolio.classList.add("portfolio__logo");

  // MENU
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("portfolio__menu");

  const liButtons = ["technologies", "projects"];

  for(let i = 0; i < liButtons.length; i++) {
    let li = document.createElement("li");
    let btnSection = document.createElement("button");
    btnSection.classList.add("portfolio__menu_btnSection");

    if(i === 0) {
      btnSection.innerHTML = "TECNOLOGÍAS";
      btnSection.title = "Mostrar Tecnologías";
    } else {
      btnSection.innerHTML = "PROYECTOS";
      btnSection.title = "Mostrar Proyectos";
      // btnSection.classList.add("li--selected");
    }

    li.appendChild(btnSection);
    ul.appendChild(li);
  }
  
  const barSelect = document.createElement("span");
  barSelect.classList.add("barSelect", "barSelect--left");

  nav.appendChild(ul);
  nav.appendChild(barSelect);

  header.appendChild(logoPortfolio);
  header.appendChild(nav);

  return header;

}

export default menuPortfolio;