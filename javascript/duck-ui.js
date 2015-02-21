;Quintus.DuckUI = function(Q) {

    Q.UI.Text.extend("Score", {
        init: function () {
            this._super({
                label: "score: 0",
                align: "center",
                x: Q.width - 100,
                y: 30,
                weight: "normal",
                size: 18,
                color: "white"
            });

            Q.state.on("change.score", this, "score")
        },

        score: function (score) {
            this.p.label = "score: " + score;
        }
    })

}