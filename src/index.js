const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


const fetchData = () =>{
  let button = document.querySelector('.btn')
  
  button.addEventListener('click', ( e ) =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      data.results.forEach(result => {
        renderData(result)
      });
    })
  })
}

fetchData()


const renderData = (resultsObj) =>  {

  let streetData = document.querySelector('#street')
  streetData.innerText = `${resultsObj.location.street.number} ${resultsObj.location.street.name}`

  let infoData = document.querySelector('#city')
  infoData.innerText = resultsObj.location.city

  let stateData = document.querySelector('#state')
  stateData.innerText = resultsObj.location.state

  let postCodeData = document.querySelector('#postcode')
  postCodeData.innerText = resultsObj.location.postcode


  let nameData = document.querySelector('#fullname')
  nameData.innerText = `${resultsObj.name.first} ${resultsObj.name.last} `



  let phoneData = document.querySelector('#phone')
  phoneData.innerText = resultsObj.phone

  let cellData = document.querySelector('#cell')
  cellData.innerText = resultsObj.cell

  let emailData = document.querySelector('#email')
  emailData.innerText = resultsObj.email

  let birthData = document.querySelector('#date_of_birth')
  birthData.innerText = resultsObj.dob.date
  debugger

}


