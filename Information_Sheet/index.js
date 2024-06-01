//Variables needed
let userNameTxt = document.getElementById('firstnameTxt')
let lastNameTxt = document.getElementById('lastNameTxt')
let phoneNumberTxt = document.getElementById('phoneNumberTxt')
let emailText = document.getElementById('emailTxt')
let submitBtn = document.getElementById('submitBtn')
let ul = document.getElementById('info')


submitBtn.addEventListener("click", ()=>{
//Function to make the phone number look like a phone number
  function formatPhoneNumber(phoneNumber) {
  let cleaned = ('' + phoneNumber).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  
  return phoneNumber;
}

    
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
    
    //Funtion to print out the formatted phone number
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber)

     // Create a list item to display the user information
     let li = document.createElement('li')
     
      li.textContent = 
     `First Name:${name} 
     Last Name: ${lastName}
     Phone Number: ${formattedPhoneNumber}
     Email: ${email}`
     
     ul.appendChild(li) 
     
    
    //Save to local storage
    localStorage.setItem('First Name', name)
    localStorage.setItem('Last Name', lastName)
    localStorage.setItem('Phone Number', phoneNumber)
    localStorage.setItem('Email', email)
    
})
