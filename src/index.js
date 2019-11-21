const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
 // console.log("CONTENT LOADED!");

 getFetch()

});



function getFetch(){
  let getButton= document.getElementsByClassName('btn')[0]
  getButton.addEventListener('click',(evt)=>{
    fetch('https://randomuser.me/api/')
    .then(( res => res.json()))
    .then(getInformationFromFetch)
    });
}


 function getInformationFromFetch(randObject){
  let getName = document.querySelector('#fullname')
  let getEmail = document.querySelector('#email')
  let getStreet= document.querySelector('#street')
  let getCity= document.querySelector('#city')
  let getState = document.querySelector('#state')
  let getPostcode= document.querySelector('#postcode')
  let getPhone = document.querySelector('#phone')
  let getCell= document.querySelector('#cell')
  let getBirthday = document.querySelector('#date_of_birth')
  let getImage = document.querySelector('#profile_picture')


  randObject.results.forEach( (info) => {
    getName.innerText = info.name.first
    getEmail.innerText = info.email
    getStreet.innerText = info.location.street.name + "House No:" + info.location.street.number
    getCity.innerText = info.location.city
    getState.innerText= info.location.state
    getPostcode.innerText = info.location.postcode
    getPhone.innerText = info.phone
    getCell.innerText = info.cell
    getBirthday.innerText = info.dob.date
    getImage.src = info.picture.large
    
  });

}
