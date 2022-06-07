window.onload= function() {

    let spindulys;
    let PI;
    let plotas;
    

    spindulys=20;

    plotas= apskritimoPlotas (spindulys)

    console.log(plotas)
    
}
function apskritimoPlotas (a) {
    return Math.PI*a*a
}

