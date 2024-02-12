
function btnEmail() {
  
  const button = document.createElement("button");
  const imgEmail = document.createElement("img");

  button.classList.add("btnSendEmail");
  button.setAttribute("title", "Enviar Correo");

  imgEmail.classList.add("imgEmail");
  imgEmail.src = `../../assets/email.webp`;
  imgEmail.alt = "Icono Email";

  button.appendChild(imgEmail);

  return button;

}

export default btnEmail;