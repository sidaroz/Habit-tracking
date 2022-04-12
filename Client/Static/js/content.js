function renderHomepage() {
  body.innerHTML = `<nav class="navbar navbar-light bg-dark py-3">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin:auto; color:white">Group Name</a>
    </div>
</nav>

<section>
    <div class="home-buttons">
        <div>
            <a href="#login" class="buttons">Login</a>
        </div>
        <div>
            <a href="#register" class="buttons">Register</a>
        </div>
    </div>
</section>

<div class="container absolute bg-dark whole-footer" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`;
}

function renderLoginForm() {
  body.innerHTML = `<nav class="navbar navbar-light bg-dark py-3">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin:auto; color:white">Group Name</a>
    </div>
</nav>

<section class = "login-form">
    <form class="padding" >
        <div class="py-3">
             <h2>Login</h2>
        </div>
        <div>
            <input type="email"  class="form-control" name="email" placeholder="Email" required>
        </div>
        <div class="py-3" class="form-control">
            <input type="password"  class="form-control" name="password_set" placeholder="Password" required>
      
        </div>   
        <div class="py-1">
            <button type="submit" class="btn btn-primary" id="login-submit" style="width:100%" >Sign in</button> 
        </div>
    </form>
</section>

<div class="container absolute bg-dark whole-footer" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`;
  const login = document.querySelector("form");
  login.addEventListener("submit", submitLoginForm);
}

function renderRegisterForm() {
  body.innerHTML = `<nav class="navbar navbar-light bg-dark py-3">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin:auto; color:white">Group Name</a>
    </div>
</nav>

<section class = "register-form">
    <form class="padding" >
        <div class="py-3">
             <h2>Register</h2>
        </div>
        <div class="py-2">
            <input type="text"  class="form-control" name="username" placeholder="Username" required>
        </div>
        <div class="py-2">
            <input type="email"  class="form-control" name="email" placeholder="Email" required>
        </div>
        <div class="py-2">
            <input type="password"  class="form-control" name="password_set" placeholder="Password" required>
        </div>   
        <div class="py-2">
            <input type="password"  class="form-control" name="Password2" placeholder="Confirm Password" required>
        </div> 
        <div class="py-2">
            <button type="submit" class="btn btn-primary" id="submit" style="width:100%">Register</button> 
        </div>
    </form>
</section>

<div class="container absolute bg-dark whole-footer" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`;
  const register = document.querySelector("form");
  register.addEventListener("submit", submitRegisterForm);
}


