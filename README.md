DevHops - WDI Project#2

DevHops is an app that allows users to sign up, create, and delete an account in order to add reviews of their favorite beers. Once posted on the app, the user reviews are then stored on a database, allowing other users to see all reviews. When reviewing a beer, each user has the ability to rate it based upon the beers name, type, brewery, alcohol percent, as well as upload their favorite image.


Built With

Languages: HTML-5, Css, Javascript, Java, Jquery, Angular, Express.js, MongoDB
Design: Google Fonts, Bootstrap
Project Planning + User Stories - Trello
Atom Text Editor, Sublime Text Editor


Contributors:

Dan Milo
Liam Robinson
Magdalena kinney
Michael Torres


Trello: https://trello.com/b/wmUcMghZ/project-3

Deployment Site:


Stretch Goals:




ReviewSchema = {username: String, content: String, rating: String, dateCreated: Date, beerId: String, pairing: String

BeerSchema = {name: String, type: String, brewery: String, alcoholPer: Number, imageUrl: String, reviews: [ReviewSchema].
