
function profileButtons() {
  const section = document.createElement("section");
  section.classList.add("profile__buttons", "profile__buttons--enabled");

  const btn1 = document.createElement("button");
  btn1.classList.add("btnViewSection", "btn__viewTechnologies");
  btn1.setAttribute("title", "Revisar Tecnologías");

  const btn2 = document.createElement("button");
  btn2.classList.add("btnViewSection", "btn__viewProjects");
  btn2.setAttribute("title", "Revisar Proyectos");

  section.appendChild(btn1);
  section.appendChild(btn2);

  return section;
}

export default profileButtons;