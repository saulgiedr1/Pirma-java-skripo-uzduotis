window.onload = function() {

    let ilgis;
    let plotis;
    let perimetras;

    ilgis=15;
    plotis=25;

    perimetras = staciakampioPerimetras(plotis,ilgis)

    console.log(perimetras)

}
function staciakampioPerimetras( a,b) {
    return 2*a+2*b;
    
}

