
"use strict";

import profile from "./sections/profile/profile.js";
import btnEmail from "./sections/components/btnEmail.js";
import {iconArrow, btnViewProfile} from "./sections/components/btnViewProfile.js";
// import profileButtons from "./sections/profile/profile-buttons.js";
import menuPortfolio from "./sections/components/headerPortfolio.js";
import technologies from "./sections/technologies/technologies.js";
import toolsTechnologies from "./sections/technologies/toolsTechnologies.js";
import selectedTechnologies from "./sections/components/selectTechnologies.js";
import projects from "./sections/projects/projects.js";
import myProjects from "./sections/projects/myProjects.js";

// PROFILE
const sectionProfile = profile();
const buttonEmail = btnEmail();
const iconBtnArrow = iconArrow();
const btnArrow = btnViewProfile();
// const sectionButtons = profileButtons();
const headerPortfolio = menuPortfolio();

// TECHNOLOGIES
const sectionTechnologies = technologies();
const toolsTech = toolsTechnologies();

// PROJECTS
const sectionProjects = projects();

const app = document.querySelector(".app");
const portfolio = document.createElement("main");
portfolio.classList.add("portfolio");

portfolio.appendChild(headerPortfolio);
portfolio.appendChild(sectionProfile);
portfolio.appendChild(sectionTechnologies);
portfolio.appendChild(sectionProjects);
app.appendChild(portfolio);



//============================================================
// INSERTANDO BOTONES: PROYECTO, TECNOLOGIAS, SEGUN EL VIEWPORT
//============================================================
function insertBtnsNavigation() {
  // const mobileLandscape = window.matchMedia("(max-height: 600px)").matches;
  const mobilePortrait = window.matchMedia("(max-width: 649px)").matches;
  const mobileLandscape = window.matchMedia("(max-height: 589px)").matches;

  const groupButtons = document.querySelector(".profile__buttons");
  const headerPortfolio = document.querySelector(".portfolio__header");

  // VERIFICAR SI ESTA EN TAMAÑO PHONE
  if(mobilePortrait || mobileLandscape) {

    // VERIFICAR SI LA SECCION DE GROUP BUTTONS ESTA DESACTIVADO, ACTIVARLO
    if(groupButtons.classList.contains("profile__buttons--disabled")) {
      groupButtons.classList.replace("profile__buttons--disabled", "profile__buttons--enabled");
    }

    // VERIFICA SI ESTA ACTIVO EL HEADER, DESACTIVALO
    if(headerPortfolio.classList.contains("portfolio__header--enabled")) {
      headerPortfolio.classList.replace("portfolio__header--enabled", "portfolio__header--disabled");
    }

    // SI ESTAN ACTIVADOS, DESACTIVALOS
    // if(sectionProjects.classList.contains("projects--enabled")) {
      
    //   sectionProjects.classList.replace("projects--enabled", "projects--disabled");

    // } else if(sectionTechnologies.classList.contains("technologies--enabled")) {

    //   sectionTechnologies.classList.replace("technologies--enabled", "technologies--disabled");

    // }
    

    document.querySelector(".technologies__tools").remove();
    document.querySelector(".technologies").appendChild(toolsTech);

    // DEL TABLET HACIA ADELANTE
  } else {

    // VERIFICAR SI LA SECCION DE GROUP BUTTONS ESTA ACTIVADO, DESACTIVARLO
    if(groupButtons.classList.contains("profile__buttons--enabled")) {
      groupButtons.classList.replace("profile__buttons--enabled", "profile__buttons--disabled");
    }

    // VERIFICA SI ESTA DESACTIVADO EL HEADER, ACTIVARLO
    if(headerPortfolio.classList.contains("portfolio__header--disabled")) {
      headerPortfolio.classList.replace("portfolio__header--disabled", "portfolio__header--enabled");
    }

    // SI ESTAN DESACTIVADOS, ACTIVALOS
    if(sectionProjects.classList.contains("projects--disabled") && sectionTechnologies.classList.contains("technologies--disabled")) {
        sectionProjects.classList.replace("projects--disabled", "projects--enabled");
    }

    // SI TIENE AUN EL FONDO DEL MODAL, ELIMINARLO
    if(app.classList.contains("app--activateModal")) {
      app.classList.remove("app--activateModal");
    }

    document.querySelector(".technologies__tools").remove();
    document.querySelector(".technologies__menu").appendChild(toolsTech);

  }

}
//=============================================================

