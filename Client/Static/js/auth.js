async function submitLoginForm(e) {
  e.preventDefault();
  const login = document.querySelector("form");
  const formData = new FormData(login);
  const formDataObj = Object.fromEntries(formData);
  // console.log(JSON.stringify(formDataObj))
  // console.log('Login Information Submitted')
  try {
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataObj),
    };
    const r = await fetch("http://localhost:3000/users/login", options);
    const data = await r.json();
    // console.log(data.token)
    // if (data.err){ throw Error(data.err); }
    // login2Feed(data)
    // console.log(data)
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
  console.log(formDataObj);

  if (formDataObj.password_set === formDataObj.Password2) {
    delete formDataObj["Password2"];
    console.log("Register Information Submitted");
    try {
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataObj),
      };
      const r = await fetch("http://localhost:3000/users/register", options);
      const data = await r.json();
      // console.log(data)
      // registerLogin(data)
      submitLoginForm(e);
    } catch (err) {
      console.log("Error sending information to the backend");
    }
  } else {
    alert("Password does not match");
  }
}

function storeLoginData(token) {
  // console.log('Function Called')
  const user = jwt_decode(token);
  // console.log(user.username)
  // console.log(token)
  // console.log(user.email)

  localStorage.setItem("token", token);
  localStorage.setItem("username", user.username);
  localStorage.setItem("email", user.email);
  window.location.hash = "#feed";
}

// function login2Feed(data){
//     // console.log(data)
//     localStorage.setItem('email', data.user.email);
//     location.hash = '#feed';
// }

// function registerLogin(data){
//     console.log(data)
//     localStorage.setItem('email', data.email);
//     location.hash = '#feed';
// }

async function currentUser() {
  const email = await localStorage.getItem("email");
  // console.log(email)
  return email;
}

function logout() {
  localStorage.clear();
  location.hash = "#";
}
