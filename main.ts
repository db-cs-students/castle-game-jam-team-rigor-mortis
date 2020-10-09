/** 
Title: Skate player
Creators: Alex/Vincent
Description:
    
 */
//  create player
game.splash("Amoung the castle there is a treasure guarded by a Dragon!")
let Rigor = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 4 4 4 4 4 4 . . . . . .
    . . . . 4 f 4 4 f 4 . . . . . .
    . . . . 4 4 4 4 4 4 . . . . . .
    . . . . 4 f f 4 4 4 . . . . . .
    . . . . 4 4 f 4 4 4 . . . . . .
    . 4 4 8 8 8 8 8 8 8 8 4 4 . . .
    . 4 8 8 8 8 8 8 8 8 8 8 4 . . .
    . 4 4 8 8 8 8 8 8 8 8 4 4 . . .
    . . . 8 8 8 8 8 8 8 8 . . . . .
    . . . a a . . . . a a . . . . .
    . . . a a . . . . a a . . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . 2 2 5 5 5 5 5 5 5 5 5 2 . . .
    . 2 2 2 . . . . . . . 2 2 . . .
`, SpriteKind.Player)
info.setLife(1)
info.score()
controller.player1.moveSprite(Rigor, 50, 0)
Rigor.ay = 200
let can_jump = true
// jump
controller.A.onEvent(ControllerButtonEvent.Pressed, function jump() {
    
    if (can_jump) {
        Rigor.vy = -100
        can_jump = Rigor.isHittingTile(CollisionDirection.Bottom)
        music.pewPew.play()
    }
    
})
game.onUpdate(function on_update() {
    
    if (Rigor.isHittingTile(CollisionDirection.Bottom)) {
        can_jump = true
    }
    
})
// camera
scene.cameraFollowSprite(Rigor)
// scene
scene.setTileMap(img`
    ........................................bbbbbbbb
    ........................................bbbbbbbb
    ........................................bbbbbbbb
    ........................................bbbbbbbb
    ........................................bbbbbbbb
    aaaaaaaaaaaaaaaa....aaaa.....aaaaaaa....bbbbbbbb
    bbbbbbbbbbbbbbbb4444bbbb44444bbbbbbb....bbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbb
    b.......................................bbbbbbbb
    b.......................................bbbbbbbb
    b.......................................bbbbbbbb
    b...................aa......................bbbb
    b....a44444aaa444444bbaaa...................bbbb
    b....bbbbbbbbb444444bbbbb....a....aaaaaaaaaaaaaa
    b....bbbbbbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbb
    b....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b..............................................b
    b.....................a........................b
    b...........a................a.................b
    b................a................a.....a......b
    baaaaaaaa................a.....................b
    44444444444444444444444444444444444444444aaa...b
    44444444444444444444444444444444444444444bbb...b
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...b
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...b
    ...............................................b
    ...............................................b
    ...............................................b
    ...aa444aa4444aaaaa444aa4444aaaa4444aaa4aaaaaaab
    ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    .............5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    444444444444444444444444444444444444444444444444
`)
scene.setBackgroundColor(16)
scene.setTile(10, img`
    f 1 f f f f f f f 1 f f f f f f
    f 1 f f f f f f f 1 f f f f f f
    f 1 f f f f f f f 1 f f f f f f
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 2 . . . . . . . . . . .
    . . . . . 2 1 1 1 1 . . . . . .
    . . . . 1 2 2 1 1 1 . . . . . .
    . . . 1 1 2 2 2 1 1 1 . . . . .
    . . 1 1 1 1 2 1 1 1 1 . . . . .
    . . 1 1 1 1 1 1 1 1 1 . . . . .
    . . 1 1 1 1 1 1 1 1 1 . . . . .
    . . . 1 1 1 1 1 1 1 . . . . . .
    . . . 5 5 5 5 5 5 5 . . . . . .
    . . . 5 5 5 5 5 5 5 . . . . . .
    . . . 5 5 5 5 5 5 5 . . . . . .
    . . . . 5 5 5 5 5 . . . . . . .
    . . . . . 5 5 5 . . . . . . . .
`, true)
scene.onHitTile(SpriteKind.Player, 5, function on_win(Sprite: Sprite) {
    game.splash("YOU WON...but at what cost, battling through lava and dragons for what, ice cream? Welcome to real life, battiling throught everything just to get the sweet taste of something you love.")
    game.over(true)
})
scene.setTile(3, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 . . . 2 2 . . . . .
    . . 2 2 2 2 2 . 2 2 2 . . . . .
    . . 2 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 2 2 2 2 2 2 . . . . . .
    . . 2 2 2 2 2 2 2 2 . . . . . .
    . . . 2 2 2 2 2 2 . . . . . . .
    . . . . 2 2 2 2 . . . . . . . .
    . . . . 2 2 2 2 . . . . . . . .
    . . . . . 2 2 . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
scene.setTile(4, img`
    5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
    4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
    4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
    2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
    2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
    4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
    2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
    4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
    5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
    4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
    4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
    5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
    5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
    4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
    4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
    4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
`, true)
scene.setTile(11, img`
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
scene.onHitTile(SpriteKind.Player, 4, function on_death(sprite: Sprite) {
    Rigor.say("ouch")
    info.changeLifeBy(-1)
    game.splash("Lava kinda hurts")
})
let Dragon = sprites.create(img`
    . . f f f . . . . . . . . . . .
    . f f c 7 . . . . . . . . . . .
    f f c 7 f . . . . . . . . . . .
    f c f c . . . . . . f f f f f .
    f f f c c . c c . f c 7 7 c c .
    f f c 3 c c 3 c c f 7 c 7 7 c .
    f f 7 3 7 7 3 7 c f 7 c c 7 c .
    . c 7 7 7 7 7 7 c 7 7 c c c . .
    . c 7 2 7 2 7 7 7 c c c c . . .
    c 7 7 7 7 7 7 7 7 7 c c . . . .
    c 7 c 7 7 7 c 7 7 7 7 f . . . .
    f 7 1 f f f 1 7 7 7 7 f c . . .
    f 7 7 7 7 7 7 7 7 7 7 f c c . .
    . f 7 7 7 7 7 7 7 7 c f . . . .
    . . f 7 7 7 7 7 7 c f . . . . .
    . . . f f f f f f f . . . . . .
`, SpriteKind.Enemy)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    game.splash("you were dragon diner")
})
Dragon.follow(Rigor, 55)
tiles.placeOnTile(Dragon, tiles.getTileLocation(0, 4))
Dragon.startEffect(effects.fire)
