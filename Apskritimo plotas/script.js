window.onload= function() {

    let spindulys;    
    let plotas;
    

    spindulys=20;

    plotas= apskritimoPlotas (spindulys)

    console.log(plotas)
    
}
function apskritimoPlotas (a) {
    return Math.PI*a*a
}

