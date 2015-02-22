window.addEventListener('load',function() {

    var Q = Quintus()
        .include("Sprites, Scenes, Input, 2D, Touch, UI, Anim, Random")
        .include("DuckScenes, DuckSprites, DuckUI")
        .setup({width: 700, height: 500})
        .touch()

    //set up keyboard inputs
    Q.input.keyboardControls({
        UP: "up",
        DOWN: "down"
    });

    //do not show any buttons on touch device
    Q.input.touchControls({
        controls:  []
    });

    Q.load("sprites.png, sprites.json",  function() {
        Q.compileSheets("sprites.png","sprites.json")

        Q.stageScene("level1")
    })
    window.Q = Q;

}, true);