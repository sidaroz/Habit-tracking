 function renderHomepage() {
     const bodyHTML =  document.querySelector('body')
     bodyHTML.innerHTML=''
    //NAV
    const nav = document.createElement('nav')
    nav.setAttribute('class', 'navbar navbar-light bg-dark py-3')
    bodyHTML.appendChild(nav)


        const navDiv = document.createElement('div')
        navDiv.setAttribute('class', 'container-fluid')
        nav.appendChild(navDiv)

            const aTagTitle = document.createElement('a')
            aTagTitle.setAttribute('class', `navbar-brand`)
            aTagTitle.setAttribute('style', `margin:auto; color:white`)
            aTagTitle.textContent= 'Group Name'
            navDiv.appendChild(aTagTitle)

        //SECTION 
        const homeSection = document.createElement('section')
        bodyHTML.appendChild(homeSection)

            const homeBtnsDiv = document.createElement('div')
            homeBtnsDiv.setAttribute('class', 'home-buttons')
            homeSection.appendChild(homeBtnsDiv)

                const loginBtnDiv = document.createElement('div')
                homeBtnsDiv.appendChild(loginBtnDiv)

                    const loginBtn = document.createElement('a')
                    loginBtn.setAttribute('href', '#login')
                    loginBtn.setAttribute('class', 'buttons')
                    loginBtn.textContent='Login'
                    loginBtnDiv.appendChild(loginBtn)
                
                const regBtnDiv = document.createElement('div')
                homeBtnsDiv.appendChild(regBtnDiv)

                    const regBtn = document.createElement('a')
                    regBtn.setAttribute('href', '#register')
                    regBtn.setAttribute('class', 'buttons')
                    regBtn.textContent='Register'
                    homeBtnsDiv.appendChild(regBtn)



        //FOOTER 
        const footerDiv = document.createElement('div')
        footerDiv.setAttribute('class',"container absolute bg-dark whole-footer")
        bodyHTML.appendChild(footerDiv)

            const footerTag = document.createElement('footer')
            footerDiv.appendChild(footerTag)

                const list = document.createElement('ul')
                list.setAttribute('class',"nav justify-content-center border-bottom pb-3 mb-3")
                footerTag.appendChild(list)

                    const listElement1 = document.createElement('li')
                    listElement1.setAttribute('class',"nav-item")
                    list.appendChild(listElement1)

                        const aTag1 = document.createElement('a')
                        aTag1.setAttribute('href',"#")
                        aTag1.setAttribute('class',"nav-link px-2")
                        aTag1.setAttribute('style',"color:white")
                        aTag1.textContent = 'Home'
                        listElement1.appendChild(aTag1)
                
                    const listElement2 = document.createElement('li')
                    listElement2.setAttribute('class',"nav-item")
                    list.appendChild(listElement2)

                        const aTag2 = document.createElement('a')
                        aTag2.setAttribute('href',"#")
                        aTag2.setAttribute('class',"nav-link px-2")
                        aTag2.setAttribute('style',"color:white")
                        aTag2.textContent = 'Features'
                        listElement2.appendChild(aTag2)

                    const listElement3 = document.createElement('li')
                    listElement3.setAttribute('class',"nav-item")
                    list.appendChild(listElement3)

                        const aTag3 = document.createElement('a')
                        aTag3.setAttribute('href',"#")
                        aTag3.setAttribute('class',"nav-link px-2")
                        aTag3.setAttribute('style',"color:white")
                        aTag3.textContent = 'FAQs'
                        listElement3.appendChild(aTag3)

                    const listElement4 = document.createElement('li')
                    listElement4.setAttribute('class',"nav-item")
                    list.appendChild(listElement4)

                        const aTag4 = document.createElement('a')
                        aTag4.setAttribute('href',"#")
                        aTag4.setAttribute('class',"nav-link px-2")
                        aTag4.setAttribute('style',"color:white")
                        aTag4.textContent = 'About'
                        listElement4.appendChild(aTag4)

                const footerPTag = document.createElement('p')
                footerPTag.setAttribute('class',"text-center")
                footerPTag.setAttribute('style',"color:white")
                footerPTag.textContent='© 2022 GroupName, Inc'
                footerTag.appendChild(footerPTag)
}

