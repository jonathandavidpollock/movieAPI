console.log("Utility class loaded.");
var Utility = (function(){
  function Utility(){}

  Utility.make = function(el){
    let articles = '';
    if(el.movie != undefined){
      articles +=
         `
         <h2>Results for: ${el.searchQuery}</h2>
         <article>
            <img src="${el.poster}">
            <h2>${el.movie}</h2>
            <h3>${el.director}</h3>
            <p>${el.plot}</p>
          </article>
          `;
    } else {
      articles = `<h2>We're sorry</h2>
                  <p>We couldn't find any results</p>`;
    }
    return articles

  }
  return Utility
})();
