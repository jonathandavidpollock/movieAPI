# Search for a movie with the OMDB Movie API
This project utilizes the fetch API and the OMDB api to search for movies. Much like my [Spotify Project](https://github.com/jonathandavidpollock/spotifyAPI),
this application recieves a request from the user and performs a GET request to the [OMDB api](http://www.omdbapi.com/). The application the places the results in a list below the search form.

This application utilizes the MVC pattern and the Javascript singleton pattern. Why use the Singleton pattern, you say? Because I wanted to! My friends and I were talking about the pattern, and I wanted to use it in a project. It doesn't necessarily make sense for the application. Quiet frankly, it's overkill. But the Singleton Pattern
is a tool you want in your back pocket. I am proud to say I know how to do it now! 

> Side Note: MVC is Javascript in amazing. Javascript Events for the Win! Think of this, your Models can fire off an event whenever they complete and tell the View, "Hey, I'm done. Here's the data." Just attach the data from your model to a [custom Javascript Event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)! 

[Learn more about the Singleton Pattern](https://en.wikipedia.org/wiki/Singleton_pattern)
