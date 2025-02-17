(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function submitLoginForm(e) {
  e.preventDefault();
  const login = document.querySelector("form");
  const formData = new FormData(login);
  const formDataObj = Object.fromEntries(formData);
  try {
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataObj),
    };
    const r = await fetch("http://localhost:3000/users/login", options);
    const data = await r.json();
    storeLoginData(data.token);
  } catch (err) {
    console.log("Error logging in");
  }
}

async function submitRegisterForm(e) {
  e.preventDefault();
  const register = document.querySelector("form");
  const formData = new FormData(register);
  const formDataObj = Object.fromEntries(formData);

  if (formDataObj.password_set === formDataObj.Password2) {
    delete formDataObj["Password2"];
    try {
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataObj),
      };
      const r = await fetch("http://localhost:3000/users/register", options);
      const data = await r.json();
      submitLoginForm(e);
    } catch (err) {
      console.log("Error sending information to the backend");
    }
  } else {
    alert("Password does not match");
  }
}

function storeLoginData(token) {
  const user = jwt_decode(token);
  localStorage.setItem("token", token);
  localStorage.setItem("username", user.username);
  localStorage.setItem("email", user.email);
  window.location.hash = "#feed";
  const bodyHTML = document.querySelector("body");
  bodyHTML.innerHTML = "";
}

