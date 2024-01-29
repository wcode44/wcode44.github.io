
function headerSection(section, title) {

  const header = document.createElement("header");
  header.classList.add(`${section}__header`);

  const h2 = document.createElement("h2");
  h2.innerHTML = `[ ${title.toUpperCase()} ]`;

  const btnClose = document.createElement("button");
  const iconBtnClose = document.createElement("i");

  iconBtnClose.classList.add("bx", "bx-x");

  btnClose.classList.add("btnClose");
  btnClose.title = `Cerrar mis ${title}`;
  
  btnClose.appendChild(iconBtnClose);

  header.appendChild(h2);
  header.appendChild(btnClose);

  return header;

}

export default headerSection;