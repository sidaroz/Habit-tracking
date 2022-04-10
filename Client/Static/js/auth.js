async function submitLoginForm(e){
    e.preventDefault()
    const login = document.querySelector('form')
    const formData = new FormData(login)
    const formDataObj = Object.fromEntries(formData)
    console.log(JSON.stringify(formDataObj))
    // console.log('Login Information Submitted')
    try{
        options = {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formDataObj)
        }
        const r = await fetch('https://hookb.in/b93WV36ZM1uKGq00yg7M', options)
        const data = await r.json()
        console.log(data.Email)
    }
    catch(err){
        console.log("Error logging in")
    }
}

async function submitRegisterForm(){
    // e.preventDefault()
    const register = document.querySelector('form')
    const formData = new FormData(register)                 
    const formDataObj = Object.fromEntries(formData)
    // console.log(formDataObj)
    
    if(formDataObj.Password1 === formDataObj.Password2){
        delete formDataObj['Password2']
        console.log('Register Information Submitted')
        try{
            options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formDataObj)
            }
            const r = await fetch('https://hookb.in/Oekj0jGWKOcqOdYYxkjm', options)
            const data = await r.json()
            console.log(data)
        }
        catch(err){
            console.log('Error sending information to the backend')
        }
    } else{
        alert('Password does not match')
    }
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}

// function login(data){
//     localStorage.setItem('username', data.user);
//     location.hash = '#feed';
// }

// function logout(){
//     localStorage.clear();
//     location.hash = '#login';
// }