function logout() {
  localStorage.clear();
  location.hash = "#";
}

},{}],2:[function(require,module,exports){
function renderHomepage() {
  const bodyHTML = document.querySelector("body");
  bodyHTML.innerHTML = "";
  //NAV
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-light bg-dark py-2");
  bodyHTML.appendChild(nav);

  const navDiv = document.createElement("div");
  navDiv.setAttribute("class", "container-fluid");
  nav.appendChild(navDiv);

  const aTagTitle = document.createElement("h1");
  aTagTitle.setAttribute("class", `highlight webpage-name`);
  aTagTitle.textContent = "Libits";

  const spanHabit = document.createElement("span");
  spanHabit.setAttribute("class", "highlight");
  spanHabit.append(aTagTitle);
  navDiv.appendChild(spanHabit);

  //SECTION
  const homeSection = document.createElement("section");
  bodyHTML.appendChild(homeSection);

  const homeBtnsDiv = document.createElement("div");
  homeBtnsDiv.setAttribute("class", "home-buttons");
  homeSection.appendChild(homeBtnsDiv);

  const loginBtnDiv = document.createElement("div");
  homeBtnsDiv.appendChild(loginBtnDiv);

  const loginBtn = document.createElement("a");
  loginBtn.setAttribute("href", "#login");
  loginBtn.setAttribute("class", "buttons");
  loginBtn.textContent = "Login";
  loginBtnDiv.appendChild(loginBtn);

  const regBtnDiv = document.createElement("div");
  homeBtnsDiv.appendChild(regBtnDiv);

  const regBtn = document.createElement("a");
  regBtn.setAttribute("href", "#register");
  regBtn.setAttribute("class", "buttons");
  regBtn.textContent = "Register";
  homeBtnsDiv.appendChild(regBtn);

  //FOOTER
  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("class", "container absolute bg-dark whole-footer");
  bodyHTML.appendChild(footerDiv);

  const footerTag = document.createElement("footer");
  footerDiv.appendChild(footerTag);

  const footerPTag = document.createElement("p");
  footerPTag.setAttribute("class", "text-center");
  footerPTag.textContent = "© 2022 Libits, Inc";
  footerTag.appendChild(footerPTag);
}

function renderLoginForm() {
  const bodyHTML = document.querySelector("body");
  bodyHTML.innerHTML = "";
  //NAV
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-light bg-dark py-2");
  bodyHTML.appendChild(nav);

  const navDiv = document.createElement("div");
  navDiv.setAttribute("class", "container-fluid");
  nav.appendChild(navDiv);

  const aTagTitle = document.createElement("h1");
  aTagTitle.setAttribute("class", `highlight webpage-name`);
  aTagTitle.textContent = "Libits";

  const spanHabit = document.createElement("span");
  spanHabit.setAttribute("class", "highlight");
  spanHabit.append(aTagTitle);
  navDiv.appendChild(spanHabit);

  //SECTION
  const logSection = document.createElement("section");
  logSection.setAttribute("class", "login-form");
  bodyHTML.appendChild(logSection);

  const logFormTag = document.createElement("form");
  logFormTag.setAttribute("class", "padding");
  logSection.appendChild(logFormTag);

  const formTitleDiv = document.createElement("div");
  formTitleDiv.setAttribute("class", "py-3");
  logFormTag.appendChild(formTitleDiv);

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Login";
  formTitleDiv.appendChild(formTitle);

  const emailDiv = document.createElement("div");
  logFormTag.appendChild(emailDiv);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("class", "form-control");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "Email");
  emailInput.setAttribute("required", "");
  emailDiv.appendChild(emailInput);

  const passDiv = document.createElement("div");
  passDiv.setAttribute("class", "py-3 ");
  logFormTag.appendChild(passDiv);

  const passInput = document.createElement("input");
  passInput.setAttribute("type", "password");
  passInput.setAttribute("class", "form-control");
  passInput.setAttribute("name", "password_set");
  passInput.setAttribute("placeholder", "Password");
  passInput.setAttribute("required", "");
  passDiv.appendChild(passInput);

  const logBtnDiv = document.createElement("div");
  logBtnDiv.setAttribute("class", "py-1");
  logFormTag.appendChild(logBtnDiv);

  const logBtn = document.createElement("button");
  logBtn.setAttribute("type", "submit");
  logBtn.setAttribute("class", "btn btn-primary login-btn");
  logBtn.setAttribute("id", "login-submit");
  logBtn.setAttribute("style", "width:100%");
  logBtn.textContent = "Sign in";
  logBtnDiv.appendChild(logBtn);

  const regHeader = document.createElement("h2");
  regHeader.setAttribute("class", "register-if-no-sign");
  regHeader.textContent = "Don't have an account? Click below to register!";

  const regBtnDiv = document.createElement("div");
  regBtnDiv.setAttribute("class", "no-login-div");

  const regBtn = document.createElement("a");
  regBtn.setAttribute("href", "#register");
  regBtn.setAttribute("class", "btn btn-primary no-login-register-btn");
  regBtn.textContent = "Register";

  logSection.append(regHeader);
  logSection.append(regBtnDiv);
  regBtnDiv.append(regBtn);
  //FOOTER
  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("class", "container absolute bg-dark whole-footer");
  bodyHTML.appendChild(footerDiv);

  const footerTag = document.createElement("footer");
  footerDiv.appendChild(footerTag);

  const footerPTag = document.createElement("p");
  footerPTag.setAttribute("class", "text-center");
  footerPTag.textContent = "© 2022 Libits, Inc";
  footerTag.appendChild(footerPTag);

  const login = document.querySelector("form");
  login.addEventListener("submit", submitLoginForm);
}

function renderRegisterForm() {
  const bodyHTML = document.querySelector("body");
  bodyHTML.innerHTML = "";
  //NAV

  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-light bg-dark py-2");
  bodyHTML.appendChild(nav);

  const navDiv = document.createElement("div");
  navDiv.setAttribute("class", "container-fluid");
  nav.appendChild(navDiv);

  const aTagTitle = document.createElement("h1");
  aTagTitle.setAttribute("class", `highlight webpage-name`);
  aTagTitle.textContent = "Libits";

  const spanHabit = document.createElement("span");
  spanHabit.setAttribute("class", "highlight");
  spanHabit.append(aTagTitle);
  navDiv.appendChild(spanHabit);
  //SECTION
  const regSection = document.createElement("section");
  regSection.setAttribute("class", "register-form");
  bodyHTML.appendChild(regSection);

  const regFormTag = document.createElement("form");
  regFormTag.setAttribute("class", "padding");
  regSection.appendChild(regFormTag);

  const formTitleDiv = document.createElement("div");
  formTitleDiv.setAttribute("class", "py-2");
  regFormTag.appendChild(formTitleDiv);

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Register";
  formTitleDiv.appendChild(formTitle);

  const userDiv = document.createElement("div");
  userDiv.setAttribute("class", "py-1");
  regFormTag.appendChild(userDiv);

  const userInput = document.createElement("input");
  userInput.setAttribute("type", "text");
  userInput.setAttribute("class", "form-control");
  userInput.setAttribute("name", "username");
  userInput.setAttribute("placeholder", "Username");
  userInput.setAttribute("required", "");
  userDiv.appendChild(userInput);

  const emailDiv = document.createElement("div");
  emailDiv.setAttribute("class", "py-1");
  regFormTag.appendChild(emailDiv);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("class", "form-control");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "Email");
  emailInput.setAttribute("required", "");
  emailDiv.appendChild(emailInput);

  const passDiv = document.createElement("div");
  passDiv.setAttribute("class", "py-1");
  regFormTag.appendChild(passDiv);

  const passInput = document.createElement("input");
  passInput.setAttribute("type", "password");
  passInput.setAttribute("class", "form-control");
  passInput.setAttribute("name", "password_set");
  passInput.setAttribute("placeholder", "Password");
  passInput.setAttribute("required", "");
  passDiv.appendChild(passInput);

  const pass2Div = document.createElement("div");
  pass2Div.setAttribute("class", "py-1");
  regFormTag.appendChild(pass2Div);

  const pass2Input = document.createElement("input");
  pass2Input.setAttribute("type", "password");
  pass2Input.setAttribute("class", "form-control");
  pass2Input.setAttribute("name", "Password2");
  pass2Input.setAttribute("placeholder", "Confirm Password");
  pass2Input.setAttribute("required", "");
  pass2Div.appendChild(pass2Input);

  const regBtnDiv = document.createElement("div");
  regBtnDiv.setAttribute("class", "py-1");
  regFormTag.appendChild(regBtnDiv);

  const regBtn = document.createElement("button");
  regBtn.setAttribute("type", "submit");
  regBtn.setAttribute("class", "btn btn-primary register-btn");
  regBtn.setAttribute("id", "submit");
  regBtn.setAttribute("style", "width:100%");
  regBtn.textContent = "Register";
  regBtnDiv.appendChild(regBtn);

  const logHeader = document.createElement("h2");
  logHeader.setAttribute("class", "register-if-no-sign");
  logHeader.textContent = "Already have an account? Click below to login!";

  const logBtnDiv = document.createElement("div");
  logBtnDiv.setAttribute("class", "no-login-div");

  const logBtn = document.createElement("a");
  logBtn.setAttribute("href", "#login");
  logBtn.setAttribute("class", "btn btn-primary no-login-register-btn");
  logBtn.textContent = "Login";

  regSection.append(logHeader);
  regSection.append(logBtnDiv);
  logBtnDiv.append(logBtn);

  //FOOTER
  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("class", "container absolute bg-dark whole-footer");
  bodyHTML.appendChild(footerDiv);

  const footerTag = document.createElement("footer");
  footerDiv.appendChild(footerTag);

  const footerPTag = document.createElement("p");
  footerPTag.setAttribute("class", "text-center");
  footerPTag.textContent = "© 2022 Libits, Inc";
  footerTag.appendChild(footerPTag);

  const register = document.querySelector("form");
  register.addEventListener("submit", submitRegisterForm);
}

