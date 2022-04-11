async function submitLoginForm(e){
    e.preventDefault()
    const login = document.querySelector('form')
    const formData = new FormData(login)
    const formDataObj = Object.fromEntries(formData)
    // console.log(JSON.stringify(formDataObj))
    // console.log('Login Information Submitted')
    try{
        options = {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formDataObj)
        }
        const r = await fetch('http://localhost:3000/users/login', options)
        const data = await r.json()
        console.log(data.email)
        // if (data.err){ throw Error(data.err); }
        login2Feed(data)
        // console.log(data)
    }
    catch(err){
        console.log("Error logging in")
    }
}

async function submitRegisterForm(e){
    e.preventDefault()
    const register = document.querySelector('form')
    const formData = new FormData(register)                 
    const formDataObj = Object.fromEntries(formData)
    console.log(formDataObj)
    
    if(formDataObj.password_set === formDataObj.Password2){
        delete formDataObj['Password2']
        console.log('Register Information Submitted')
        try{
            options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formDataObj)
            }
            const r = await fetch('http://localhost:3000/users/register', options)
            const data = await r.json()
            console.log(data)
            login2Feed(data)
        }
        catch(err){
            console.log('Error sending information to the backend')
        }
    } else{
        alert('Password does not match')
    }
}

function login2Feed(data){
    console.log(data)
    localStorage.setItem('email', data.email);
    location.hash = '#feed';
}

function currentUser(){
    const username = localStorage.getItem('email')
    return username;
}


function logout(){
    localStorage.clear();
    location.hash = '#home';
}

