# Clicky Game

This app is a front-end game built with React.js. The user's goal is to click on each Pusheen card only one time. There are 12 total cards that shuffle automatically on each click, making it more difficult for the user to remember which cards they have not clicked.

## Visit the site
https://evening-tor-79650.herokuapp.com/

## Screencaps
![Demo](./screencap.gif)

## How it works
* The user begins the game by clicking on a Pusheen
* After each click, React will shuffle the cards using an NPM package called Shuffle-Array and check if the user has selected the Pusheen before
* If they have, it will trigger an end game condition
* If they have not, it will increase the current score
* Upon game end, the app will update your highest score and reset the current score

## Technologies used
* React JS