// INSERTANDO UN BOTON FLECHA CUANDO ESTE EN EL RANGO
function insertBtnViewProfile() {
  const tabletWidth = window.matchMedia("(min-width: 650px) and (max-width: 999px)").matches;
  // const tabletHeight = window.matchMedia("(min-height: 601px)").matches;
  const tabletHeight = window.matchMedia("(min-height: 590px)").matches;

  if (tabletWidth && tabletHeight) {
    if (!sectionProfile.contains(btnArrow)) {
      iconBtnArrow.classList.add("bx", "bxs-arrow-from-right");
      btnArrow.appendChild(iconBtnArrow);
      btnArrow.title = "Mostrar Perfíl";
      sectionProfile.appendChild(btnArrow);
      document.querySelector(".btnSendEmail").remove();
      document.querySelector(".profile__datosDev").appendChild(buttonEmail);
    }
  } else {
    if (sectionProfile.contains(btnArrow)) {
      btnArrow.remove();
      app.classList.remove("app--activateModal");
      sectionProfile.classList.remove("profile--activate");
      document.querySelector(".btnSendEmail").remove();
      document.querySelector(".profile__header").appendChild(buttonEmail);
    }
  }
}

// EVENTO PARA MOSTRAR EL PERFIL EN MODO TABLET
btnArrow.addEventListener("click", () => {

  const sectionProfile = document.querySelector(".profile");
  sectionProfile.classList.toggle("profile--activate");
  app.classList.toggle("app--activateModal");

  if (iconBtnArrow.classList.contains("bxs-arrow-from-right")) {
    iconBtnArrow.classList.replace("bxs-arrow-from-right", "bxs-arrow-from-left");
    btnArrow.title = "Ocultar Perfíl";
  } else {
    iconBtnArrow.classList.replace("bxs-arrow-from-left", "bxs-arrow-from-right");
    btnArrow.title = "Mostrar Perfíl";
  }

})

//=======================================================
// MENU TECNOLOGIAS
//=======================================================
const lblTech = document.querySelectorAll(".technologies__lblTech");
const inputRadioTech = document.querySelectorAll(".inputRadioTech");

for(let i = 0; i < inputRadioTech.length; i++) {
  inputRadioTech[i].addEventListener("click", () => {
    if(inputRadioTech[i].checked) {

      for(let j = 0; j < inputRadioTech.length; j++) {
        if(inputRadioTech[j].hasAttribute("checked")) {

          inputRadioTech[j].removeAttribute("checked");
          inputRadioTech[j].removeAttribute("disabled");
          lblTech[j].classList.remove(`technologies__lblTech--active${j}`);
          break;

        }
      }

      document.querySelector(".technologies__active").remove();

      inputRadioTech[i].setAttribute("checked", "");
      inputRadioTech[i].setAttribute("disabled", "");
      lblTech[i].classList.add(`technologies__lblTech--active${i}`);

      // INSERTANDO LA TECNOLOGIA SELECCIONADA
      if(i === 0) {
        sectionTechnologies.appendChild(selectedTechnologies("html"));
      } else if(i === 1) {
        sectionTechnologies.appendChild(selectedTechnologies("css"));
      } else {
        sectionTechnologies.appendChild(selectedTechnologies("js"));
      }

    }
  })
}

