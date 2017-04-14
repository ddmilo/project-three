DevHops - WDI Project#3

DevHops is an app that allows users to sign up, create, and delete an account in order to add reviews of their favorite beers. Once posted on the app, the user reviews are then stored on a database, allowing other users to see all reviews. When reviewing a beer, each user has the ability to rate it based upon the beers name, type, brewery, alcohol percent, as well as upload their favorite image.


Built With

Languages: HTML-5, Css, Javascript, Java, Jquery, Angular, Express.js, MongoDB
Design: Google Fonts, Bootstrap
Project Planning + User Stories - Trello
Atom Text Editor, Sublime Text Editor


Contributors:

Dan Milo,
Liam Robinson,
Magdalena Kinney,
Michael Torres


Trello: https://trello.com/b/wmUcMghZ/project-3

Deployment Site: https://peaceful-retreat-73199.herokuapp.com/#!/



Wireframe: https://www.draw.io/#Hddmilo%2Fproject-three%2Fmaster%2FUntitled%20Diagram.xml

ERD: https://www.draw.io/#Hddmilo%2Fproject-three%2Fmaster%2FERD.xml


Stretch Goals:
Attach google maps so that users are able to track and see where they can get their favorite beer.

Set Landing page so that you can access page unless 21 or over.




ReviewSchema = {username: String, content: String, rating: String, dateCreated: Date, beerId: String, pairing: String

BeerSchema = {name: String, type: String, brewery: String, alcoholPer: Number, imageUrl: String, reviews: [ReviewSchema].
