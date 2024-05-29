//Variables needed
let userNameTxt = document.getElementById('firstnameTxt')
let lastNameTxt = document.getElementById('lastNameTxt')
let phoneNumberTxt = document.getElementById('phoneNumberTxt')
let emailText = document.getElementById('emailTxt')
let submitBtn = document.getElementById('submitBtn')
let ul = document.getElementById('info')

document.addEventListener("DOMContentLoaded", ()=>{
    //Obtain saved info from local storage
    const saveName = localStorage.getItem('name')
    const saveLastName = localStorage.getItem('lastName')
    const savePhoneNumber = localStorage.getItem('phoneNumber')
    const saveEmail = localStorage.getItem('saveEmail')
    //Check for falsey values
    if(saveName || saveLastName || savePhoneNumber || saveEmail){
        let li = document.createElement('li')
        //Print out list to the page
            li.textContent = 
            `First Name: ${name} 
            Last Name: ${lastName}
            Phone Number: ${phoneNumber}
            Email: ${email}`
            ul.appendChild(li)
    }


})


submitBtn.addEventListener("click", ()=>{
    //Create a li element
    
    //Set new variable names to the text values (Makes it look less confuesing)
    const name = userNameTxt.value
    const lastName = lastNameTxt.value
    const phoneNumber = phoneNumberTxt.value
    const email = emailText.value
    //Check for null values in the search field
    if(name === '' || lastName === '' || 
    phoneNumber === ''|| email === ''){
        alert("Cannot leave empty")
        return
    }
    
     // Create a list item to display the user information
     let li = document.createElement('li')
     li.textContent = 
     `First Name: ${name} 
     Last Name: ${lastName}
     Phone Number: ${phoneNumber}
     Email: ${email}`
     ul.appendChild(li)

    //Save to local storage
    localStorage.setItem('First Name', name)
    localStorage.setItem('Last Name', lastName)
    localStorage.setItem('Phone Number', phoneNumber)
    localStorage.setItem('Email', email)
})