// TECNOLOGIA SELECCIONADA POR DEFECTO
// opt = opcion
function menuTechSelected__load(opt) {
  let optionSelected = Number(opt);
  inputRadioTech[optionSelected].setAttribute("checked", "");
  inputRadioTech[optionSelected].setAttribute("disabled", "");
  lblTech[optionSelected].classList.add(`technologies__lblTech--active${optionSelected}`);

  if(optionSelected === 0) {
    sectionTechnologies.appendChild(selectedTechnologies("html"));
  } else if(optionSelected === 1) {
    sectionTechnologies.appendChild(selectedTechnologies("css"));
  } else {
    sectionTechnologies.appendChild(selectedTechnologies("js"));
  }
}
//=======================================================

//=======================================================
// SECTION PROYECTOS
//======================================================

function activeProject(projectSelected) {
  const listProjects = document.querySelectorAll(".projects__card");
  const titleProjectSelected = document.querySelector(".projects__title");
  const typeProjectSelected = document.querySelector(".projects__type");
  const descriptionProjectSelected = document.querySelector(".projects__description");
  const techUsedProjectSelected = document.querySelector(".projects__techUsed");
  const btnStartProjectSelected = document.querySelector(".projects__btnStart");

  techUsedProjectSelected.innerHTML = `<span>[</span><span class="lastBracketTech">]</span>`;
  
  // CUANDO SELECCIONES UN PROYECTO
  for(let i = 0; i < listProjects.length; i++) {
    listProjects[i].addEventListener("click", () => {

      // VERIFICAR SI UN BOTON DE PROYECTO TIENE EL ATRIBUTO DISABLED, QUITALO
      for(let m = 0; m < listProjects.length; m++) {
        if(listProjects[m].hasAttribute("disabled")) {
          listProjects[m].removeAttribute("disabled");
          break;
        }
      }

      // ELIMINANDO ICON TECH ANTERIORES
      const iconTechUsed = document.querySelectorAll(".iconTech");
      for(let n = 0; n < iconTechUsed.length; n++) {
        iconTechUsed[n].remove();
      }

      // ACTUALIZAMOS EL NOMBRE DEL PROYECTO
      titleProjectSelected.innerHTML = myProjects[i].nameProject;

      // ACTUALIZAMOS LA DESCRIPCION DEL PROYECTO
      descriptionProjectSelected.innerHTML = myProjects[i].descriptionProject;

      btnStartProjectSelected.href = `${myProjects[i].linkProject}`;

      // ACTUALIZAMOS EL TIPO DEL PROYECTO
      // CODIGO REPETIDO
      if(myProjects[i].typeProject === "landing") {
        typeProjectSelected.innerHTML = `Landing Page`;
      } else if(myProjects[i].typeProject === "game") {
        typeProjectSelected.innerHTML = `Video Game`;
      } else {
        typeProjectSelected.innerHTML = `Dashboard`;
      }

      // LISTAR ICONOS TECH USADAS
      for(let k = 0; k < myProjects[i].techUsedProject.length; k++) {
        const iconTech = document.createElement("i");
        iconTech.classList.add("bx", `bxl-${myProjects[i].techUsedProject[k]}`, "iconTech");
        techUsedProjectSelected.insertBefore(iconTech, document.querySelector(".lastBracketTech"));
      }

      // CARD PROJECT ACTIVE
      for(let j = 0; j < listProjects.length; j++) {
        if(listProjects[j].classList.contains("projects__card--active")) {
          listProjects[j].classList.remove("projects__card--active");
          break;
        }
      }

      listProjects[i].classList.add("projects__card--active");
      listProjects[i].setAttribute("disabled", ""); //DESACTIVAMOS EL BOTON

    });
  }
  
  // LOAD POR DEFECTO
  listProjects[projectSelected].classList.add("projects__card--active");
  listProjects[projectSelected].setAttribute("disabled", "");
  titleProjectSelected.innerHTML = myProjects[projectSelected].nameProject;
  descriptionProjectSelected.innerHTML = myProjects[projectSelected].descriptionProject;
  btnStartProjectSelected.href = `${myProjects[projectSelected].linkProject}`;

  // LISTAR ICONOS TECH USADAS POR DEFAULT
  for(let m = 0; m < myProjects[projectSelected].techUsedProject.length; m++) {
    const iconTech = document.createElement("i");
    iconTech.classList.add("bx", `bxl-${myProjects[projectSelected].techUsedProject[m]}`, "iconTech");
    techUsedProjectSelected.insertBefore(iconTech, document.querySelector(".lastBracketTech"));
  }


  // CODIGO REPETIDO
  if(myProjects[projectSelected].typeProject === "landing") {
    typeProjectSelected.innerHTML = `Landing Page`;
  } else if(myProjects[projectSelected].typeProject === "game") {
    typeProjectSelected.innerHTML = `Video Game`;
  } else {
    typeProjectSelected.innerHTML = `Dashboard`;
  }


}



