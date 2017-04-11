class Assignment {
  constructor(){
    console.log('Assignment created.');
    var myController = new Controller();
  }
  static getInstance() {
    if (!Assignment._instance) {
      Assignment._instance = "I'm created now."
      return new Assignment();
    } else {
      throw "you idiot, I'm already made."
    }
  }
}
