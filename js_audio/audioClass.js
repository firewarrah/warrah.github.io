class AudioClass{
    constructor(_parent,_preview,_title,_rank,_link,_album,_artist){
      this.parent = _parent;
      this.preview = _preview;
      this.title = _title;
      this.rank = _rank;
      this.link = _link;
      this.album = _album.title;
      this.artist = _artist.name;
      this.cover = _album.cover_medium;

  
      this.render()
    }
   
 render(){
      let newDiv = document.createElement("div");
      newDiv.className = "col-lg-6 col-sm-12 p-2";
      document.querySelector(this.parent).append(newDiv);
  
      newDiv.innerHTML += `
      <div class="music-block m-1 shadow border overflow-hidden">
      <img src="${this.cover}" class="w-50 float-left mr-2" >
      <h4>${this.title}</h4>
      <h6>Artist: ${this.artist}</h6>
      <h6>Album: ${this.album}</h6>
      <p>Rank: ${this.rank}</p>
     
      <audio controls class="w-100" style="margin: 1em 0; box-sizing: border-box;"
            src="${this.preview}"></audio>  <div>
    <a href="${this.link}" target="_blank" class="d-flex p-2 justify-content-center btn-info text-decoration-none" }">Click here to buy</a> 
  </div>
  </div>
      `
    
    }
  }
  
  
  // למחלק עושים תמיד אקספורט דיפולט
  // ניתן לבצע אקספורט דיפולט רק פעם אחת
  export default AudioClass;
