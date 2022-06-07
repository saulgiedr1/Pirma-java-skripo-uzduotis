window.onload = function() {

    let ilgis;
    let plotis;
    let aukstis;

    ilgis= 10;
    plotis= 45;
    aukstis= 12;

    turis= staciakampioGretasienioTuris(ilgis, plotis, aukstis)

    console.log(turis)
}
function staciakampioGretasienioTuris (a, b, c){
    return a*b*c;
}


