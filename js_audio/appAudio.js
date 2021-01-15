import {addTracks} from "./audioManager.js"

window.onload = () => {
  
  init();
}

const init = () => {
  //let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=queen"
 // doApi(myUrl);
 viewEvents();
}

function validateInput(input) {
  let hasError = false;
  const searchReg = /^[\u0400-\u04FF\u0590-\u05fea-zA-Z0-9- _]+$/;
  document.getElementById("id_row").innerHTML = "";
 console.log(!searchReg.test(input.value));
  if(input.value == ""){
    document.querySelector("#error").innerHTML = "Please enter a search term";
    hasError = true;
  } else if (!searchReg.test(input.value)){
    document.querySelector("#error").innerHTML = "Special symbols are not allowed, try again";
    hasError = true;
  } else {
    
    return true;
  }
  if(hasError == true){
    console.log("error true");
    return false;
  } 
}
const addEvents = (input, button) => {
  
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
   button.click();
  }
});
  // מאזין ללחיצה על הכפתור שנמצא בבאדי של החיפוש
  button.addEventListener("click",() => {
    let valSearch = input.value;
    let valid = validateInput(input);
    if(valid === true){
      console.log("Valid");
      document.querySelector("#error").innerHTML = "";
      let myUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${valSearch}`
      doApi(myUrl);
    } else {
      console.log("Not valid");
    }
    
  });

}
// אמור להיות בקובץ נפרד
const viewEvents = () => {
  let input = document.querySelector("#id_search");
  let button = document.getElementById("btn_search");
  addEvents(input, button);
}



const doApi = (_url) => {
  return new Promise((resolve, reject) => {
  fetch(_url)
  .then((resp) => resp.json())
  .then(data => {
    let checkIfEmpty = Object.keys(data.data).length === 0;
    if(!checkIfEmpty){
         addTracks(data.data)  
    }
    else {
      document.querySelector("#error").innerHTML = "Please enter valid value and try again";
    }
  })
  .catch(err =>{
    reject(err)
  })
  })

}
