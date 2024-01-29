
function profileProjectTech() {
  const section = document.createElement("section");
  section.classList.add("profile__projectTech");

  const section1 = document.createElement("section");
  const section2 = document.createElement("section");

  const section1P1 = document.createElement("p");
  const section1P2 = document.createElement("p");
  const section2P1 = document.createElement("p");
  const section2P2 = document.createElement("p");

  section1P1.classList.add("profile__counterTech");
  section2P1.classList.add("profile__counterProject");

  section1P2.classList.add("profile__description");
  section2P2.classList.add("profile__description");

  section1P1.innerHTML = `<span>4</span><span>Tecnologías</span>`;
  section1P2.innerHTML = `Me encanta explorar nuevas herramientas y tecnicas para mejorar mi trabajo.`;

  section2P1.innerHTML = `<span>3</span><span>Proyectos</span>`;
  section2P2.innerHTML = `Estoy en busqueda constante de nuevos desafios Web.`;

  section1.appendChild(section1P1);
  section1.appendChild(section1P2);
  section2.appendChild(section2P1);
  section2.appendChild(section2P2);

  section.appendChild(section1);
  section.appendChild(section2);

  return section;
}

export default profileProjectTech;