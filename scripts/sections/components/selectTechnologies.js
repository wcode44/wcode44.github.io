
const objTechnologies = {
  htmlConcept: "Es el lenguaje de marcado estándar que utilizamos para estructurar una página web.",
  htmlPlus: 'Trato de <strong>NO USAR</strong> elementos "div", a la hora de estructurar la página que estoy armando.',
  cssConcept: "Es el lenguaje que usamos para <strong>dar estilos</strong> a los elementos que componen la página.",
  cssPlus: "No escatimo en breakpoints a la hora de maquetar un sitio.",
  jsConcept: "Es un <strong>lenguaje de programación</strong>, que se utiliza para crear contenido dinámico.",
  jsPlus: "Aún no se que poner aqui, pero ya pronto lo averiguare"
}

const objConceptLearned = {
  arr_html: [
    [ "Semántica HTML", "bueno" ],
    [ "Accesibilidad", "malo" ],
    [ "Formularios Avanzados", "medio" ],
    [ "Multimedia", "bueno" ]
  ],

  arr_css: [
    [ "Flexbox", "bueno" ],
    [ "Grid Layout", "bueno" ],
    [ "Media Queries", "bueno" ],
    [ "Metodología BEM", "bueno" ],
    [ "Preprocesador SASS", "medio" ],
    [ "Animaciones", "medio" ]
  ],

  arr_js: [
    [ "Manipulación del DOM", "bueno" ],
    [ "Estructuras de control", "bueno" ],
    [ "Programación Asíncrona", "malo" ],
    [ "Arreglos y Objetos", "bueno" ],
    [ "Gestión de Errores", "medio" ],
    [ "Gestión de Eventos", "bueno" ],
    [ "Validación de formularios", "medio" ],
    [ "Promesas", "malo" ]
  ]
}

function selectedTechnologies(technologie) {

  // TECHNOLOGIES__HTML,CSS,JS
  const section = document.createElement("section");
  section.classList.add(`technologies__${technologie}`, "technologies__active");

  // TECHNOLOGIES__TITLE
  const header = document.createElement("header");
  header.classList.add("technologies__title");

  const h3 = document.createElement("h3");
  h3.innerHTML = `${technologie.toUpperCase()}`;

  // TECHNOLOGIES__CONCEPT
  const sectionConcept = document.createElement("section");
  sectionConcept.classList.add("technologies__concept");
  const paragraphConcept = document.createElement("p");
  paragraphConcept.innerHTML = objTechnologies[`${technologie}Concept`];

  // TECHNOLOGIES__PLUS
  const sectionPlus = document.createElement("section");
  sectionPlus.classList.add("technologies__plus");

  const spanLight = document.createElement("span");
  const paragraphPlus = document.createElement("p");
  paragraphPlus.innerHTML = objTechnologies[`${technologie}Plus`];

  // TECHNOLOGIES__CONCEPTLEARNED
  const sectionConceptLearned = document.createElement("section");
  sectionConceptLearned.classList.add("technologies__conceptsLearned");

  const titleConceptLearned = document.createElement("h4");
  titleConceptLearned.innerHTML = "[ CONCEPTOS APRENDIDOS ]";

  const containerConceptLearned = document.createElement("ul");

  // SELECCIONAMOS EL ARREGLO QUE LISTAREMOS
  let arrSelected = `arr_${technologie}`;

  // ITERAMOS APUNTAMOS AL OBJ QUE CONTIENE LOS ARREGLOS
  for(let i = 0; i < objConceptLearned[arrSelected].length; i++) {

    let liConceptLearned = document.createElement("li");
    let pConceptLearned = document.createElement("p");
    let spanConceptLearned = document.createElement("span");

    pConceptLearned.innerHTML = objConceptLearned[arrSelected][i][0];
    liConceptLearned.appendChild(pConceptLearned);

    if(objConceptLearned[arrSelected][i][1] === "bueno") {
      spanConceptLearned.innerHTML = "✓";
      spanConceptLearned.classList.add("high");
      liConceptLearned.appendChild(spanConceptLearned);
    } else if(objConceptLearned[arrSelected][i][1] === "medio") {
      spanConceptLearned.innerHTML = "!";
      spanConceptLearned.classList.add("medium");
      liConceptLearned.appendChild(spanConceptLearned);
    } else {
      spanConceptLearned.innerHTML = "✖";
      spanConceptLearned.classList.add("low");
      liConceptLearned.appendChild(spanConceptLearned);
    }

    containerConceptLearned.appendChild(liConceptLearned);

  }

  header.appendChild(h3);
  sectionConcept.appendChild(paragraphConcept);
  sectionPlus.appendChild(spanLight);
  sectionPlus.appendChild(paragraphPlus);
  sectionConceptLearned.appendChild(titleConceptLearned);
  sectionConceptLearned.appendChild(containerConceptLearned);

  section.appendChild(header);
  section.appendChild(sectionConcept);
  section.appendChild(sectionPlus);
  section.appendChild(sectionConceptLearned);

  return section;
}

export default selectedTechnologies;