
![ZONE UNKNOWN](/client/public/images/zu_text_color1.png)
![ZONE UNKNOWN LOGO](/client/public/images/zu_logo_color1.png)

Welcome to ZONE UNKNOWN, an adventure game based on survival. You find yourself stranded in a solar system due to your warp drive breaking down. Explore 3 planets and find parts to rebuild your warp drive. Along the way, you will encounter harsh events that will test your survival skills. Some will require tough decisions that may make the difference between life and death. You need to manage your HEALTH, OXYGEN and FUEL. You lose 1 OXYGEN per turn and will need 3 FUEL to replenish your O2 at the ship (middle hex). When your HEALTH hits 0, you lose! To advance to the next planet, collect the warp drive piece and return to your ship. Good luck on your journey!

### Link to Deployed Site
https://zone-unknown-react.herokuapp.com/

### Link to GitHub
https://github.com/ericpowelldev/Zone-Unknown-React

### Link to Presentation
https://docs.google.com/presentation/d/1VJiLkdt-cI696KgL47I4Zy2lpoYuaOwEHiDqwTaFYZk/edit?usp=sharing

- - -

## Description
Zone Unknown is an interactive adventure where you're given random events and interesting choices. These events & choices affect your journey in unique ways each time you play, making every playthrough your own personal experience. As you progress, survival becomes essential. The difficulty between planets curves dramatically and is designed to allow for close calls. If there is ever a time when you get stuck, there is a user chat to help you along the way. Learn how others have achieved survival, or just trash talk each other...

Upon entering the site, you are presented with a login. Here, you may sign in or create a new account with a unique username. This account will store your saved progress & be used for the game chat. From there, you may load your game, start a new game, or sign out. Getting into the game, the page will render the planet you were last on. On the left, you will see the menu bar, in which you are given a series of buttons to interact with. On the right, you will see your resources that you will have to manage in order to survive. Clicking on the hexes will pop up a modal that has an event assigned to it. Depending on the outcome, your stats will change.

HEALTH (or HP) is used to measure how close you are to dying. If HP drops down to 0, you die. OXYGEN (or O2) is used as a timer. Every hex you move to will subtract 1 O2 whether you have been there or not. Having negative O2 will subtract your HP by that specific amount at the end of the turn. FUEL is used to replenish your oxygen by a set amount. Once the FUEL indicator turns blue, you may return to the ship and refill your O2. ITEMS are important to collect as they increase your chances of survival. WARP PIECES are essential to collect to progress through the game. Once you find all of them, plus the uranium to fuel the warp drive, you may escape the system and return home.

This version of the game was our first attempt at using ReactJS & is a continuation of our previous version of the game (which was made using jQuery & Express-Handlebars). The repo for the old project can be found [HERE](https://github.com/ericpowelldev/Zone-Unknown) as well as the deployed site [HERE](https://zone-unknown.herokuapp.com/).

- - -

## Node Modules
- `axios`
- `bcryptjs`
- `concurrently`
- `connect-mongo`
- `express`
- `express-session`
- `howler`
- `if-env`
- `mongoose`
- `nodemon`
- `passport`
- `passport-local`
- `react`
- `react-dom`
- `react-router-dom`
- `react-scripts`
- `socket.io`
- `socket.io-client`

- - -

## Brought To You By
The Pompous Assets - Amber Charnley, Eric Powell, Stu Eliades

## Contributions
* Amber Charnley (Passport/Bcrypt Authentication, Socket-io Live Chat, Server & API Integration) - [Portfolio Site](https://2mlcmonkeys.github.io/Profile/)
* Eric Powell (Game Logic, Graphics & Vectors, Sounds, Server & API Integration, Polish) - [Portfolio Site](https://ericpowell.dev/)
* Stu Eliades (Game Logic, Task Manager, Sound Integration) - [Portfolio Site](https://seliades.github.io/Stu_Portfolio/)

### Special Credit
* Font Awesome (Icons & Icon inspiration)
* Creative Commons Music (Music)
* Gregory Smith (Awesome Instructor)
* Sam Liput, Patrick Chu, Jonathan Melin (Awesome TAs)
