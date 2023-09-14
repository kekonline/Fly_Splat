- Fly()
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

- Game()
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
- splatSpawn(flyPosiionX, flyPosiionY)
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