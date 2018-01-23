# QuizLife! :video_game: :beer:

[How To Use](#how-to-use) | [Technologies](#technologies) | [Team](#team)

 QuizLife is an app that allows you to create quizzes and play them live with your friends in a pub or at a party. <br />
 This is a collaborative final project done at Makers Academy.
 :tada:.<br />

![](https://image.ibb.co/nbCHbw/Screen_Shot_2018_01_21_at_18_43_06.png)

---   
 It is a full Javascript application that particularly focuses on React, as the front-end.
 This web app has been built mainly to be used on mobile phones.

<b> If you want to try our app, here it is live </b> <br> [here](http://quiz-life.surge.sh/) :computer:.

<i> To create a Quiz click on  the 'Create a quiz' button, fill in  the form and add the quiz. <br>
Once you are ready to play click on the quiz, share the game's link with your friends. Once you have decided the team names and the interval time for the questions, the leader have to press start and then all the other users will be able to join! </i> <br>
<b> Enjoy! :tada: </b>

---

This repository is only the front-end part of our app.

The back-end API is deployed so you can run  To run QuizLife locally, you must run the back-end repository that you can find [here](https://github.com/antoniobelmar/Pub-Quiz-API), using the comand $ npm start.

---

## How to use

Given this is the front-end of the project, it requires the API data from the other project which is linked here: [node.JS API backened](https://github.com/antoniobelmar/Pub-Quiz-API). Once you have this downloaded and running (instructions are on the linked repo) follow the instruction below:

```
$ git clone https://github.com/antoniobelmar/Pub-Quiz-App.git
```
```
$ cd Pub-Quiz-App
```
```
$ npm install
```
```
$ npm start
```
Visit http://localhost:3000/.

To run tests:
```bash
$ npm test
```

## Technologies
*These are the technologies which were used in both the front and back-end*

Tech | Where? | What it does
--- | --- | ---
mongoDB | Database | Stores all our quizzes and questions
node.JS and express | Back-end | Contains a server. Communicates between our database and the user interface
ws, ws-express-ws | Back-end | Allows us to broadcast questions in real-time and to broadcast all scores when the quiz ends as well as playing multiple quizzes at the same
React.js | Front-end | Provides the user interface for building and playing the quizzes
sinon.js, chai, mocha | Testing | Test-runner, assertions library and spies and mocks library in both the back and front-end
zombie.js, supertest, enzyme | Testing | Browser tests, API tests and testing all React components

# Team

This project was done by: <br> <br>
* :computer: Allan Wazacz(https://www.github.com/cazwazacz/)
* :computer: Antonio Belmar da Costa  (https://github.com/antoniobelmar/),
* :computer: Marco Vanali  (https://github.com/Vanals/)
* :computer:Marie Kerkstoel (https://github.com/mariekerkstoel)
* :computer:Theo Breuer-Weil  (https://www.github.com/somemarsupials/).