function renderLoginForm() {
    const bodyHTML =  document.querySelector('body')
    bodyHTML.innerHTML=''
    //NAV
    const nav = document.createElement('nav')
    nav.setAttribute('class', 'navbar navbar-light bg-dark py-3')
    bodyHTML.appendChild(nav)


        const navDiv = document.createElement('div')
        navDiv.setAttribute('class', 'container-fluid')
        nav.appendChild(navDiv)

            const aTagTitle = document.createElement('a')
            aTagTitle.setAttribute('class', `navbar-brand`)
            aTagTitle.setAttribute('style', `margin:auto; color:white`)
            aTagTitle.textContent= 'Group Name'
            navDiv.appendChild(aTagTitle)

            //SECTION 
            const logSection = document.createElement('section')
            logSection.setAttribute('class', 'login-form')
            bodyHTML.appendChild(logSection)

                const logFormTag = document.createElement('form')
                logFormTag.setAttribute('class', 'padding')
                logSection.appendChild(logFormTag)

                    const formTitleDiv = document.createElement('div')
                    formTitleDiv.setAttribute('class', 'py-3')
                    logFormTag.appendChild(formTitleDiv)

                        const formTitle = document.createElement('h2')
                        formTitle.textContent='Login'
                        formTitleDiv.appendChild(formTitle)

                    const emailDiv = document.createElement('div')
                    logFormTag.appendChild(emailDiv)

                        const emailInput = document.createElement('input')
                        emailInput.setAttribute('type', 'email')
                        emailInput.setAttribute('class', 'form-control')
                        emailInput.setAttribute('name', 'email')
                        emailInput.setAttribute('placeholder', 'Email')
                        emailInput.setAttribute('required', '')
                        emailDiv.appendChild(emailInput)

                    const passDiv = document.createElement('div')
                    passDiv.setAttribute('class', 'py-3 ')
                    logFormTag.appendChild(passDiv)

                        const passInput = document.createElement('input')
                        passInput.setAttribute('type', 'password')
                        passInput.setAttribute('class', 'form-control')
                        passInput.setAttribute('name', 'password_set')
                        passInput.setAttribute('placeholder', 'Password')
                        passInput.setAttribute('required', '')
                        passDiv.appendChild(passInput)

                    const logBtnDiv = document.createElement('div')
                    logBtnDiv.setAttribute('class', 'py-1')
                    logFormTag.appendChild(logBtnDiv)

                        const logBtn = document.createElement('button')
                        logBtn.setAttribute('type', 'submit')
                        logBtn.setAttribute('class', 'btn btn-primary')
                        logBtn.setAttribute('id', 'login-submit')
                        logBtn.setAttribute('style', 'width:100%')
                        logBtn.textContent='Sign in'
                        logBtnDiv.appendChild(logBtn)

    //FOOTER 
    const footerDiv = document.createElement('div')
    footerDiv.setAttribute('class',"container absolute bg-dark whole-footer")
    bodyHTML.appendChild(footerDiv)

        const footerTag = document.createElement('footer')
        footerDiv.appendChild(footerTag)

            const list = document.createElement('ul')
            list.setAttribute('class',"nav justify-content-center border-bottom pb-3 mb-3")
            footerTag.appendChild(list)

                const listElement1 = document.createElement('li')
                listElement1.setAttribute('class',"nav-item")
                list.appendChild(listElement1)

                    const aTag1 = document.createElement('a')
                    aTag1.setAttribute('href',"#")
                    aTag1.setAttribute('class',"nav-link px-2")
                    aTag1.setAttribute('style',"color:white")
                    aTag1.textContent = 'Home'
                    listElement1.appendChild(aTag1)
            
                const listElement2 = document.createElement('li')
                listElement2.setAttribute('class',"nav-item")
                list.appendChild(listElement2)

                    const aTag2 = document.createElement('a')
                    aTag2.setAttribute('href',"#")
                    aTag2.setAttribute('class',"nav-link px-2")
                    aTag2.setAttribute('style',"color:white")
                    aTag2.textContent = 'Features'
                    listElement2.appendChild(aTag2)

                const listElement3 = document.createElement('li')
                listElement3.setAttribute('class',"nav-item")
                list.appendChild(listElement3)

                    const aTag3 = document.createElement('a')
                    aTag3.setAttribute('href',"#")
                    aTag3.setAttribute('class',"nav-link px-2")
                    aTag3.setAttribute('style',"color:white")
                    aTag3.textContent = 'FAQs'
                    listElement3.appendChild(aTag3)

                const listElement4 = document.createElement('li')
                listElement4.setAttribute('class',"nav-item")
                list.appendChild(listElement4)

                    const aTag4 = document.createElement('a')
                    aTag4.setAttribute('href',"#")
                    aTag4.setAttribute('class',"nav-link px-2")
                    aTag4.setAttribute('style',"color:white")
                    aTag4.textContent = 'About'
                    listElement4.appendChild(aTag4)

            const footerPTag = document.createElement('p')
            footerPTag.setAttribute('class',"text-center")
            footerPTag.setAttribute('style',"color:white")
            footerPTag.textContent='© 2022 GroupName, Inc'
            footerTag.appendChild(footerPTag)
            

  const login = document.querySelector("form");
  login.addEventListener("submit", submitLoginForm);
}