// SCROLL HORIZONTAL PROYECTOS
const listItemsProjects = document.querySelector(".projects__groupListItems");
listItemsProjects.addEventListener("wheel", event => {
  event.preventDefault(); //PREVIENE QUE SE MUEVA EL BODY EN VERTICAL CADA QUE HAGO SCROLL
  listItemsProjects.scrollBy({
    left: event.deltaY,
    behavior: "smooth"
  })

});


// MOSTRAR LOS BOTONES DE FILTRADO POR TIPO DE PROYECTO
function activateButtons() {

  let lblFilterProjects = document.querySelector(".lblCheckFilter");
  let menuBtnFilter = document.querySelector(".projects__menuBtnFilter");
  let buttonsFilter = document.querySelectorAll(".btnFilter");
  let listItemsProjects = document.querySelectorAll(".projects__listItems");
  let btnProjects = document.querySelectorAll(".projects__card");

  // MOSTRAR BOTONES PARA FILTRAR POR TIPO DE PROYECTO
  lblFilterProjects.addEventListener("click", (event) => {

    event.preventDefault(); //PREVIENE QUE EL EVENTO SE DUPLIQUE
    lblFilterProjects.classList.toggle("lblCheckFilter--active");

    if(lblFilterProjects.classList.contains("lblCheckFilter--active")) {

      menuBtnFilter.classList.add("projects__menuBtnFilter--active")

      // CUANDO DESACTIVAMOS EL LABEL, HACER LO SIGUIENTE
    } else {

      // OCULTAR BOTONES DE FILTRO
      menuBtnFilter.classList.remove("projects__menuBtnFilter--active");

      // QUITAR LA CLASE ACTIVADO AL BOTON DE FILTRO QUE LO TENGA
      for(let i = 0; i < buttonsFilter.length; i++) {
        if(buttonsFilter[i].classList.contains("btnFilter--active")) {
          buttonsFilter[i].classList.remove("btnFilter--active");
          break;
        }
      }

      // ACTIVAR TODOS LOS LI DE LOS BOTONES PROYECTOS
      for(let j = 0; j < listItemsProjects.length; j++) {
        if(listItemsProjects[j].classList.contains("projects__listItems--disabled")) {
          listItemsProjects[j].classList.replace("projects__listItems--disabled", "projects__listItems--enabled");
        } else {
          continue;
        }
      }

    }

  })



  //===========================================================================
  // BOTONES PARA FILTRAR POR TIPO DE PROYECTO
  //===========================================================================
  // NOMBRE DE CLASES QUE VAMOS A COMPARAR
  const btnFilterClass = [
    "projects__card--iconDashboard",
    "projects__card--iconGame",
    "projects__card--iconLanding"
  ]

  for(let i = 0; i < buttonsFilter.length; i++){

    // CUANDO HAGAMOS CLIC EN CADA BOTON DE FILTRO
    buttonsFilter[i].addEventListener("click", () => {

      // QUITAMOS LA CLASE ACTIVO AL BOTON DE FILTRO QUE LO TENGA
      for(let j = 0; j < buttonsFilter.length; j++) {
        if(buttonsFilter[j].classList.contains("btnFilter--active")) {
          buttonsFilter[j].classList.remove("btnFilter--active");
          break;
        }
      }

      // QUITAMOS EL ATRIBUTO DISABLED AL BOTON QUE LO TENGA
      for(let e = 0; e < btnProjects.length; e++) {
        if(btnProjects[e].hasAttribute("disabled")) {
          btnProjects[e].removeAttribute("disabled");
          break;
        }
      }
      
      // AGREGAMOS LA CLASE ACTIVO AL BOTON FILTRO SELECCIONADO
      buttonsFilter[i].classList.add("btnFilter--active");

      // ACTIVAR Y DESACTIVAR LOS BOTONES DE PROYECTOS FILTRADOS
      for(let k = 0; k < btnProjects.length; k++) {

        if(btnProjects[k].classList.contains(btnFilterClass[i])) {

          if(listItemsProjects[k].classList.contains("projects__listItems--disabled")) {
            listItemsProjects[k].classList.replace("projects__listItems--disabled", "projects__listItems--enabled");
            
          } else {
            continue;
          }

        } else {

          // DESACTIVAMOS LOS LI QUE NO CORRESPONDEN
          listItemsProjects[k].classList.replace("projects__listItems--enabled", "projects__listItems--disabled");

          // QUITAMOS LA CLASE ACTIVO DEL BOTON PROYECTO
          for(let m = 0; m < btnProjects.length; m++) {
            if(btnProjects[m].classList.contains("projects__card--active")) {
              btnProjects[m].classList.remove("projects__card--active");
              break;
            }
          }

        }

      }

      // SELECCIONAS EL PRIMER ELEMENTO FILTRADO
      for(let li = 0; li < listItemsProjects.length; li++) {
        if(listItemsProjects[li].classList.contains("projects__listItems--enabled")) {
          activeProject(li);
          break;
        }
      }




    })

  }

}
//=======================================================

