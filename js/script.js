//Funzione per far scomparire/riapparire il documento all'apertura/chiusura del menu
function hide_element (idhome, idsection){
    let home = document.getElementById(idhome);
    let section = document.getElementById(idsection);

    if (home.style.opacity=="1"){
        section.style.display = "none";
        home.style.opacity = "0";
    }
    else{
        window.setTimeout(function()
        {
            home.style.opacity = "1";
            section.style.display = "block";
        },160);
    }
}

//Funzione per settare lo sfondo del menu con il blu e meno luminosità
function background_blur (id){
    let block = document.getElementById(id);

    if ($("#burger-toggle").is(":checked")){
        block.style.filter = "blur(2px) brightness(60%)";
        block.style.webkitFilter = "blur(2px) brightness(60%)";
        $('.images').slick('slickPlay'); //Attiva l'animazione delle img
    }
    else{
        block.style.filter = "blur(0px) brightness(100%)";
        block.style.webkitFilter = "blur(0px) brightness(100%)";
        $('.images').slick('slickPause'); //Mette in pausa l'animazione delle img
        $('.images').slick('slickGoTo','0','true'); //Resetta la posizione delle img
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let block = document.getElementById('fisso');

    if (document.documentElement.scrollTop < 250) {
        block.style.filter = "blur(0px) brightness(100%)";
        block.style.webkitFilter = "blur(0px) brightness(100%)";
    }
    else{
        block.style.filter = "blur(1px) brightness(80%)";
        block.style.webkitFilter = "blur(1px) brightness(80%)";
    }
}

//Funzione per gestire le immagini slick
$(document).ready(function(){
    //Funzione per lo scorrere dei piatti consigliati
    $('.images').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      edgeFriction: 0,
      touchThreshold: 5,
      slidesToShow: 4,
      slidesToScroll: 1,

      //Responsive per far vedere solo 2 img per volta
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
