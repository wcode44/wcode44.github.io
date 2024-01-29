
function toolsTechnologies() {

  const section = document.createElement("section");
  section.classList.add("technologies__tools");

  const title = document.createElement("h2");
  title.innerHTML = "MIS HERRAMIENTAS";

  const ul = document.createElement("ul");

  // SI QUIERES CREAR OTRA HERRAMIENTA PON EL ICON EN EL ARREGLO
  const tools = ["git", "visual-studio"];

  for(let i = 0; i < tools.length; i++) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let icon = document.createElement("i");
    span.classList.add("technologies__btnTools");
    icon.classList.add("bx", `bxl-${tools[i]}`);
    span.appendChild(icon);
    li.appendChild(span);
    ul.appendChild(li);
  }

  section.appendChild(title);
  section.appendChild(ul);

  return section;

}

export default toolsTechnologies;