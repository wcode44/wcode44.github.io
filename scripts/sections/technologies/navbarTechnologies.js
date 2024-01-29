
// LISTA DE TECNOLOGIAS
function listTechnologies() {
  const ul = document.createElement("ul");

  // SI CREAS UNA NUEVA TECNOLOGIA APRENDIDA, PONES EL ICONO AHI
  const iconTech = [
    "html5",
    "css3",
    "javascript"
  ]

  // Y LO LISTAS
  for(let i = 0; i < iconTech.length; i++) {

    let li = document.createElement("li");

    let lbl = document.createElement("label");
    lbl.classList.add("technologies__lblTech");

    let inputRadio = document.createElement("input");
    inputRadio.classList.add("inputRadioTech");
    inputRadio.type = "radio";
    inputRadio.name = "techLearned";

    let icon = document.createElement("i");
    icon.classList.add("bx", `bxl-${iconTech[i]}`);

   

    lbl.appendChild(icon);
    lbl.appendChild(inputRadio);


    li.appendChild(lbl);
    ul.appendChild(li);

  }

  return ul;
}

// NAVBAR TECNOLOGIAS
function navbarTechnologies() {
  const nav = document.createElement("nav");
  nav.classList.add("technologies__menu");
  nav.appendChild(listTechnologies());
  return nav;
}

export default navbarTechnologies;