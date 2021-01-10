import getMax from "./options/getMax";
import getInterval from "./options/getInterval";
import getScale from "./options/getScale";
import getPercentage from "./calculations/getPercentage";

class Chart {
    constructor(max, interval, scale, data){
        this.max = max;
        this.interval = interval;
        this.scale = scale;
        this.data = data;
    }
}

function MeanChart(data) {
    let max = getMax(data);
    let interval = getInterval(max);
    let scale = getScale(0, max, interval);

    for(var i = 0; i < data.length; i++) { 
        data[i].percentage = getPercentage(data[i].count, max);
    }
    
    return new Chart(max, interval, scale, data);
}

export default MeanChart;