import AudioClass from "./audioClass.js";

export const addTracks = (_ar) => {
  // חייב לרוקן כל פעם מחדש את הדיב
  // כדי שיכנסו תמונות חדשות ולא יתווספו לקיימות
  document.querySelector("#id_row").innerHTML = "";
  _ar.map(item => {
    //console.log(item.tags);
    let {preview,title,rank,link,album,artist} =item;
    let audio = new AudioClass("#id_row", preview,title,rank,link,album,artist);
  })
}