//=======================================================
// ABRIR SECCION PROYECTOS Y TECNOLOGIAS
//=======================================================

function activateBtnsViewsAndClose() {

  const btnViewSection = document.querySelectorAll(".btnViewSection");
  const btnCloseSection = document.querySelectorAll(".btnClose");

  const arrBtns = [ "technologies", "projects" ];

  for(let btn = 0; btn < btnViewSection.length; btn++) {
    btnViewSection[btn].addEventListener("click", (  ) => {

      btnViewSection[btn].classList.add("animateButton");

      setTimeout(() => {

        document.querySelector(`.${arrBtns[btn]}`).classList.replace(`${arrBtns[btn]}--disabled`, `${arrBtns[btn]}--enabled`);
        app.classList.add("app--activateModal");

      }, 600);

      // ELIMINAMOS LA CLASE PARA ANIMAR EL BOTON
      setTimeout(() => {
        btnViewSection[btn].classList.remove("animateButton")
      }, "1000");

    })
  }

  for(let btnClose = 0; btnClose < btnCloseSection.length; btnClose++) {
    btnCloseSection[btnClose].addEventListener("click", ( ) => {
      document.querySelector(`.${arrBtns[btnClose]}`).classList.replace(`${arrBtns[btnClose]}--enabled`, `${arrBtns[btnClose]}--disabled`);
      app.classList.remove("app--activateModal");
    })
  }

}

//=======================================================


window.addEventListener("load", insertBtnsNavigation);
window.addEventListener("resize", insertBtnsNavigation);
window.addEventListener("load", insertBtnViewProfile);
window.addEventListener("resize", insertBtnViewProfile);
window.addEventListener("load", () => { menuTechSelected__load(2) });
window.addEventListener("load", () => {
  activeProject(0);
});
window.addEventListener("load", activateButtons);
window.addEventListener("load", activateBtnsViewsAndClose);
