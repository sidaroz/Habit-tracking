const body = document.querySelector("body");

const publicRoutes = ["#", "#login", "#register"];
const privateRoutes = ["#feed"];

window.addEventListener("hashchange", updateContent);

function updateMain(path) {
  body.innerHTML = "";
  if (path) {
    // console.log(path)
    switch (path) {
      case "#login":
        renderLoginForm();
        break;
      case "#register":
        renderRegisterForm();
        break;
      case "#feed":
        renderFeed();
        break;
      default:
        render404();
        break;
    }
  } else {
    renderHomepage();
  }
}

function updateContent() {
  const path = window.location.hash;
  console.log('triggered')
  console.log(path)
  if (privateRoutes.includes(path) && !currentUser()) {
       window.location.hash = "#";
  } else {
    updateMain(path);
  }
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

updateContent();

function createFooter(){
    // IF YOU HAVE TIME, SIMPLIFY THE CODE BY CREATING THE FOOTER FOR ALL PAGES HERE.
}

function updateNav(){
    // IF YOU HAVE TIME, SIMPLIFY THE CODE BY CREATING THE FOOTER FOR ALL PAGES HERE/
    //YOU CAN ADD A IF STATEMENT, IF THERE IS A USER, THEN CREATE THIS NAV BAR, IF NOT, CREATE THE PUBLIC ONE.
}

// Sidars changes
// This below makes it so when you click login it updates to the login section
// const btnLogin = document.querySelector(".btn-login");
// const homePageSection = document.querySelector(".home-page");
// const loginSection = document.querySelector(".login-form");
// const btnRegister = document.querySelector(".btn-register");
// const registerSection = document.querySelector(".register-form");


//   const login = document.querySelector("form");
//   login.addEventListener("submit", submitLoginForm);


//   const register = document.querySelector("form");
//   register.addEventListener("submit", submitRegisterForm);

//   const addHabitForm = document.querySelector("form");
//   addHabitForm.addEventListener("submit", submitHabit);

// const hideMainSectionShowLogin = function () {
//   homePageSection.classList.add("hidden");
//   loginSection.classList.remove("hidden");
// };

// btnLogin.addEventListener("click", hideMainSectionShowLogin);

// //Clicking register makes it so register-section opens up

// const hideMainSectionShowRegister = function () {
//   homePageSection.classList.add("hidden");
//   registerSection.classList.remove("hidden");
// };

// btnRegister.addEventListener("click", hideMainSectionShowRegister);
