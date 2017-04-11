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
      this.MovieDo.movie = getMovie.value;
      this.sendData();
      this.view.setData(this.MovieDo);
      this.view.display();
    })
  }

  sendData() {
    //this.model.data = this.MovieDo;
    this.model.setData(this.MovieDo);
  }

}

class HTML {
  constructor(){
    this.html = '<p>This is the HTML one style</p>';
  }
}

class HTML2 {
  constructor() {
    this.html = '<h2>This is the HTML two style</h2>';
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
    this.display();
  }

  display() {
    console.log(this.do.plot);
    document.querySelector('#forJosh').innerHTML = this.do.plot;
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
    let promise = fetch('http://www.omdbapi.com/?t=' + this.do.movie)
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
    this.movie = '';
    this.plot = '';
    this.director = '';
    this.poster = '';
  }
}
