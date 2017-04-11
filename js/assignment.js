class Pollock_DPW {
  constructor(){
    console.log('Assignment created.');
    var myController = new Controller();
  }
  static getInstance() {
    if (!Pollock_DPW._instance) {
      Pollock_DPW._instance = "I'm created now."
      return new Pollock_DPW();
    } else {
      throw "you idiot, I'm already made."
    }
  }
}
