function getScale (minVal, maxVal, interval) {
    var arr = [];
    for(var i = minVal; i < maxVal; i += interval) {
        arr.push(i);
    }
    return arr;
}

export default getScale;