async function renderFeed() {
  const r = await getAllPosts();
  console.log(r);
  const bodyHTML = document.querySelector("body");
  bodyHTML.innerHTML = "";
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-light bg-dark py-2");
  bodyHTML.appendChild(nav);

  const navDiv = document.createElement("div");
  navDiv.setAttribute("class", "container-fluid");
  nav.appendChild(navDiv);

  const addHabitBtn = document.createElement("button");
  addHabitBtn.setAttribute("class", "btn btn-primary add-habit-btn");
  addHabitBtn.setAttribute("onclick", `openTab('b1');`);
  addHabitBtn.textContent = "Add Habit";
  navDiv.appendChild(addHabitBtn);

  const aTagTitle = document.createElement("h1");
  aTagTitle.setAttribute("class", `highlight webpage-name`);
  aTagTitle.textContent = "Libits";

  const spanHabit = document.createElement("span");
  spanHabit.setAttribute("class", "highlight");
  spanHabit.append(aTagTitle);
  navDiv.appendChild(spanHabit);

  const aTagLogOutBtn = document.createElement("a");
  aTagLogOutBtn.textContent = "Log out";
  aTagLogOutBtn.setAttribute("class", `btn btn-primary`);
  aTagLogOutBtn.setAttribute("id", `logoutBtn`);
  navDiv.appendChild(aTagLogOutBtn);

  const formDiv = document.createElement("div");
  formDiv.setAttribute("class", "containerTab");
  formDiv.setAttribute("id", "b1");
  bodyHTML.appendChild(formDiv);

  const spanForm = document.createElement("span");
  spanForm.setAttribute("onclick", `this.parentElement.style.display='none'`);
  spanForm.setAttribute("class", `closebtn`);
  spanForm.textContent = "x";
  formDiv.appendChild(spanForm);

  const formTag = document.createElement("form");
  formTag.setAttribute("class", "padding add-habit-form");
  formDiv.appendChild(formTag);

  const formHeaderDiv = document.createElement("div");
  formTag.appendChild(formHeaderDiv);

  const formHeader = document.createElement("h2");
  formHeader.setAttribute("class", "addHabitTitle");
  formHeader.textContent = "Add Habit";
  formHeaderDiv.appendChild(formHeader);

  const habitNameDiv = document.createElement("div");
  formTag.appendChild(habitNameDiv);

  const habitNameInput = document.createElement("input");
  habitNameInput.setAttribute("type", "text");
  habitNameInput.setAttribute("class", "form-control");
  habitNameInput.setAttribute("name", "habit_id");
  habitNameInput.setAttribute("placeholder", "Enter Habit Name");
  habitNameInput.setAttribute("required", "");
  habitNameDiv.appendChild(habitNameInput);

  const reptitionDiv = document.createElement("div");
  reptitionDiv.setAttribute("class", "form-control");
  reptitionDiv.setAttribute("class", "py-2 repetition-holder");

  formTag.appendChild(reptitionDiv);

  const frequencyInput = document.createElement("input");
  frequencyInput.setAttribute("type", "number");
  frequencyInput.setAttribute("class", "form-control repetition-input");
  frequencyInput.setAttribute("name", "repetition");
  frequencyInput.setAttribute("placeholder", "# of Repetitions");
  frequencyInput.setAttribute("required", "");
  reptitionDiv.appendChild(frequencyInput);

  const frequencyDiv = document.createElement("div");
  frequencyDiv.setAttribute("class", "form-group");
  formTag.appendChild(frequencyDiv);

  const frequencyLabel = document.createElement("label");
  frequencyLabel.setAttribute("for", "sel1");
  frequencyLabel.setAttribute("class", "frequency");
  frequencyLabel.textContent = "Frequency:";
  frequencyDiv.appendChild(frequencyLabel);

  const selectTag = document.createElement("select");
  selectTag.setAttribute("id", "sel1");
  selectTag.setAttribute("class", "form-control");
  selectTag.setAttribute("name", "frequency");
  frequencyDiv.appendChild(selectTag);

  const dailyOption = document.createElement("option");
  dailyOption.textContent = "Daily";
  const weeklyOption = document.createElement("option");
  weeklyOption.textContent = "Weekly";

  const monthlyOption = document.createElement("option");
  monthlyOption.textContent = "Monthly";

  const yearlyOption = document.createElement("option");
  yearlyOption.textContent = "Yearly";

  selectTag.appendChild(dailyOption);
  selectTag.appendChild(weeklyOption);
  selectTag.appendChild(monthlyOption);
  selectTag.appendChild(yearlyOption);

  const submitHabitBtnDiv = document.createElement("div");
  formTag.appendChild(submitHabitBtnDiv);

  const submitHabitBtn = document.createElement("button");
  submitHabitBtn.setAttribute("type", "submit");
  submitHabitBtn.setAttribute(
    "class",
    "btn btn-primary add-habit-btn add-habit-form-btn"
  );
  submitHabitBtn.setAttribute("id", "add-habitsubmit");
  submitHabitBtn.textContent = "Add Habit";
  submitHabitBtnDiv.appendChild(submitHabitBtn);

  const allPostSection = document.createElement("section");
  bodyHTML.appendChild(allPostSection);

  const allHabitsH1 = document.createElement("h1");
  allHabitsH1.textContent = "View all Habits Below";
  allPostSection.appendChild(allHabitsH1);

  const habitDiv = document.createElement("div");
  habitDiv.setAttribute("class", "habitSection");
  allPostSection.appendChild(habitDiv);

  // THIS IS WHERE ALL THE POSTS WILL DISPLAY// :)
  const habitSection = document.querySelector(".habitSection");
  r.forEach((element) => {
    const habitDiv = document.createElement("div");
    habitDiv.setAttribute("class", "eachHabitDisplayed");

    const plusBtn = document.createElement("button");
    plusBtn.setAttribute("class", "btn btn-primary add-rep-btn");
    plusBtn.setAttribute("id", `add-${element.id}`);
    plusBtn.textContent = "+";
    habitDiv.appendChild(plusBtn);

    const eachHabitDiv = document.createElement("div");
    eachHabitDiv.setAttribute("class", "eachHabitContainer");
    habitDiv.appendChild(eachHabitDiv);

    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");
    eachHabitDiv.appendChild(rowDiv);

    const colDiv1 = document.createElement("div");
    colDiv1.setAttribute("class", `col rep-${element.id}`);
    colDiv1.textContent = `${element.cur_repetition}/${element.repetition} ${element.frequency}`;
    rowDiv.appendChild(colDiv1);

    const colDiv2 = document.createElement("div");
    colDiv2.setAttribute("class", `col habit-${element.id}`);
    colDiv2.textContent = `${element.habit_id}`;
    rowDiv.appendChild(colDiv2);

    const fireIcon = document.createElement("i");
    fireIcon.setAttribute("class", "fa-solid fa-fire-flame-curved fa-1x");
    const colDiv3 = document.createElement("div");
    colDiv3.setAttribute("class", `col streak-${element.id}`);
    colDiv3.textContent = `${element.streak}`;
    colDiv3.append(fireIcon);
    rowDiv.appendChild(colDiv3);

    const habitDeleteBtn = document.createElement("button");
    habitDeleteBtn.setAttribute("class", "btn btn-primary habitDeleteBtn");
    habitDeleteBtn.setAttribute("id", `${element.id}`);
    habitDeleteBtn.textContent = "x";
    habitDiv.appendChild(habitDeleteBtn);
    habitSection.appendChild(habitDiv);

    if (element.cur_repetition === element.repetition) {
      const repetition = document.querySelector(`.rep-${element.id}`);
      const habit = document.querySelector(`.habit-${element.id}`);
      repetition.style.textDecoration = "line-through";
      habit.style.textDecoration = "line-through";
    }

    const habitDeleteBtnSleected = document.getElementById(`${element.id}`);
    habitDeleteBtnSleected.addEventListener("click", deleteHabit);

    const increaseCountBtnSelected = document.getElementById(
      `add-${element.id}`
    );
    increaseCountBtnSelected.addEventListener("click", increaseCounter);
  });

  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("class", "container absolute bg-dark whole-footer");
  bodyHTML.appendChild(footerDiv);

  const footerTag = document.createElement("footer");
  footerDiv.appendChild(footerTag);

  const footerPTag = document.createElement("p");
  footerPTag.setAttribute("class", "text-center");
  footerPTag.textContent = "© 2022 Libits, Inc";
  footerTag.appendChild(footerPTag);

  const addHabitForm = document.querySelector("form");
  addHabitForm.addEventListener("submit", submitHabit);

  const logoutBtn = document.querySelector("#logoutBtn");
  logoutBtn.addEventListener("click", logout);
}

