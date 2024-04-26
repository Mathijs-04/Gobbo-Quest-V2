namespace SpriteKind {
    export const enemyProjectile = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyProjectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.coolRadial, 10)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Game-over`), music.PlaybackMode.InBackground)
    pause(500)
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        projectile = sprites.createProjectileFromSprite(assets.image`Magic`, Gobbo, -200, 0)
    } else if (direction == 1) {
        projectile = sprites.createProjectileFromSprite(assets.image`Magic`, Gobbo, 0, -200)
    } else if (direction == 2) {
        projectile = sprites.createProjectileFromSprite(assets.image`Magic`, Gobbo, 200, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(assets.image`Magic`, Gobbo, 0, 200)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 10)
    sprites.destroy(projectile)
    if (otherSprite == Dino) {
        shootingEnemyAlive = 0
    }
})
sprites.onDestroyed(SpriteKind.Boss, function (sprite) {
    music.stopAllSounds()
    game.gameOver(true)
    music.play(music.createSong(assets.song`Game-Won`), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 10)
    sprites.destroy(projectile)
    if (otherSprite == Dino) {
        shootingEnemyAlive = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.coolRadial, 10)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Game-over`), music.PlaybackMode.InBackground)
    pause(500)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.coolRadial, 10)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Game-over`), music.PlaybackMode.InBackground)
    pause(500)
    game.gameOver(false)
})
let enemyShot: Sprite = null
let Robbo: Sprite = null
let arrowVar = 0
let Monke2: Sprite = null
let Monke3: Sprite = null
let Monke1: Sprite = null
let projectile: Sprite = null
let Dino: Sprite = null
let Gobbo: Sprite = null
let shootingEnemyAlive = 0
let direction = 0
game.splash("Gobbo Quest!")
direction = 0
shootingEnemyAlive = 1
music.play(music.createSong(assets.song`Gobbo Tune`), music.PlaybackMode.LoopingInBackground)
direction = 0
Gobbo = sprites.create(assets.image`Gobbo-Back`, SpriteKind.Player)
Gobbo.setPosition(130, 240)
let Arrow1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c a a c . . . . . . 
    . . . . . c a a a a c . . . . . 
    . . . . c a a a a a a c . . . . 
    . . . . c c c a a c c c . . . . 
    . . . . . . c a a c . . . . . . 
    . . . . . . c a a c . . . . . . 
    . . . . . . c a a c . . . . . . 
    . . . . . . c a a c . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Arrow1.setPosition(128, 10)
scene.cameraFollowSprite(Gobbo)
controller.moveSprite(Gobbo)
tiles.setCurrentTilemap(tilemap`level0`)
let Bat = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
Bat.setPosition(140, 120)
Dino = sprites.create(img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.Enemy)
Dino.setPosition(51, 23)
let Monke = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
Monke.setPosition(53, 111)
Monke.follow(Gobbo, 50)
game.onUpdateInterval(1000, function () {
    Bat.setVelocity(75, 75)
    timer.after(500, function () {
        Bat.setVelocity(-75, -75)
    })
})
game.onUpdateInterval(400, function () {
    Monke.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `)
    timer.after(100, function () {
        Monke.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `)
        timer.after(100, function () {
            Monke.setImage(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f f f . . . . 
                . . f d d d e e e e d d f . . . 
                . c d d d d d e e e b d c . . . 
                . c d d d d d d e e b d c . . . 
                c d d f d d f d e e f c . f f . 
                c d d f d d f d e e f . . f e f 
                c d e e d d d d e e f . . f e f 
                . f d d d c d e e f f . . f e f 
                . . f f f d e e e e e f . f e f 
                . . . . f e e e e e e e f f f . 
                . . . . f f e e e e e b f f . . 
                . . . f e f f e e c d d f f . . 
                . . f d d b d d c f f f . . . . 
                . . f d d c d d d f f . . . . . 
                . . . f f f f f f f . . . . . . 
                `)
            timer.after(100, function () {
                Monke.setImage(img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . f f 
                    c c c c c d d d e e f c . f e f 
                    . f d d d d d e e f f . . f e f 
                    . . f f f f f e e e e f . f e f 
                    . . . . f e e e e e e e f f e f 
                    . . . f e f f e f e e e e f f . 
                    . . . f e f f e f e e e e f . . 
                    . . . f d b f d b f f e f . . . 
                    . . . f d d c d d b b d f . . . 
                    . . . . f f f f f f f f f . . . 
                    `)
            })
        })
    })
})
game.onUpdateInterval(400, function () {
    if (Monke1) {
        Monke1.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `)
        timer.after(100, function () {
            Monke1.setImage(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f f . . . . 
                . c d d d d d d e e d d f . . . 
                . c d f d d f d e e b d c . . . 
                c d d f d d f d e e b d c . f f 
                c d e e d d d d e e f c . f e f 
                c d d d d c d e e e f . . f e f 
                . f c c c d e e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f f . 
                . . f f e f e e f e e e e f . . 
                . f e f f e e f f f e e e f . . 
                f d d b d d c f f f f f f b f . 
                f d d c d d d f . . f c d d f . 
                . f f f f f f f . . . f f f . . 
                `)
            timer.after(100, function () {
                Monke1.setImage(img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f f f . . . . 
                    . . f d d d e e e e d d f . . . 
                    . c d d d d d e e e b d c . . . 
                    . c d d d d d d e e b d c . . . 
                    c d d f d d f d e e f c . f f . 
                    c d d f d d f d e e f . . f e f 
                    c d e e d d d d e e f . . f e f 
                    . f d d d c d e e f f . . f e f 
                    . . f f f d e e e e e f . f e f 
                    . . . . f e e e e e e e f f f . 
                    . . . . f f e e e e e b f f . . 
                    . . . f e f f e e c d d f f . . 
                    . . f d d b d d c f f f . . . . 
                    . . f d d c d d d f f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `)
                timer.after(100, function () {
                    Monke1.setImage(img`
                        . . . . f f f f f . . . . . . . 
                        . . . f e e e e e f . . . . . . 
                        . . f d d d d e e e f . . . . . 
                        . c d f d d f d e e f f . . . . 
                        . c d f d d f d e e d d f . . . 
                        c d e e d d d d e e b d c . . . 
                        c d d d d c d d e e b d c . f f 
                        c c c c c d d d e e f c . f e f 
                        . f d d d d d e e f f . . f e f 
                        . . f f f f f e e e e f . f e f 
                        . . . . f e e e e e e e f f e f 
                        . . . f e f f e f e e e e f f . 
                        . . . f e f f e f e e e e f . . 
                        . . . f d b f d b f f e f . . . 
                        . . . f d d c d d b b d f . . . 
                        . . . . f f f f f f f f f . . . 
                        `)
                })
            })
        })
    }
})
game.onUpdateInterval(400, function () {
    if (Monke3) {
        Monke3.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `)
        timer.after(100, function () {
            Monke3.setImage(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f f . . . . 
                . c d d d d d d e e d d f . . . 
                . c d f d d f d e e b d c . . . 
                c d d f d d f d e e b d c . f f 
                c d e e d d d d e e f c . f e f 
                c d d d d c d e e e f . . f e f 
                . f c c c d e e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f f . 
                . . f f e f e e f e e e e f . . 
                . f e f f e e f f f e e e f . . 
                f d d b d d c f f f f f f b f . 
                f d d c d d d f . . f c d d f . 
                . f f f f f f f . . . f f f . . 
                `)
            timer.after(100, function () {
                Monke3.setImage(img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f f f . . . . 
                    . . f d d d e e e e d d f . . . 
                    . c d d d d d e e e b d c . . . 
                    . c d d d d d d e e b d c . . . 
                    c d d f d d f d e e f c . f f . 
                    c d d f d d f d e e f . . f e f 
                    c d e e d d d d e e f . . f e f 
                    . f d d d c d e e f f . . f e f 
                    . . f f f d e e e e e f . f e f 
                    . . . . f e e e e e e e f f f . 
                    . . . . f f e e e e e b f f . . 
                    . . . f e f f e e c d d f f . . 
                    . . f d d b d d c f f f . . . . 
                    . . f d d c d d d f f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `)
                timer.after(100, function () {
                    Monke3.setImage(img`
                        . . . . f f f f f . . . . . . . 
                        . . . f e e e e e f . . . . . . 
                        . . f d d d d e e e f . . . . . 
                        . c d f d d f d e e f f . . . . 
                        . c d f d d f d e e d d f . . . 
                        c d e e d d d d e e b d c . . . 
                        c d d d d c d d e e b d c . f f 
                        c c c c c d d d e e f c . f e f 
                        . f d d d d d e e f f . . f e f 
                        . . f f f f f e e e e f . f e f 
                        . . . . f e e e e e e e f f e f 
                        . . . f e f f e f e e e e f f . 
                        . . . f e f f e f e e e e f . . 
                        . . . f d b f d b f f e f . . . 
                        . . . f d d c d d b b d f . . . 
                        . . . . f f f f f f f f f . . . 
                        `)
                })
            })
        })
    }
})
game.onUpdateInterval(400, function () {
    if (Monke2) {
        Monke2.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `)
        timer.after(100, function () {
            Monke2.setImage(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f f . . . . 
                . c d d d d d d e e d d f . . . 
                . c d f d d f d e e b d c . . . 
                c d d f d d f d e e b d c . f f 
                c d e e d d d d e e f c . f e f 
                c d d d d c d e e e f . . f e f 
                . f c c c d e e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f f . 
                . . f f e f e e f e e e e f . . 
                . f e f f e e f f f e e e f . . 
                f d d b d d c f f f f f f b f . 
                f d d c d d d f . . f c d d f . 
                . f f f f f f f . . . f f f . . 
                `)
            timer.after(100, function () {
                Monke2.setImage(img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f f f . . . . 
                    . . f d d d e e e e d d f . . . 
                    . c d d d d d e e e b d c . . . 
                    . c d d d d d d e e b d c . . . 
                    c d d f d d f d e e f c . f f . 
                    c d d f d d f d e e f . . f e f 
                    c d e e d d d d e e f . . f e f 
                    . f d d d c d e e f f . . f e f 
                    . . f f f d e e e e e f . f e f 
                    . . . . f e e e e e e e f f f . 
                    . . . . f f e e e e e b f f . . 
                    . . . f e f f e e c d d f f . . 
                    . . f d d b d d c f f f . . . . 
                    . . f d d c d d d f f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `)
                timer.after(100, function () {
                    Monke2.setImage(img`
                        . . . . f f f f f . . . . . . . 
                        . . . f e e e e e f . . . . . . 
                        . . f d d d d e e e f . . . . . 
                        . c d f d d f d e e f f . . . . 
                        . c d f d d f d e e d d f . . . 
                        c d e e d d d d e e b d c . . . 
                        c d d d d c d d e e b d c . f f 
                        c c c c c d d d e e f c . f e f 
                        . f d d d d d e e f f . . f e f 
                        . . f f f f f e e e e f . f e f 
                        . . . . f e e e e e e e f f e f 
                        . . . f e f f e f e e e e f f . 
                        . . . f e f f e f e e e e f . . 
                        . . . f d b f d b f f e f . . . 
                        . . . f d d c d d b b d f . . . 
                        . . . . f f f f f f f f f . . . 
                        `)
                })
            })
        })
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        Gobbo.setImage(assets.image`Gobbo-Back`)
        direction = 1
    } else if (controller.down.isPressed()) {
        Gobbo.setImage(assets.image`Gobbo-Front`)
        direction = 3
    } else if (controller.left.isPressed()) {
        Gobbo.setImage(assets.image`Gobbo-Left`)
        direction = 0
    } else if (controller.right.isPressed()) {
        Gobbo.setImage(assets.image`Gobbo-Right`)
        direction = 2
    }
})
forever(function () {
    if (arrowVar == 0 && Gobbo.overlapsWith(Arrow1)) {
        for (let index = 0; index < 1; index++) {
            sprites.destroy(Bat)
            sprites.destroy(Dino)
            shootingEnemyAlive = 0
            sprites.destroy(Monke)
            arrowVar = 1
            tiles.setCurrentTilemap(tilemap`level7`)
            Gobbo.setPosition(130, 240)
            Monke1 = sprites.create(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . f f 
                c c c c c d d d e e f c . f e f 
                . f d d d d d e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f e f 
                . . . f e f f e f e e e e f f . 
                . . . f e f f e f e e e e f . . 
                . . . f d b f d b f f e f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `, SpriteKind.Enemy)
            Monke2 = sprites.create(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . f f 
                c c c c c d d d e e f c . f e f 
                . f d d d d d e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f e f 
                . . . f e f f e f e e e e f f . 
                . . . f e f f e f e e e e f . . 
                . . . f d b f d b f f e f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `, SpriteKind.Enemy)
            Monke3 = sprites.create(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . f f 
                c c c c c d d d e e f c . f e f 
                . f d d d d d e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f e f 
                . . . f e f f e f e e e e f f . 
                . . . f e f f e f e e e e f . . 
                . . . f d b f d b f f e f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `, SpriteKind.Enemy)
            Monke1.setPosition(142, 100)
            Monke2.setPosition(134, 109)
            Monke3.setPosition(153, 108)
            Monke1.follow(Gobbo, 50)
            Monke2.follow(Gobbo, 50)
            Monke3.follow(Gobbo, 50)
        }
    }
})
forever(function () {
    if (arrowVar == 1 && Gobbo.overlapsWith(Arrow1)) {
        for (let index = 0; index < 1; index++) {
            sprites.destroy(Monke1)
            sprites.destroy(Monke2)
            sprites.destroy(Monke3)
            tiles.setCurrentTilemap(tilemap`level11`)
            Gobbo.setPosition(120, 180)
            Robbo = sprites.create(assets.image`Robbo-Front`, SpriteKind.Boss)
            Robbo.setPosition(120, 100)
            Robbo.follow(Gobbo, 30)
        }
    }
})
game.onUpdateInterval(500, function () {
    if (shootingEnemyAlive == 1) {
        Dino.setImage(img`
            ........ccc.............
            ........cccccccc........
            .....cc..cc55555cc......
            .....cccc555555555c.....
            .....ccb55555555555c....
            ...cc.b5555bcc555555c...
            ...ccb55555555c55d55c...
            ....cb5555dd55555555c...
            .....5555dd5555d5555c...
            ..cc.555dd555555dbbbc...
            ..ccc55ddd555555d555c...
            ...ccd5dbdd5555d555c....
            ....bdddb555bbbbbccc....
            ..cccdddb555cbbbbbbbc...
            ...ccddddb555cbbbbbbbc..
            ....cdddddb555cbbbbbbc..
            ...ccddddddb55cbbbbbbcc.
            ...cbddddd55bcbbbbbbbcc.
            ..cbdddddd5555bbbbbbbc..
            .cddddddbdd555bbbbbbc...
            cddddddbbbdd55cbbccc....
            ccccccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `)
        timer.after(200, function () {
            Dino.setImage(img`
                ........................
                ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb55555bcc555555c
                ......cb555555555c55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb1bbbc.
                ....ccd55ddddd5bbbb335c.
                ...ccbdddddddd5bbbb335c.
                .ccccddddddddd55bb3335c.
                cdcccdddddb55bb55b3335c.
                cddbddddddb555bb553335c.
                cddddddddddb5555b5555c..
                ccddddddbd55bb55cbccc...
                .ccddddbbbdd55ccbbc.....
                ...ccbbbcbddddccdddc....
                .....ccccdd555dccccc....
                ........cccccccc........
                `)
            enemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Dino, 250, 0)
            enemyShot.setKind(SpriteKind.enemyProjectile)
            timer.after(100, function () {
                Dino.setImage(img`
                    ........................
                    ........................
                    ...........ccc..........
                    ...........cccc.........
                    .......ccc..ccccccc.....
                    .......cccccc555555cc...
                    ........ccb5555555555c..
                    .....cc..b555555555555c.
                    .....cccb555555ff155555c
                    ......cb55555555ff55d55c
                    ......b5555555555555555c
                    ...cc.b555dd5555bb13bbc.
                    ...cccd55ddddd555b3335c.
                    .....bdddddddddd55b335c.
                    ..cccdddddb55bbddd5555c.
                    ..cccdddddb555bbbbcccc..
                    ...ccddddddb5555cbcdc...
                    ccccbdddddd5cb55cbcc....
                    cddddddddd5555ccbbc.....
                    .cddddddbdd555bbbcc.....
                    ..ccdddbbbdd55cbcdc.....
                    ....ccbbcbddddccdddcc...
                    ......cccdd555dcccccc...
                    ........cccccccc........
                    `)
            })
        })
    }
})
game.onUpdateInterval(200, function () {
    Bat.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `)
    timer.after(100, function () {
        Bat.setImage(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `)
    })
})
