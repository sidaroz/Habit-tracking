async function submitHabit(e){
    e.preventDefault()
    // console.log('function called')
    const login = document.querySelector('form')
    const formData = new FormData(login)
    const formDataObj = Object.fromEntries(formData)
    console.log(formDataObj)
    try{
        options = {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formDataObj)
        }
        const r = await fetch('https://hookb.in/nP1WgkmMK3TZ7QrrdL9m', options)
        const data = await r.json()
        console.log(data)
    }
    catch(err){
        console.log("Failed to add Habit")
    }
}
    
    