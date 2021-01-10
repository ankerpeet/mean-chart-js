function getInterval(val) {
    var divisor = 2;
    for(var i = 10; i > 1; i-- ) {
        console.log(i);
        if(val % i == 0) {
            divisor = i;
            break;
        }
    }
    return val / divisor;
}

export default getInterval;