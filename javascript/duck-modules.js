Quintus.Random = function(Q) {
    Q.random = function(min,max) {
        return min + parseInt(Math.random() * (max - min))
    }
}