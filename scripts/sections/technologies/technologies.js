
import headerSection from "../components/headerSection.js";
import navbarTechnologies from "./navbarTechnologies.js";
// import selectedTechnologies from "../components/selectTechnologies.js";
import toolsTechnologies from "./toolsTechnologies.js";

const headerTechnologies = headerSection("technologies", "Tecnologías");
const navbarTech = navbarTechnologies();
// const htmlSection = selectedTechnologies("html");
const toolsTech = toolsTechnologies();

function technologies() {
  const section = document.createElement("section");
  section.classList.add("technologies");

  section.appendChild(headerTechnologies);
  section.appendChild(navbarTech);
  // section.appendChild(htmlSection);
  section.appendChild(toolsTech);

  return section;
}

export default technologies;