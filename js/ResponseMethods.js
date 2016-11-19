/**
 * Created by Brian on 11/19/2016.
 */



function keyDistribution(target) {

    document.getElementById(target).innerHTML = '';

    //var numByKey = /* Call to get actual numbers */
    var numByKey = d3.range(12);

    var pieData = [
        { label: 'C', number: 0},
        { label: 'G', number: 0},
        { label: 'D', number: 0},
        { label: 'A', number: 0},
        { label: 'E', number: 0},
        { label: 'B', number: 0},
        { label: 'F#', number: 0},
        { label: 'Db', number: 0},
        { label: 'Ab', number: 0},
        { label: 'Eb', number: 0},
        { label: 'Bb', number: 0},
        { label: 'F', number: 0},
    ];

    for(var i = 0; i < numByKey.length; i++){
        pieData[i].number = numByKey[i]+1;
        console.log(pieData[i].number);
    }

    displayPieGraph(pieData, target, 400);


}
