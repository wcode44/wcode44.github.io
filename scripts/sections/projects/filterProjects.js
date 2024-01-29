
function filterProjects() {

  // CONTENEDOR PRINCIPAL FILTER
  const section = document.createElement("section");
  section.classList.add("projects__filter");

  // SECTION BTN FILTER
  const sectCheckFilter = document.createElement("section");
  sectCheckFilter.classList.add("projects__lblFilter");
  
  const txtFilter = document.createElement("p");
  txtFilter.innerHTML = "Filtrar por:";
  
  const sectInputCheck = document.createElement("section");
  const lblCheckFilter = document.createElement("label");
  lblCheckFilter.classList.add("lblCheckFilter");
  lblCheckFilter.title = "Activar Filtro";

  const btnControl = document.createElement("span");
  btnControl.classList.add("btnControl");

  const checkFilter = document.createElement("input");
  checkFilter.classList.add("checkFilter");
  checkFilter.type = "checkbox";

  lblCheckFilter.appendChild(btnControl);
  lblCheckFilter.appendChild(checkFilter);
  sectInputCheck.appendChild(lblCheckFilter);
  sectCheckFilter.appendChild(txtFilter);
  sectCheckFilter.appendChild(sectInputCheck);

  // SECTION NAV FILTER
  const sectOptionsFilter = document.createElement("nav");
  sectOptionsFilter.classList.add("projects__menuBtnFilter");

  const ul = document.createElement("ul");

  const icon = ["bxs-dashboard", "bx-joystick", "bx-news"];
  const nameMenu = ["dashboards", "games", "landing page"];
  
  for(let i = 0; i < icon.length; i++) {

    const li = document.createElement("li");

    const btnFilter = document.createElement("button");
    btnFilter.classList.add("btnFilter");

    const iconFilter = document.createElement("i");
    iconFilter.classList.add("bx", `${icon[i]}`);

    const nameFilter = document.createElement("span");
    nameFilter.innerHTML = `${nameMenu[i].toUpperCase()}`;

    btnFilter.appendChild(iconFilter);
    btnFilter.appendChild(nameFilter);
    li.appendChild(btnFilter);
    ul.appendChild(li);
  }

  sectOptionsFilter.appendChild(ul);

  section.appendChild(sectCheckFilter);
  section.appendChild(sectOptionsFilter);

  return section;

}

export default filterProjects;