async function renderFeed() {
    // location.reload()
    const r = await getAllPosts()
    // console.log(r)
    // const bodyHTML = document.querySelector('body')
    
    // const nav = document.createElement('nav')
    // nav.setAttribute('class', 'navbar navbar-light bg-dark py-3')
    // bodyHTML.appendChild(nav)

    //     const navDiv = document.createElement('div')
    //     navDiv.setAttribute('class', 'container-fluid')
    //     nav.appendChild(navDiv)

    //         const addHabitBtn = document.createElement('button')
    //         addHabitBtn.setAttribute('class', 'btn btn-primary')
    //         addHabitBtn.setAttribute('onclick', `openTab('b1');`)
    //         addHabitBtn.textContent='Add Habit'
    //         navDiv.appendChild(addHabitBtn)

    //         const aTagTitle = document.createElement('a')
    //         aTagTitle.setAttribute('class', `navbar-brand`)
    //         aTagTitle.textContent= 'Group Name'
    //         navDiv.appendChild(aTagTitle)

    //         const aTagLogOutBtn = document.createElement('a')
    //         aTagLogOutBtn.textContent= 'Log out'
    //         aTagLogOutBtn.setAttribute('class', `btn btn-primary`)
    //         aTagLogOutBtn.setAttribute('id', `logoutBtn`)
    //         navDiv.appendChild(aTagLogOutBtn)

    //     const formDiv = document.createElement('div')
    //     formDiv.setAttribute('class', 'containerTab')
    //     formDiv.setAttribute('id', 'b1')
    //     bodyHTML.appendChild(formDiv)

    //         const spanForm = document.createElement('span')
    //         spanForm.setAttribute('onclick', `this.parentElement.style.display='none'`)
    //         spanForm.setAttribute('class', `closebtn`)
    //         spanForm.textContent= 'x'
    //         formDiv.appendChild(spanForm)

    //         const formTag = document.createElement('form')
    //         formTag.setAttribute('class', 'padding')
    //         formDiv.appendChild(formTag)

    //             const formHeaderDiv = document.createElement('div')
    //             formTag.appendChild(formHeaderDiv)

    //                 const formHeader = document.createElement('h2')
    //                 formHeader.setAttribute('class', 'addHabitTitle')
    //                 formHeader.textContent= 'Add Habit'
    //                 formHeaderDiv.appendChild(formHeader)
                
    //             const habitNameDiv = document.createElement('div')
    //             formTag.appendChild(habitNameDiv)

    //                 const habitNameInput = document.createElement('input')
    //                 habitNameInput.setAttribute('type',"text")
    //                 habitNameInput.setAttribute('class',"form-control")
    //                 habitNameInput.setAttribute('name',"habit_id")
    //                 habitNameInput.setAttribute('placeholder',"Enter Habit Name")
    //                 // habitNameInput.setAttribute('required')
    //                 habitNameDiv.appendChild(habitNameInput)


    //             const reptitionDiv = document.createElement('div')
    //             reptitionDiv.setAttribute('class','form-control')
    //             reptitionDiv.setAttribute('class','py-3')

    //             formTag.appendChild(reptitionDiv)

    //                 const frequencyInput = document.createElement('input')
    //                 frequencyInput.setAttribute('type',"number")
    //                 frequencyInput.setAttribute('class',"form-control")
    //                 frequencyInput.setAttribute('name',"repetition")
    //                 frequencyInput.setAttribute('placeholder',"# of Repetitions")
    //                 // frequencyInput.setAttribute('required')
    //                 reptitionDiv.appendChild(frequencyInput)

    //             const frequencyDiv = document.createElement('div')
    //             frequencyDiv.setAttribute('class','form-group')
    //             formTag.appendChild(frequencyDiv)

    //                 const frequencyLabel = document.createElement('label')
    //                 frequencyLabel.setAttribute('for',"sel1")
    //                 frequencyLabel.setAttribute('class',"frequency")
    //                 frequencyLabel.textContent='Frequency:'
    //                 frequencyDiv.appendChild(frequencyLabel)

    //                 const selectTag = document.createElement('select')
    //                 selectTag.setAttribute('id',"sel1")
    //                 selectTag.setAttribute('class',"form-control")
    //                 selectTag.setAttribute('name',"frequency")
    //                 frequencyDiv.appendChild(selectTag)

    //                     const dailyOption = document.createElement('option')
    //                     dailyOption.textContent='Daily'
    //                     const weeklyOption = document.createElement('option')
    //                     weeklyOption.textContent='Weekly'

    //                     const monthlyOption = document.createElement('option')
    //                     monthlyOption.textContent='Monthly'

    //                     const yearlyOption = document.createElement('option')
    //                     yearlyOption.textContent='Yearly'

    //                     selectTag.appendChild(dailyOption)
    //                     selectTag.appendChild(weeklyOption)
    //                     selectTag.appendChild(monthlyOption)
    //                     selectTag.appendChild(yearlyOption)

    //             const submitHabitBtnDiv = document.createElement('div')
    //             submitHabitBtnDiv.setAttribute('style',"padding-top:10px")
    //             formTag.appendChild(submitHabitBtnDiv)

    //                 const submitHabitBtn = document.createElement('button')
    //                 submitHabitBtn.setAttribute('type',"submit")
    //                 submitHabitBtn.setAttribute('class',"btn btn-primary")
    //                 submitHabitBtn.setAttribute('id',"add-habitsubmit")
    //                 submitHabitBtn.setAttribute('style',"width:100%")
    //                 submitHabitBtn.textContent='Add Habit'
    //                 submitHabitBtnDiv.appendChild(submitHabitBtn)

    //     const allPostSection = document.createElement('section')
    //     bodyHTML.appendChild(allPostSection)

    //         const allHabitsH1 = document.createElement('h1')
    //         allHabitsH1.setAttribute('style',"text-align:center")
    //         allHabitsH1.textContent='View all Habits Below'
    //         allPostSection.appendChild(allHabitsH1)

    //         const habitDiv = document.createElement('div')
    //         habitDiv.setAttribute('class',"habitSection")
    //         allPostSection.appendChild(habitDiv)

    //         // THIS IS WHERE ALL THE POSTS WILL DISPLAY// :) 
        
    //     const footerDiv = document.createElement('div')
    //     footerDiv.setAttribute('class',"container absolute bg-dark whole-footer")
    //     bodyHTML.appendChild(footerDiv)

    //         const footerTag = document.createElement('footer')
    //         footerTag.setAttribute('class',"my-4")
    //         footerDiv.appendChild(footerTag)

    //             const list = document.createElement('ul')
    //             list.setAttribute('class',"nav justify-content-center border-bottom pb-3 mb-3")
    //             footerTag.appendChild(list)

    //                 const listElement1 = document.createElement('li')
    //                 listElement1.setAttribute('class',"nav-item")
    //                 list.appendChild(listElement1)

    //                     const aTag1 = document.createElement('a')
    //                     aTag1.setAttribute('href',"#")
    //                     aTag1.setAttribute('class',"nav-link px-2")
    //                     aTag1.setAttribute('style',"color:white")
    //                     aTag1.textContent = 'Home'
    //                     listElement1.appendChild(aTag1)
                
    //                 const listElement2 = document.createElement('li')
    //                 listElement2.setAttribute('class',"nav-item")
    //                 list.appendChild(listElement2)

    //                     const aTag2 = document.createElement('a')
    //                     aTag2.setAttribute('href',"#")
    //                     aTag2.setAttribute('class',"nav-link px-2")
    //                     aTag2.setAttribute('style',"color:white")
    //                     aTag2.textContent = 'Features'
    //                     listElement2.appendChild(aTag2)

    //                 const listElement3 = document.createElement('li')
    //                 listElement3.setAttribute('class',"nav-item")
    //                 list.appendChild(listElement3)

    //                     const aTag3 = document.createElement('a')
    //                     aTag3.setAttribute('href',"#")
    //                     aTag3.setAttribute('class',"nav-link px-2")
    //                     aTag3.setAttribute('style',"color:white")
    //                     aTag3.textContent = 'FAQs'
    //                     listElement3.appendChild(aTag3)

    //                 const listElement4 = document.createElement('li')
    //                 listElement4.setAttribute('class',"nav-item")
    //                 list.appendChild(listElement4)

    //                     const aTag4 = document.createElement('a')
    //                     aTag4.setAttribute('href',"#")
    //                     aTag4.setAttribute('class',"nav-link px-2")
    //                     aTag4.setAttribute('style',"color:white")
    //                     aTag4.textContent = 'About'
    //                     listElement4.appendChild(aTag4)

    //             const footerPTag = document.createElement('p')
    //             footerPTag.setAttribute('class',"text-center")
    //             footerPTag.setAttribute('style',"color:white")
    //             footerPTag.textContent='© 2022 GroupName, Inc'
    //             footerTag.appendChild(footerPTag)


  body.innerHTML = await `<nav class="navbar navbar-light bg-dark py-3" >
    <div class="container-fluid">
        <button class="btn btn-primary" onclick="openTab('b1');">Add Habit</button>
        <a class="navbar-brand" >Group Name</a>
        <a href="" class="btn btn-primary" id = "logoutBtn">Log out</a>
    </div>
</nav>
<div id="b1" class="containerTab">
    <span onclick="this.parentElement.style.display='none'" class="closebtn">x</span>
    <form class="padding" >
        <div>
             <h2 class="addHabitTitle">Add Habit</h2>
        </div>
        <div>
            <input type="text"  class="form-control" name="habit_id" placeholder="Enter Habit Name" required>
        </div> 
        <div class="py-3" class="form-control">
            <input type="number"  class="form-control" name="repetition" placeholder="# of Repetitions" required>
        </div>  
        <div class="form-group" >
            <label for="sel1" class="frequency">Frequency:</label>
            <select class="form-control" id="sel1" name="frequency">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
            </select>
        </div>
        <div style="padding-top:10px">
            <button type="submit" class="btn btn-primary" id="add-habitsubmit" style="width:100%">Add Habit</button> 
        </div>
    </form>
</div>


<section>
<h1 style="text-align:center">View all Habits Below</h1>

<div  class="habitSection"> 
    
    
</div>

</section>  
<div class="container absolute bg-dark whole-footer" >
    <footer >
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`;

  const addHabitForm = document.querySelector("form");
  addHabitForm.addEventListener("submit", submitHabit);

  const logoutBtn = document.querySelector("#logoutBtn");
  logoutBtn.addEventListener("click", logout);

  const habitSection = document.querySelector('.habitSection')
    console.log(habitSection)
  r.forEach(element => {
      console.log('function called')
      const habitDiv = document.createElement('div')
      habitDiv.setAttribute('class','eachHabitDisplayed')
      habitDiv.innerHTML=`<button class="btn btn-primary">+</button>
      <div class="eachHabitContainer">
          <div class="row">
              <div class="col">${element.cur_repetition}/${element.repetition} ${element.frequency}</div> 
              <div class="col" >${element.habit_id}</div>
              <div class="col">🔥${element.streak}</div>
          </div>
      </div>
      <button class="btn btn-primary habitDeleteBtn">x</button>`
      habitSection.appendChild(habitDiv)
  });
}

function render404() {
  body.innerHTML = `<nav class="navbar navbar-light bg-dark py-3">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin:auto; color:white">Group Name</a>
    </div>
</nav>

<h1> Oops! Page not Found </h2>

<div class="container absolute bg-dark whole-footer" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`;
}
