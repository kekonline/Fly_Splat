# FLY SPLAT

## [Play the Game!](https://kekonline.github.io/Fly_Splat/)

![Game Logo](https://kekonline.github.io/Fly_Splat/images/Logo.png)

# Description

Fly Splat is game where the player has to defend the poop that is on the centre of the screen. To do so the plater must move the raquet with the mouse a click to splat the flies. The game ends when a fly touches the poop. The score is calculated every time you splat a fly.

This is a game where you use the mouse to swat down flies that appear on the screen. The entire interaction is managed through JavaScript, manipulating the Document Object Model (DOM).

# Main Functionalities

- You control the raquet with your mouse.
- You hit the flies by clicking on your mouse.
- The racket has an animation when you click and a sound.
- Flies spawn from random points of the screen edges.
- Flies have different spawn rates and movement speeds.
- Flies have a small random movement to make the look fuzzy when they move.
- Flies play a random ouch sound when hit and sometimes don’t play anything.
- Flies have a flying animation.
- There is a splat effect when you hit a fly and it has an animation.
- The poop in the centre has a random animation where I can look to one side or another.
- If you hit p you can pause the gameplay.
- There is a score that keeps track of how many flies you have splated.
- There is a hi score that is saved locally.

# Backlog Functionalities

- Make the poop angry and create a mega blast to destroy all the flies.
- Make the game based on levels.
- Create different types of flies e.g., Strong fly killed with 2 hits.
- Create butter flies that are not meant to be hit.

# Technologies used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Local Storage
- JS Audio()
- JS Image()

# States

- Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

Fly()

- this.node
- this.w
- this.h
- this.movementSpeedX
- this.movementSpeedY
- this.flyActive
- this.y
- this.x
- this.flyFlyAnimationInFrame
- this.flyFlyAnimationFps
- this.chooseRandomeMovementAlgo
- constructor()
- startPosition()
- move()
- moveAlgoX()
- moveAlgoY()
- positionUpdate()
- flyFlyAnimation()

Game()

- this.raquet
- this.poop
- this.frames
- this.isGameOn
- this.gamePause
- this.fliesArray
- this.fliesSpawnRate
- this.fliesSpeedX
- this.fliesSpeedY
- this.doHitAnimation
- this.splatArray
- this.score
- this.hiScore
- this.scoreNode
- this.hiScoreNode
- this.randomDificulty
- constructor()
- difficulyController()
- scoreUP()
- scoreReset()
- loadHiScore()
- saveHiScore()
- fliesSpawn()
- splatSpawn()
- splatControl()
- raquetTofliesCollision()
- flyToPoopCollision()
- gameOver()
- startbackgroundMusic()
- stopbackgroundMusic()
- playsmackSound()
- playOuchSound()
- animateFlies()
- moveFlies()
- gameLoop()

Poop()

- this.node
- this.x
- this.y
- this.w
- this.h
- this.poopAnimationInFrame
- this.poopAnimationFps
- constructor()
- poopAnimation()

Raquet()

- this.node
- this.x
- this.y
- this.w
- this.h
- this.hitAnimationInFrame
- this.hitAnimationFps
- constructor()
- move()
- positionUpdate()
- raquetSplat()
- hitAnimation()

Splat()

- this.node
- this.x
- this.y
- this.w
- this.h
- this.splatActive
- constructor()
- splatAnimation()

Main()

- gameObj
- startButtonNode
- splashScreenNode
- gameScreenNode
- gameBoxNode
- gameOverScreenNode
- restartButtonNode
- backgroundMusicNode
- smackSoundNode
- Ouch1SoundNode
- Ouch2SoundNode
- Ouch3SoundNode
- Ouch4SoundNode
- Uh_OhSoundNode
- starGame()
- restarGame()
- Event Listener for startButtonNode
- Event Listener for restartButtonNode
- Event Listener for gameBoxNode (click event)
- Event Listener for window (mousemove event)
- Event Listener for window (keydown event)

# Extra Links

### Sketch

[Link](https://kekonline.github.io/Fly_Splat/Idea/Fly_Splat.jpg)

### Trello

[Link](https://trello.com/invite/b/KHOYvy7Y/ATTI89c45e7f0aecc4f306ab00d956c15f41AD86AC44/fly-splat)

### Slides

[Link](https://docs.google.com/presentation/d/1BZLYBqqnliW_XrIxXUIWIJcMXlSvFyNiAnQ2KgbL4wk/edit?usp=sharing)

## Deploy

[Link](https://kekonline.github.io/Fly_Splat/)
