;Quintus.DuckScenes = function(Q) {

    Q.scene("level1", function(stage) {
        Q.state.reset({ score: 0})

        stage.insert(new Q.Background())
        stage.insert(new Q.Wave({sheet: 'waterback', speed: 1, x: 445}))
        stage.insert(new Q.Wave({sheet: 'waterback', speed: 1, x: 890 + 445}))
        stage.insert(new Q.Wave({sheet: 'watermiddle', speed: 1.5, x: 445}))
        stage.insert(new Q.Wave({sheet: 'watermiddle', speed: 1.5, x: 890  + 445}))
        stage.insert(new Q.Wave({sheet: 'waterfront', speed: 2.5, x: 445}))
        stage.insert(new Q.Wave({sheet: 'waterfront', speed: 2.5, x: 890 + 445}))

        stage.insert(new Q.Score())

        stage.insert(new Q.Duck())

        var enemiesGenerator = window.setInterval(function() {
            var enemies = []
            enemies[0] = []
            enemies[0].positionY = Q.height * 0.2
            enemies[0].sheet = "airplane"

            enemies[1] = []
            enemies[1].positionY = Q.height * 0.5 - 20
            enemies[1].sheet = "boat"

            enemies[2] = []
            enemies[2].positionY = Q.height * 0.8
            enemies[2].sheet = "submarine"

            var randomEnemy = enemies[Q.random(0, 3)]
            stage.insert(new Q.Enemy({x: Q.width + Q.random(100, 250), y: randomEnemy.positionY, sheet: randomEnemy.sheet}))
        }, 1400)

        stage.stopEnemiesGeneration = function() {
            clearInterval(enemiesGenerator)
        }

    })

    Q.scene('endGame',function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width/2, y: Q.height/2, fill: "rgba(29, 151, 207, 0.7)"
        }))

        var button = container.insert(new Q.UI.Button({ x: 10, y: 0, fill: "rgba(29, 136, 255, 0.7)", fontColor: "white", label: "Play Again" }))
        container.insert(new Q.UI.Text({x:0, y: -10 - button.p.h, label: stage.options.label, color: "white" }))

        button.on("click",function() {
            Q.clearStages()
            Q.stageScene('level1')
        })

        container.fit(20)
    })

}