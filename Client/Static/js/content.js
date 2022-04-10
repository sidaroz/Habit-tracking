function renderHomepage(){
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

<div class="container absolute bg-dark" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`}


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
            <input type="email" id="" class="form-control" name="Email" placeholder="Email" required>
        </div>
        <div class="py-3" class="form-control">
            <input type="password" id="" class="form-control" name="Password1" placeholder="Password" required>
      
        </div>   
        <div class="py-1">
            <button type="submit" class="btn btn-primary" id="login-submit" style="width:100%" >Sign in</button> 
        </div>
    </form>
</section>

<div class="container absolute bg-dark" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`
    const login = document.querySelector('form')
    login.addEventListener('submit', submitLoginForm)

}

function renderRegisterForm() {
    body.innerHTML= `<nav class="navbar navbar-light bg-dark py-3">
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
            <input type="text" id="" class="form-control" name="Username" placeholder="Username" required>
        </div>
        <div class="py-2">
            <input type="email" id="" class="form-control" name="Email" placeholder="Email" required>
        </div>
        <div class="py-2">
            <input type="password" id="" class="form-control" name="Password1" placeholder="Password" required>
        </div>   
        <div class="py-2">
            <input type="password" id="" class="form-control" name="Password2" placeholder="Confirm Password" required>
        </div> 
        <div class="py-2">
            <button type="submit" class="btn btn-primary" id="submit" style="width:100%">Register</button> 
        </div>
    </form>
</section>

<div class="container absolute bg-dark" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`
    const register = document.querySelector('form')
    register.addEventListener('submit', submitRegisterForm)

}




async function renderFeed() {
    body.innerHTML = `<nav class="navbar navbar-light bg-dark py-3">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin:auto; color:white">Group Name</a>
    </div>
</nav>

<section>
    <h1>You have now entered the feed</h1>
</section>
<div class="container absolute bg-dark" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`
}


function render404() {
    body.innerHTML= `<nav class="navbar navbar-light bg-dark py-3">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin:auto; color:white">Group Name</a>
    </div>
</nav>

<h1> Oops! Page not Found </h2>

<div class="container absolute bg-dark" >
    <footer class="my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2"  style="color:white">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 "  style="color:white">About</a></li>
      </ul>
      <p class="text-center"  style="color:white">© 2022 GroupName, Inc</p>
    </footer>
</div>`
}
