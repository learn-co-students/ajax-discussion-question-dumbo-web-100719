const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  buttonClick()
});

function buttonClick(){
  let button = document.querySelector('.btn')
  
  button.addEventListener('click', () => {
    console.log('clicked')
    fetchRandomMouse()
  })
}

function fetchRandomMouse(){
  const url ='https://randomuser.me/api/'
  fetch(url,{})
  .then(r => r.json())
  .then(getInfo)
}

function getInfo(randObject){
  let profile_img = document.getElementById('profile_picture')
  let full_name = document.getElementById('fullname')
  let email = document.getElementById('email')
  let street = document.getElementById('street')
  let city = document.getElementById('city')
  let state = document.getElementById('state')
  let postcode = document.getElementById('postcode')
  let phone = document.getElementById('phone')
  let cell = document.getElementById('cell')
  let dob = document.getElementById('date_of_birth')


  randObject.results.forEach((indivRecord) => {
    profile_img.src = indivRecord.picture.large
    full_name.innerText = indivRecord.name.title + '. ' + indivRecord.name.first + ' '+ indivRecord.name.last 
    email.innerText = indivRecord.email
    street.innerText = indivRecord.location.street.number + ' ' + indivRecord.location.street.name
    city.innerText = indivRecord.location.city
    state.innerText = indivRecord.location.state
    postcode.innerText = indivRecord.location.postcode
    phone.innerText = indivRecord.phone
    cell.innerText = indivRecord.cell
    dob.innerText = indivRecord.dob.date

  })
}