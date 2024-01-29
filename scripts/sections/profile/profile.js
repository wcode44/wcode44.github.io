
import profileHeader from "./profile-header.js";
import profileInfoDev from "./profile-infodev.js";
import profilePresentation from "./profile-presentation.js";
import profileProjectTech from "./profile-projectTech.js";
// import profileButtons from "./profile-buttons.js";

function profile() {
  const section = document.createElement("section");
  section.classList.add("profile");

  section.appendChild(profileHeader());
  section.appendChild(profileInfoDev());
  section.appendChild(profilePresentation());
  section.appendChild(profileProjectTech());
  // section.appendChild(profileButtons());

  return section;
}

export default profile;