function render404() {
  const bodyHTML = document.querySelector("body");
  bodyHTML.innerHTML = "";
  //NAV
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-light bg-dark py-2");
  bodyHTML.appendChild(nav);

  const navDiv = document.createElement("div");
  navDiv.setAttribute("class", "container-fluid");
  nav.appendChild(navDiv);

  const aTagTitle = document.createElement("h1");
  aTagTitle.setAttribute("class", `highlight webpage-name`);
  aTagTitle.textContent = "Libits";

  const spanHabit = document.createElement("span");
  spanHabit.setAttribute("class", "highlight");
  spanHabit.append(aTagTitle);
  navDiv.appendChild(spanHabit);

  //SECTION
  const notFoundError = document.createElement("h1");
  notFoundError.textContent = "Oops! Page not Found";
  bodyHTML.appendChild(notFoundError);
  //FOOTER
  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("class", "container absolute bg-dark whole-footer");
  bodyHTML.appendChild(footerDiv);

  const footerTag = document.createElement("footer");
  footerDiv.appendChild(footerTag);

  const footerPTag = document.createElement("p");
  footerPTag.setAttribute("class", "text-center");
  footerPTag.textContent = "© 2022 Libits, Inc";
  footerTag.appendChild(footerPTag);
}

},{}],3:[function(require,module,exports){
const body = document.querySelector("body");

const publicRoutes = ["#", "#login", "#register"];
const privateRoutes = ["#feed"];

window.addEventListener("hashchange", updateContent);

function updateMain(path) {
  body.innerHTML = "";
  if (path) {
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
  const checkEmail = localStorage.getItem("email");
  if (privateRoutes.includes(path) && !checkEmail) {
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

function createFooter() {
  // IF YOU HAVE TIME, SIMPLIFY THE CODE BY CREATING THE FOOTER FOR ALL PAGES HERE.
}

function updateNav() {
  // IF YOU HAVE TIME, SIMPLIFY THE CODE BY CREATING THE FOOTER FOR ALL PAGES HERE/
  //YOU CAN ADD A IF STATEMENT, IF THERE IS A USER, THEN CREATE THIS NAV BAR, IF NOT, CREATE THE PUBLIC ONE.
}

},{}],4:[function(require,module,exports){
async function submitHabit() {
  const login = document.querySelector("form");
  const email = localStorage.getItem("email");
  const formData = new FormData(login);
  const formDataObj = Object.fromEntries(formData);
  const emailAddedToBody = {
    ...formDataObj,
    email: email,
    cur_repetition: "0",
    streak: "0",
  };
  try {
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailAddedToBody),
    };
    const r = await fetch("http://localhost:3000/habits/", options);
    const data = await r.json();
    location.hash = "#feed";
  } catch (err) {
    console.log("Failed to add Habit");
  }
}

async function getAllPosts() {
  try {
    const options = {
      headers: new Headers({ authorization: localStorage.getItem("token") }),
    };
    const getEmail = localStorage.getItem("email");
    const r = await fetch(`http://localhost:3000/habits/${getEmail}`, options);
    const r_json = await r.json();
    if (r_json.err) {
      localStorage.clear();
      location.hash = "#";
    }
    return r_json;
  } catch (err) {
    console.log("Error getting data");
  }
}

async function deleteHabit(e) {
  const habitSelected = e.target.id;
  try {
    options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: habitSelected }),
    };
    const response = await fetch(
      `http://localhost:3000/habits/entry/${habitSelected}`,
      options
    );
    // const data = await response.json()
    window.location.reload();
  } catch (err) {
    console.log("Failed to delete habit");
  }
}

async function increaseCounter(e) {
  const targetId = e.target.id.split("-")[1];
  try {
    options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: targetId }),
    };
    const response = await fetch(
      `http://localhost:3000/habits/entry/${targetId}`,
      options
    );
    window.location.reload();
  } catch (err) {
    console.log("Failed to increase counter");
  }
}

},{}]},{},[3,4,1,2]);
