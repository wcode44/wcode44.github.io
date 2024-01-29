
import myProjects from "./myProjects.js";

function navbarProjects() {

  const navSection = document.createElement("nav");
  navSection.classList.add("projects__nav");

  const ul = document.createElement("ul");
  ul.classList.add("projects__groupListItems");

  for(let i = 0; i < myProjects.length; i++) {

    let li = document.createElement("li");
    li.classList.add("projects__listItems", "projects__listItems--enabled");

    let cardProject = document.createElement("button");
    let textTitleProject = document.createTextNode(`${myProjects[i].nameProject}`);

    cardProject.title = `Proyecto ${i+1}`;

    if( myProjects[i].typeProject === "landing" ) {
      cardProject.classList.add("projects__card", "projects__card--iconLanding");
    } else if( myProjects[i].typeProject === "game" ) {
      cardProject.classList.add("projects__card", "projects__card--iconGame");
    } else {
      cardProject.classList.add("projects__card", "projects__card--iconDashboard");
    }

    cardProject.appendChild(textTitleProject);
    // cardProject.appendChild(titleProject);
    li.appendChild(cardProject);
    ul.appendChild(li);

  }

  navSection.appendChild(ul);

  return navSection;

}

export default navbarProjects;