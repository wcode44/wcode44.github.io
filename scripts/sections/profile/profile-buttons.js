
function profileButtons() {
  const section = document.createElement("section");
  section.classList.add("profile__buttons");

  const btn1 = document.createElement("button");
  btn1.classList.add("btn__viewTechnologies");
  btn1.setAttribute("title", "Revisar Tecnologías");

  const btn2 = document.createElement("button");
  btn2.classList.add("btn__viewProjects");
  btn2.setAttribute("title", "Revisar Proyectos");

  section.appendChild(btn1);
  section.appendChild(btn2);

  return section;
}

export default profileButtons;