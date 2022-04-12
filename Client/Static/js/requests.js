
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
  } catch (err) {
    console.log("Failed to add Habit");
  }
}


async function getAllPosts(){
    const getEmail = localStorage.getItem('email')
    const r = await fetch (`http://localhost:3000/habits/${getEmail}`)
    const r_json = r.json()
    return r_json
}


async function deleteHabit(e){
  // console.log(e.target.id)
  const habitSelected = e.target.id
  try{
    options = { 
      method: "DELETE", 
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({id: habitSelected})
    }
    const response = await fetch(`http://localhost:3000/habits/entry/${habitSelected}`, options)
    // console.log(response.json())
    // const data = await response.json()
    // console.log(response)
    window.location.reload()
  }
  catch(err){
    console.log('Failed to delete habit')
  }
}

async function increaseCounter(e){
  // console.log(e.target.id)

 
  const targetId = e.target.id.split("-")[1]
  try{
    options = {
      method: "PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({id: targetId})
    }
    const response = await fetch (`http://localhost:3000/habits/entry/${targetId}`, options)
    console.log(response)
    window.location.reload()
  }
  catch(err){
    console.log('Failed to increase counter')
  }
}