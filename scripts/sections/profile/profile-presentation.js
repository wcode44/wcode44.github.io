
function profilePresentation() {
  const section = document.createElement("section");
  section.classList.add("profile__presentation");

  const p = document.createElement("p");
  p.innerHTML = `Hola, soy un desarrollador<br>web Front-End <strong>autodidacta</strong>, apasionado por crear experiencias digitales atractivas y funcionales.`;

  section.appendChild(p);

  return section;
}

export default profilePresentation;