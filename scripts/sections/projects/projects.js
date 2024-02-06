
import headerSection from "../components/headerSection.js";
import filterProjects from "./filterProjects.js";
import selectProject from "./projectSelected.js";
import navbarProjects from "./navbarProjects.js";

const headerProjects = headerSection("projects", "Proyectos");
const sectionFilter = filterProjects();
const projectSelected = selectProject();
const sectionNavProjects = navbarProjects();



function projects() {
  const section = document.createElement("section");
  section.classList.add("projects", "projects--disabled");

  section.appendChild(headerProjects);
  section.appendChild(sectionFilter);
  section.appendChild(projectSelected);
  section.appendChild(sectionNavProjects);

  return section;
}

export default projects;