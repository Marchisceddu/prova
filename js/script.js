//Funzione per far scomparire/riapparire il documento all'apertura/chiusura del menu
function hide_element (idhome, idsection){
    let home = document.getElementById(idhome);
    let cioa = document.getElementById(idsection);

    if (home.style.opacity=="1"){
        home.style.opacity = "0";
        cioa.style.display = "none";
    }
    else{
        window.setTimeout(function()
        {
            home.style.opacity = "1";
            cioa.style.display = "block";
        },100);
    }
}

//Funzione per settare lo sfondo del menu con il blu e meno luminosità
function background_blur (id){
    let block = document.getElementById(id);

    if ($("#burger-toggle").is(":checked")){
        block.style.filter = "blur(2px) brightness(60%)";
        block.style.webkitFilter = "blur(2px) brightness(60%)";
    }
    else{
        block.style.filter = "blur(0px) brightness(100%)";
        block.style.webkitFilter = "blur(0px) brightness(100%)";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let block = document.getElementById('fisso');

    if (document.documentElement.scrollTop < 300) {
        block.style.filter = "blur(0px) brightness(100%)";
        block.style.webkitFilter = "blur(0px) brightness(100%)";
    }
    else{
        block.style.filter = "blur(1px) brightness(80%)";
        block.style.webkitFilter = "blur(1px) brightness(80%)";
    }
}
