function scrollFunction () {
    let y = window.scrollY;
    const arrow = document.getElementById("arrow");
    const arrAbout = Array.from(document.getElementsByClassName('about-invisible'));
    const arrTechno = Array.from(document.getElementsByClassName('techno-invisible'));
    const arrPortfolio = Array.from(document.getElementsByClassName('portfolio-invisible'));
    const arrContacts = Array.from(document.getElementsByClassName('contacts-invisible'));
    if (y > 300) {
      arrow.className = "arrow show";
    } else {
      arrow.className = "arrow";
    };

    if (y > 200) {
      arrAbout.forEach((elem) => {
        elem.classList.add("about-visible");
      });
    } else {
      arrAbout.forEach((elem) => {
        elem.classList.remove("about-visible")
      });
    };

    if (y > 700) {
      arrTechno.forEach((elem) => {
        elem.classList.add("techno-visible");
      });
    } else {
      arrTechno.forEach((elem) => {
        elem.classList.remove("techno-visible")
      });
    };

    if (y > 1550) {
      arrPortfolio.forEach((elem) => {
        elem.classList.add("portfolio-visible")
      });
    } else {
      arrPortfolio.forEach((elem) => {
        elem.classList.remove("portfolio-visible")
      });
    };

    if (y > 4700) {
      arrContacts.forEach((elem) => {
        elem.classList.add("contacts-visible")
      });
    } else {
      arrContacts.forEach((elem) => {
        elem.classList.remove("contacts-visible")
      });
    };
};
window.addEventListener("scroll", scrollFunction);

// Burger menu 
let menuButton = document.getElementById("menu-burger");

let menuBurgerElementTop = document.getElementById("burger-elem-top");
let menuBurgerElementMid = document.getElementById("burger-elem-mid");
let menuBurgerElementBot = document.getElementById("burger-elem-bot");

let navListBurger = document.getElementById("nav_list");

function showMenu() {
    menuBurgerElementTop.classList.toggle("burger-elem-opened");
    menuBurgerElementMid.classList.toggle("burger-elem-opened");
    menuBurgerElementBot.classList.toggle("burger-elem-opened");
    navListBurger.classList.toggle("opened");
};
menuButton.addEventListener("click", showMenu);

// Close the burger menu whern element clicked
const menuItems = document.querySelectorAll(".nav_list-item_link");
menuItems.forEach(item => {
  item.addEventListener("click", () => {
      if (navListBurger.classList.contains("opened")) {
          showMenu(); 
      }
  });
});

function checkResize() {
    if (window.innerWidth > 950) {
        // Ensure navListBurger is closed when the width is over 1000px
        navListBurger.classList.remove("opened");
        menuBurgerElementTop.classList.remove("burger-elem-opened");
        menuBurgerElementMid.classList.remove("burger-elem-opened");
        menuBurgerElementBot.classList.remove("burger-elem-opened");
    }
}
window.addEventListener("resize", checkResize);
