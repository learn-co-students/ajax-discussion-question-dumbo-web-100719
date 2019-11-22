
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  fetch("https://randomuser.me/api/")
  .then(r => r.json())
  .then((personObj) => {
    let personData = personObj.results[0]
    console.log(personData)
    const fullname = document.getElementById("fullname");
    fullname.innerText = personData.name.first + " " + personData.name.last

    const email = document.getElementById("email")
    email.innerText = personData.email

    const street = document.getElementById("street")
    street.innerText = personData.location.street.number + " " + personData.location.street.name

    const city = document.getElementById("city")
    city.innerText = personData.location.city

    const state = document.getElementById("state")
    state.innerText = personData.location.state

    const postcode = document.getElementById("postcode")
    postcode.innerText = personData.location.postcode

    const phone = document.getElementById("phone")
    phone.innerText = personData.phone

    const cell= document.getElementById("cell")
    cell.innerText = personData.cell

    const dob = document.getElementById("date_of_birth")
    dob.innerText = personData.dob.date

  })

  
  
});
