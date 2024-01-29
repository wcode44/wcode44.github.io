
// import myProjects from "./myProjects.js";

function selectProject() {

  const section = document.createElement("section");
  section.classList.add("projects__selected");

  const typeProjectText = document.createElement("p");
  const titleProjectText = document.createElement("h3");
  const descriptionProjectText = document.createElement("p");
  const techProjectUsed = document.createElement("section");
  const btnStartProject = document.createElement("a");


  typeProjectText.classList.add("projects__type");
  titleProjectText.classList.add("projects__title");
  descriptionProjectText.classList.add("projects__description");
  techProjectUsed.classList.add("projects__techUsed");
  btnStartProject.classList.add("projects__btnStart");
  btnStartProject.href = "";
  btnStartProject.target = "_blank";
  btnStartProject.innerHTML = `<i class='bx bx-play-circle' ></i>`;
  btnStartProject.title = "Mostrar Proyecto";

  section.appendChild(typeProjectText);
  section.appendChild(titleProjectText);
  section.appendChild(descriptionProjectText);
  section.appendChild(techProjectUsed);
  section.appendChild(btnStartProject);

  return section;

}

export default selectProject;