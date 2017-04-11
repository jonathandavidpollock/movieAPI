console.log("Utility class loaded.");
var Utility = (function(){
  function Utility(){}

  Utility.convert = function(arg){
    return (arg - 32) * 5/9
  }

  Utility.fetch = function(obj){
    // do something
  }
  return Utility
})();
