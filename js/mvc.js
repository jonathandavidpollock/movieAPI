class Controller {
  constructor() {
    console.log("Created Controller");
    this.MovieDo = new MovieDo();
    this.model = new Model();
    this.view = new View();
    this.getData();
  }

  getData(){
    // Collecting Form Data
    let getMovie = document.getElementById('movie');
    document.querySelector('button').addEventListener("click",(e)=>{
      e.preventDefault();
      console.log("Inside get data.");
      this.MovieDo.searchQuery = getMovie.value;
      this.sendData();
      this.view.setData(this.MovieDo);
      document.querySelector('form').reset();
    })
  }

  sendData() {
    //this.model.data = this.MovieDo;
    this.model.setData(this.MovieDo);
  }

}

class HTML {
  constructor(){
    this.html = '';
  }

  addObject(art) {
    this.html = art;
  }
}

class HTML2 {
  constructor() {
    this.html = '';
  }

  addObject(obj) {
    this.html = obj;
  }
}

class View {
  constructor() {
    this.HTML = new HTML();
    this.HTML2 = new HTML2();
    this.do = {};
  }

  setData(d) {
    this.do = d;
    console.log("/////////////");
    console.log(this.do);
    setTimeout(()=>{this.display();},500);
  }

  display() {
    let location = document.querySelector('#forJosh');
    let article = Utility.make(this.do);
    this.HTML.addObject(article);
    location.innerHTML = this.HTML.html;
  }
}

class Model {
  constructor() {
    console.log("Created Model");
    this.do = {};
  }
  setData(d) {
    // Do validation in here
    this.do = d;
    this.process();
  }
  process() {
    // Process with Fetch
    let promise = fetch('http://www.omdbapi.com/?t=' + this.do.searchQuery)
    promise.then(response => {
      return response.json();
    })
    .then(data=>{
      this.do.movie = data.Title;
      this.do.plot = data.Plot;
      this.do.director = data.Director;
      this.do.poster = data.Poster;
    })
    .catch((error)=> {throw error})
  }

}

class MovieDo {
  constructor(){
    this.searchQuery = '';
    this.movie = '';
    this.plot = '';
    this.director = '';
    this.poster = '';
  }
}
