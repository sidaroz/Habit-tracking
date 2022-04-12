async function submitHabit() {
  // console.log('function called')
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
  // console.log(emailAddedToBody);
  try {
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailAddedToBody),
    };
    const r = await fetch("http://localhost:3000/habits/", options);
    const data = await r.json();
    console.log(data)
    // window.location.hash="#feed"
  } catch (err) {
    console.log("Failed to add Habit");
  }
}


// fetch (`http://localhost:3000/habits/${getEmail}`)
// .then(resp => resp.json())
// .then(resp => console.log(resp))

const getEmail = localStorage.getItem('email')

async function getAllPosts(){
    const r = await fetch (`http://localhost:3000/habits/${getEmail}`)
    const r_json = r.json()
    console.log(r_json)
    return r_json
}