function renderRegisterForm() {
    const bodyHTML =  document.querySelector('body')
     bodyHTML.innerHTML=''
    //NAV

     const nav = document.createElement('nav')
    nav.setAttribute('class', 'navbar navbar-light bg-dark py-3')
    bodyHTML.appendChild(nav)


        const navDiv = document.createElement('div')
        navDiv.setAttribute('class', 'container-fluid')
        nav.appendChild(navDiv)

            const aTagTitle = document.createElement('a')
            aTagTitle.setAttribute('class', `navbar-brand`)
            aTagTitle.setAttribute('style', `margin:auto; color:white`)
            aTagTitle.textContent= 'Group Name'
            navDiv.appendChild(aTagTitle)
    //SECTION 
    const regSection = document.createElement('section')
    regSection.setAttribute('class', 'register-form')
    bodyHTML.appendChild(regSection)

        const regFormTag = document.createElement('form')
        regFormTag.setAttribute('class', 'padding')
        regSection.appendChild(regFormTag)

            const formTitleDiv = document.createElement('div')
            formTitleDiv.setAttribute('class', 'py-3')
            regFormTag.appendChild(formTitleDiv)

                const formTitle = document.createElement('h2')
                formTitle.textContent='Register'
                formTitleDiv.appendChild(formTitle)

            const userDiv = document.createElement('div')
            userDiv.setAttribute('class', 'py-2')
            regFormTag.appendChild(userDiv)

                const userInput = document.createElement('input')
                userInput.setAttribute('type', 'text')
                userInput.setAttribute('class', 'form-control')
                userInput.setAttribute('name', 'username')
                userInput.setAttribute('placeholder', 'Username')
                userInput.setAttribute('required', '')
                userDiv.appendChild(userInput)

            const emailDiv = document.createElement('div')
            emailDiv.setAttribute('class', 'py-2')
            regFormTag.appendChild(emailDiv)

                const emailInput = document.createElement('input')
                emailInput.setAttribute('type', 'email')
                emailInput.setAttribute('class', 'form-control')
                emailInput.setAttribute('name', 'email')
                emailInput.setAttribute('placeholder', 'Email')
                emailInput.setAttribute('required', '')
                emailDiv.appendChild(emailInput)

            const passDiv = document.createElement('div')
            passDiv.setAttribute('class', 'py-2')
            regFormTag.appendChild(passDiv)

                const passInput = document.createElement('input')
                passInput.setAttribute('type', 'password')
                passInput.setAttribute('class', 'form-control')
                passInput.setAttribute('name', 'password_set')
                passInput.setAttribute('placeholder', 'Password')
                passInput.setAttribute('required', '')
                passDiv.appendChild(passInput)

            const pass2Div = document.createElement('div')
            pass2Div.setAttribute('class', 'py-2')
            regFormTag.appendChild(pass2Div)

                const pass2Input = document.createElement('input')
                pass2Input.setAttribute('type', 'password')
                pass2Input.setAttribute('class', 'form-control')
                pass2Input.setAttribute('name', 'Password2')
                pass2Input.setAttribute('placeholder', 'Confirm Password')
                pass2Input.setAttribute('required', '')
                pass2Div.appendChild(pass2Input)

            const regBtnDiv = document.createElement('div')
            regBtnDiv.setAttribute('class', 'py-2')
            regFormTag.appendChild(regBtnDiv)

                const regBtn = document.createElement('button')
                regBtn.setAttribute('type', 'submit')
                regBtn.setAttribute('class', 'btn btn-primary')
                regBtn.setAttribute('id', 'submit')
                regBtn.setAttribute('style', 'width:100%')
                regBtn.textContent='Register'
                regBtnDiv.appendChild(regBtn)

    //FOOTER 
    const footerDiv = document.createElement('div')
    footerDiv.setAttribute('class',"container absolute bg-dark whole-footer")
    bodyHTML.appendChild(footerDiv)

        const footerTag = document.createElement('footer')
        footerDiv.appendChild(footerTag)

            const list = document.createElement('ul')
            list.setAttribute('class',"nav justify-content-center border-bottom pb-3 mb-3")
            footerTag.appendChild(list)

                const listElement1 = document.createElement('li')
                listElement1.setAttribute('class',"nav-item")
                list.appendChild(listElement1)

                    const aTag1 = document.createElement('a')
                    aTag1.setAttribute('href',"#")
                    aTag1.setAttribute('class',"nav-link px-2")
                    aTag1.setAttribute('style',"color:white")
                    aTag1.textContent = 'Home'
                    listElement1.appendChild(aTag1)
            
                const listElement2 = document.createElement('li')
                listElement2.setAttribute('class',"nav-item")
                list.appendChild(listElement2)

                    const aTag2 = document.createElement('a')
                    aTag2.setAttribute('href',"#")
                    aTag2.setAttribute('class',"nav-link px-2")
                    aTag2.setAttribute('style',"color:white")
                    aTag2.textContent = 'Features'
                    listElement2.appendChild(aTag2)

                const listElement3 = document.createElement('li')
                listElement3.setAttribute('class',"nav-item")
                list.appendChild(listElement3)

                    const aTag3 = document.createElement('a')
                    aTag3.setAttribute('href',"#")
                    aTag3.setAttribute('class',"nav-link px-2")
                    aTag3.setAttribute('style',"color:white")
                    aTag3.textContent = 'FAQs'
                    listElement3.appendChild(aTag3)

                const listElement4 = document.createElement('li')
                listElement4.setAttribute('class',"nav-item")
                list.appendChild(listElement4)

                    const aTag4 = document.createElement('a')
                    aTag4.setAttribute('href',"#")
                    aTag4.setAttribute('class',"nav-link px-2")
                    aTag4.setAttribute('style',"color:white")
                    aTag4.textContent = 'About'
                    listElement4.appendChild(aTag4)

            const footerPTag = document.createElement('p')
            footerPTag.setAttribute('class',"text-center")
            footerPTag.setAttribute('style',"color:white")
            footerPTag.textContent='© 2022 GroupName, Inc'
            footerTag.appendChild(footerPTag)

  const register = document.querySelector("form");
  register.addEventListener("submit", submitRegisterForm);
}


