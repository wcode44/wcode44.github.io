
import developer from "../../developer.js";
import btnEmail from "../components/btnEmail.js";

function profileHeader() {
  const header = document.createElement("header");
  header.classList.add("profile__header");

  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("profile__titleHeader");

  headerTitle.innerHTML = `[ ${developer.profession.toUpperCase()} ]`;

  header.appendChild(headerTitle);
  header.appendChild(btnEmail());

  return header;
}

export default profileHeader;