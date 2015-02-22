;Quintus.DuckSprites = function(Q) {

    Q.Sprite.extend("Duck", {
        init: function(p) {
            this._super(p, {
                sheet: "duck",
                x: 100,
                y: Q.height/2,
                position: 1,
                gravity: 0
            })
            this.add("2d, tween")

            Q.input.on("up", this, function() {
                if (this.p.position > 0) {
                    this.animate({ x: 100, y: this.p.y  - Q.height * 0.3 }, 0.2)
                    this.p.position--
                }
            })

            Q.input.on("down", this, function() {
                if (this.p.position < 2) {
                    this.animate({ x: 100, y: this.p.y  + Q.height * 0.3 }, 0.2)
                    this.p.position++
                }
            })

            this.on("hit.sprite",function(collision) {
                if(collision.obj.isA("Enemy")) {
                    Q.stage().stopEnemiesGeneration()
                    Q.stageScene("endGame", 1, { label: "Game over!" })
                    this.destroy()
                }
            })
        },
        step: function(p) {
            Q.state.inc("score", 1);
        }
    })

    Q.Sprite.extend("Enemy", {
        init: function(p) {
            this._super(p, {
                speed: 1
            })
        },
        step: function(p) {
            this.p.x -= (5 * this.p.speed)
            if (this.p.x + this.p.w < 0) {
                this.destroy()
            }
        }
    })

    Q.Sprite.extend("Background", {
        init: function(p) {
            this._super(p, {
                x: Q.width/2,
                y: 110,
                type: Q.SPRITE_UI,
                sheet: 'background'
            })

            this.on("touchEnd");
        },
        touchEnd: function(touch) {
            Q.input.trigger('up')
        }
    })

    Q.Sprite.extend("Wave", {
        init: function(p) {
            this._super(p, {
                y: Q.height/2 + 112,
                speed: 1,
                type: Q.SPRITE_UI
            })

            this.on("touchEnd")
        },
        step: function(p) {
            var skip = 2 * this.p.speed;
            this.p.x -= skip;
            if (this.p.x < - this.p.w/2) {
                this.p.x = this.p.w/2 + this.p.w - skip;
            }
        },
        touchEnd: function(touch) {
            Q.input.trigger('down')
        }
    })

}