async function renderFeed() {
    const r = await getAllPosts()
    const bodyHTML = document.querySelector('body')
    bodyHTML.innerHTML=''
    const nav = document.createElement('nav')
    nav.setAttribute('class', 'navbar navbar-light bg-dark py-3')
    bodyHTML.appendChild(nav)

        const navDiv = document.createElement('div')
        navDiv.setAttribute('class', 'container-fluid')
        nav.appendChild(navDiv)

            const addHabitBtn = document.createElement('button')
            addHabitBtn.setAttribute('class', 'btn btn-primary')
            addHabitBtn.setAttribute('onclick', `openTab('b1');`)
            addHabitBtn.textContent='Add Habit'
            navDiv.appendChild(addHabitBtn)

            const aTagTitle = document.createElement('a')
            aTagTitle.setAttribute('class', `navbar-brand`)
            aTagTitle.textContent= 'Group Name'
            navDiv.appendChild(aTagTitle)

            const aTagLogOutBtn = document.createElement('a')
            aTagLogOutBtn.textContent= 'Log out'
            aTagLogOutBtn.setAttribute('class', `btn btn-primary`)
            aTagLogOutBtn.setAttribute('id', `logoutBtn`)
            navDiv.appendChild(aTagLogOutBtn)

        const formDiv = document.createElement('div')
        formDiv.setAttribute('class', 'containerTab')
        formDiv.setAttribute('id', 'b1')
        bodyHTML.appendChild(formDiv)

            const spanForm = document.createElement('span')
            spanForm.setAttribute('onclick', `this.parentElement.style.display='none'`)
            spanForm.setAttribute('class', `closebtn`)
            spanForm.textContent= 'x'
            formDiv.appendChild(spanForm)

            const formTag = document.createElement('form')
            formTag.setAttribute('class', 'padding')
            formDiv.appendChild(formTag)

                const formHeaderDiv = document.createElement('div')
                formTag.appendChild(formHeaderDiv)

                    const formHeader = document.createElement('h2')
                    formHeader.setAttribute('class', 'addHabitTitle')
                    formHeader.textContent= 'Add Habit'
                    formHeaderDiv.appendChild(formHeader)
                
                const habitNameDiv = document.createElement('div')
                formTag.appendChild(habitNameDiv)

                    const habitNameInput = document.createElement('input')
                    habitNameInput.setAttribute('type',"text")
                    habitNameInput.setAttribute('class',"form-control")
                    habitNameInput.setAttribute('name',"habit_id")
                    habitNameInput.setAttribute('placeholder',"Enter Habit Name")
                    habitNameInput.setAttribute('required','')
                    habitNameDiv.appendChild(habitNameInput)


                const reptitionDiv = document.createElement('div')
                reptitionDiv.setAttribute('class','form-control')
                reptitionDiv.setAttribute('class','py-3')

                formTag.appendChild(reptitionDiv)

                    const frequencyInput = document.createElement('input')
                    frequencyInput.setAttribute('type',"number")
                    frequencyInput.setAttribute('class',"form-control")
                    frequencyInput.setAttribute('name',"repetition")
                    frequencyInput.setAttribute('placeholder',"# of Repetitions")
                    frequencyInput.setAttribute('required','')
                    reptitionDiv.appendChild(frequencyInput)

                const frequencyDiv = document.createElement('div')
                frequencyDiv.setAttribute('class','form-group')
                formTag.appendChild(frequencyDiv)

                    const frequencyLabel = document.createElement('label')
                    frequencyLabel.setAttribute('for',"sel1")
                    frequencyLabel.setAttribute('class',"frequency")
                    frequencyLabel.textContent='Frequency:'
                    frequencyDiv.appendChild(frequencyLabel)

                    const selectTag = document.createElement('select')
                    selectTag.setAttribute('id',"sel1")
                    selectTag.setAttribute('class',"form-control")
                    selectTag.setAttribute('name',"frequency")
                    frequencyDiv.appendChild(selectTag)

                        const dailyOption = document.createElement('option')
                        dailyOption.textContent='Daily'
                        const weeklyOption = document.createElement('option')
                        weeklyOption.textContent='Weekly'

                        const monthlyOption = document.createElement('option')
                        monthlyOption.textContent='Monthly'

                        const yearlyOption = document.createElement('option')
                        yearlyOption.textContent='Yearly'

                        selectTag.appendChild(dailyOption)
                        selectTag.appendChild(weeklyOption)
                        selectTag.appendChild(monthlyOption)
                        selectTag.appendChild(yearlyOption)

                const submitHabitBtnDiv = document.createElement('div')
                submitHabitBtnDiv.setAttribute('style',"padding-top:10px")
                formTag.appendChild(submitHabitBtnDiv)

                    const submitHabitBtn = document.createElement('button')
                    submitHabitBtn.setAttribute('type',"submit")
                    submitHabitBtn.setAttribute('class',"btn btn-primary")
                    submitHabitBtn.setAttribute('id',"add-habitsubmit")
                    submitHabitBtn.setAttribute('style',"width:100%")
                    submitHabitBtn.textContent='Add Habit'
                    submitHabitBtnDiv.appendChild(submitHabitBtn)

        const allPostSection = document.createElement('section')
        bodyHTML.appendChild(allPostSection)

            const allHabitsH1 = document.createElement('h1')
            allHabitsH1.setAttribute('style',"text-align:center")
            allHabitsH1.textContent='View all Habits Below'
            allPostSection.appendChild(allHabitsH1)

            const habitDiv = document.createElement('div')
            habitDiv.setAttribute('class',"habitSection")
            allPostSection.appendChild(habitDiv)

            // THIS IS WHERE ALL THE POSTS WILL DISPLAY// :) 
            const habitSection = document.querySelector('.habitSection')
              r.forEach(element => {
                  const habitDiv = document.createElement('div')
                  habitDiv.setAttribute('class','eachHabitDisplayed')

                    const plusBtn = document.createElement('button')
                    plusBtn.setAttribute('class','btn btn-primary')
                    plusBtn.textContent='+';
                    habitDiv.appendChild(plusBtn)

                    const eachHabitDiv = document.createElement('div')
                    eachHabitDiv.setAttribute('class','eachHabitContainer')
                    habitDiv.appendChild(eachHabitDiv)

                        const rowDiv = document.createElement('div')
                        rowDiv.setAttribute('class','row')
                        eachHabitDiv.appendChild(rowDiv)

                            const colDiv1 = document.createElement('div')
                            colDiv1.setAttribute('class','col')
                            colDiv1.textContent=`${element.cur_repetition}/${element.repetition} ${element.frequency}`;
                            rowDiv.appendChild(colDiv1)

                            const colDiv2 = document.createElement('div')
                            colDiv2.setAttribute('class','col')
                            colDiv2.textContent=`${element.habit_id}`;
                            rowDiv.appendChild(colDiv2)

                            const colDiv3 = document.createElement('div')
                            colDiv3.setAttribute('class','col')
                            colDiv3.textContent=`🔥${element.streak}`;
                            rowDiv.appendChild(colDiv3)

                    const habitDeleteBtn = document.createElement('button')
                    habitDeleteBtn.setAttribute('class','btn btn-primary habitDeleteBtn')
                    habitDeleteBtn.textContent='x'
                    habitDiv.appendChild(habitDeleteBtn)
                    habitSection.appendChild(habitDiv)
              });
        
        const footerDiv = document.createElement('div')
        footerDiv.setAttribute('class',"container absolute bg-dark whole-footer")
        bodyHTML.appendChild(footerDiv)

            const footerTag = document.createElement('footer')
            footerDiv.appendChild(footerTag)

                const list = document.createElement('ul')
                list.setAttribute('class',"nav justify-content-center border-bottom pb-3 mb-3")
                footerTag.appendChild(list)

                    const listElement1 = document.createElement('li')
                    listElement1.setAttribute('class',"nav-item")
                    list.appendChild(listElement1)

                        const aTag1 = document.createElement('a')
                        aTag1.setAttribute('href',"#")
                        aTag1.setAttribute('class',"nav-link px-2")
                        aTag1.setAttribute('style',"color:white")
                        aTag1.textContent = 'Home'
                        listElement1.appendChild(aTag1)
                
                    const listElement2 = document.createElement('li')
                    listElement2.setAttribute('class',"nav-item")
                    list.appendChild(listElement2)

                        const aTag2 = document.createElement('a')
                        aTag2.setAttribute('href',"#")
                        aTag2.setAttribute('class',"nav-link px-2")
                        aTag2.setAttribute('style',"color:white")
                        aTag2.textContent = 'Features'
                        listElement2.appendChild(aTag2)

                    const listElement3 = document.createElement('li')
                    listElement3.setAttribute('class',"nav-item")
                    list.appendChild(listElement3)

                        const aTag3 = document.createElement('a')
                        aTag3.setAttribute('href',"#")
                        aTag3.setAttribute('class',"nav-link px-2")
                        aTag3.setAttribute('style',"color:white")
                        aTag3.textContent = 'FAQs'
                        listElement3.appendChild(aTag3)

                    const listElement4 = document.createElement('li')
                    listElement4.setAttribute('class',"nav-item")
                    list.appendChild(listElement4)

                        const aTag4 = document.createElement('a')
                        aTag4.setAttribute('href',"#")
                        aTag4.setAttribute('class',"nav-link px-2")
                        aTag4.setAttribute('style',"color:white")
                        aTag4.textContent = 'About'
                        listElement4.appendChild(aTag4)

                const footerPTag = document.createElement('p')
                footerPTag.setAttribute('class',"text-center")
                footerPTag.setAttribute('style',"color:white")
                footerPTag.textContent='© 2022 GroupName, Inc'
                footerTag.appendChild(footerPTag)

  const addHabitForm = document.querySelector("form");
  addHabitForm.addEventListener("submit", submitHabit);

  const logoutBtn = document.querySelector("#logoutBtn");
  logoutBtn.addEventListener("click", logout);
}

