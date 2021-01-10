function getMax(data){
    var max = Math.max.apply(Math, data.map(function(o) { return o.count; }));
    var rounder = findRounder(max);
    return Math.ceil(max / rounder) * rounder;
}

function findRounder(val) {
    var rounder = 10;
    if(val > 100) {
        var length = val.toString().length;
        for(var i = 0; i < length - 2; i++) {
            rounder = rounder * 10;
        }
    }
    return rounder;
}

export default getMax;