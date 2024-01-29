
import developerWeb from "../../developer.js";

function socialMedia() {
  const section = document.createElement("section");
  const ul = document.createElement("ul");
  ul.classList.add("profile__socialMediaDev");

  const social = ["github", "codepen", "linkedin-square"];

  for (let i = 0; i < social.length; i++) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.classList.add("profile__linkSocialMedia");
    const icon = document.createElement("i");

    icon.setAttribute("class", `bx bxl-${social[i]}`);

    anchor.href = "#";
    anchor.title = `${social[i]}`;

    anchor.appendChild(icon);
    li.appendChild(anchor);
    ul.appendChild(li);
  }

  section.appendChild(ul);

  return section;
}

function datosDev() {
  const section = document.createElement("section");
  section.classList.add("profile__datosDev");

  //IMAGEN PERFIL
  const imgAvatar = document.createElement("img");
  imgAvatar.classList.add("profile__imgAvatar");
  imgAvatar.src = `${developerWeb.avatar}`;
  imgAvatar.alt = `Desarrollador: ${developerWeb.name}`;

  // NOMBRE DEVELOPER
  const nameDev = document.createElement("p");
  nameDev.classList.add("profile__nameDev");
  nameDev.innerHTML = `${developerWeb.name}`;

  // BANDERA PERÚ
  const countryDev = document.createElement("figure");
  countryDev.classList.add("profile__countryDev");

  const imgFlag = document.createElement("img");
  imgFlag.classList.add("profile__flagDev");
  imgFlag.src = `${developerWeb.flag}`;
  imgFlag.alt = `Bandera ${developerWeb.country}`;

  const nameCountry = document.createElement("figcaption");
  nameCountry.classList.add("profile__nameCountry");
  nameCountry.innerHTML = `${developerWeb.country}`;

  // SEPARADOR
  const elementHr = document.createElement("hr");

  countryDev.appendChild(imgFlag);
  countryDev.appendChild(nameCountry);

  section.appendChild(imgAvatar);
  section.appendChild(nameDev);
  section.appendChild(countryDev);
  section.appendChild(elementHr);

  return section;
}

function profileInfoDev() {
  const section = document.createElement("section");
  section.classList.add("profile__infodev");

  section.appendChild(datosDev());
  section.appendChild(socialMedia());

  return section;
}

export default profileInfoDev;