function render404() {
    const bodyHTML =  document.querySelector('body')
    bodyHTML.innerHTML=''
    //NAV
    const nav = document.createElement('nav')
    nav.setAttribute('class', 'navbar navbar-light bg-dark py-3')
    bodyHTML.appendChild(nav)


        const navDiv = document.createElement('div')
        navDiv.setAttribute('class', 'container-fluid')
        nav.appendChild(navDiv)

            const aTagTitle = document.createElement('a')
            aTagTitle.setAttribute('class', `navbar-brand`)
            aTagTitle.setAttribute('style', `margin:auto; color:white`)
            aTagTitle.textContent= 'Group Name'
            navDiv.appendChild(aTagTitle)

    //SECTION 
    const notFoundError = document.createElement('h1')
    notFoundError.textContent='Oops! Page not Found'
    bodyHTML.appendChild(notFoundError)
    //FOOTER 
    const footerDiv = document.createElement('div')
    footerDiv.setAttribute('class',"container absolute bg-dark whole-footer")
    bodyHTML.appendChild(footerDiv)

        const footerTag = document.createElement('footer')
        footerDiv.appendChild(footerTag)

            const list = document.createElement('ul')
            list.setAttribute('class',"nav justify-content-center border-bottom pb-3 mb-3")
            footerTag.appendChild(list)

                const listElement1 = document.createElement('li')
                listElement1.setAttribute('class',"nav-item")
                list.appendChild(listElement1)

                    const aTag1 = document.createElement('a')
                    aTag1.setAttribute('href',"#")
                    aTag1.setAttribute('class',"nav-link px-2")
                    aTag1.setAttribute('style',"color:white")
                    aTag1.textContent = 'Home'
                    listElement1.appendChild(aTag1)
            
                const listElement2 = document.createElement('li')
                listElement2.setAttribute('class',"nav-item")
                list.appendChild(listElement2)

                    const aTag2 = document.createElement('a')
                    aTag2.setAttribute('href',"#")
                    aTag2.setAttribute('class',"nav-link px-2")
                    aTag2.setAttribute('style',"color:white")
                    aTag2.textContent = 'Features'
                    listElement2.appendChild(aTag2)

                const listElement3 = document.createElement('li')
                listElement3.setAttribute('class',"nav-item")
                list.appendChild(listElement3)

                    const aTag3 = document.createElement('a')
                    aTag3.setAttribute('href',"#")
                    aTag3.setAttribute('class',"nav-link px-2")
                    aTag3.setAttribute('style',"color:white")
                    aTag3.textContent = 'FAQs'
                    listElement3.appendChild(aTag3)

                const listElement4 = document.createElement('li')
                listElement4.setAttribute('class',"nav-item")
                list.appendChild(listElement4)

                    const aTag4 = document.createElement('a')
                    aTag4.setAttribute('href',"#")
                    aTag4.setAttribute('class',"nav-link px-2")
                    aTag4.setAttribute('style',"color:white")
                    aTag4.textContent = 'About'
                    listElement4.appendChild(aTag4)

            const footerPTag = document.createElement('p')
            footerPTag.setAttribute('class',"text-center")
            footerPTag.setAttribute('style',"color:white")
            footerPTag.textContent='© 2022 GroupName, Inc'
            footerTag.appendChild(footerPTag)
}