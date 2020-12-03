import {addTracks} from "./audioManager.js"

window.onload = () => {
  init();
}

const init = () => {
  let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=queen"
  //doApi(myUrl);
  viewEvents();
}


const addEvents = (input, button) =>{
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
    let myUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${valSearch}`
    doApi(myUrl);
  });

}
// אמור להיות בקובץ נפרד
const viewEvents = () => {
  let input = document.querySelector("#id_input");
  let button = document.getElementById("btn_search");
  addEvents(input, button);
}



const doApi = (_url) => {
  return new Promise((resolve, reject) => {
  fetch(_url)
  .then(resp => resp.json())
  .then(data => {
    //console.log(data.hits);
    addTracks(data.data)
    //TODO : funciton from manger of pixa
  })
  .catch(err =>{
    reject(err)
  })
  })

}
