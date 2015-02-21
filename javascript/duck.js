window.addEventListener('load',function() {

    var Q = Quintus()
        .include("Sprites, Scenes, Input, 2D, Touch, UI, Anim, Random")
        .include("DuckScenes, DuckSprites, DuckUI")
        .setup({width: 700, height: 500, maximize: 'touch'})
        .controls()
        .touch()

    Q.load("sprites.png, sprites.json",  function() {
        Q.compileSheets("sprites.png","sprites.json")

        Q.stageScene("level1")
    })
    window.Q = Q;

}, true);