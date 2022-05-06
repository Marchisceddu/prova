let mobile_screen = window.matchMedia("(max-width: 800px)");
let vertical_screen = window.matchMedia("(orientation: portrait)");

function checked_menu (idhome, idsection, idfisso, idnav, idlogo, idbrushstroke_menu){
    let home = document.getElementById(idhome);
    let section = document.getElementById(idsection);
    let fisso = document.getElementById(idfisso);
    let nav = document.getElementById(idnav);
    let logo = document.getElementById(idlogo);
    let brushstroke_menu = document.getElementById(idbrushstroke_menu);

    if ($("#burger-toggle").is(":checked"))
    {
        //Setta lo sfondo del menu con il blur e meno luminosità
        fisso.style.filter = "blur(2px) brightness(60%)";
        fisso.style.webkitFilter = "blur(2px) brightness(60%)";

        //Scompare il documento all'apertura del menu 
            //(vecchio background navbar responsive che si alza)
            // if (mobile_screen.matches || vertical_screen.matches){
            //     nav.style.transform = "translateY(-100%)";
            //     nav.style.opacity = "0";  
            // }
            // else{
            //     logo.style.opacity = "0";
            //     brushstroke_menu.style.opacity = "0";
            // }

        //(nuovo)
        logo.style.opacity = "0";
        brushstroke_menu.style.opacity = "0";

        section.style.display = "none";
        home.style.opacity = "0";

        $('.images').slick('slickPlay'); //Attiva l'animazione delle img
    }
    else
    {
        //Toglie gli effetti allo sfondo
        fisso.style.filter = "blur(0px) brightness(100%)";
        fisso.style.webkitFilter = "blur(0px) brightness(100%)";

        //Appare il documento alla chiusura del menu 
        window.setTimeout(function()
        {
            home.style.opacity = "1";
            section.style.display = "block";

            //(vecchio background navbar responsive che si alza)
                // if (mobile_screen.matches || vertical_screen.matches){
                //     nav.style.transform = "translateY(0%)";
                //     nav.style.opacity = "1";  
                // }
                // else{
                //     logo.style.opacity = "1";
                //     brushstroke_menu.style.opacity = "0.8";
                // }

            // (nuovo)
            logo.style.opacity = "1";
            brushstroke_menu.style.opacity = "0.8";
        },210);

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
    else {
        block.style.filter = "blur(1px) brightness(80%)";
        block.style.webkitFilter = "blur(1px) brightness(80%)";
    }

    //TXT1, IMG1 SINISTRA
    let txt1 = document.getElementById('box-txt1');
    let img1 = document.getElementById('box-img1');

    // document.getElementById('sborr').innerHTML = document.documentElement.scrollTop;
    // document.getElementById('sborr2').innerHTML = getComputedStyle(img1).getPropertyValue('--translatex');
    
    if (document.documentElement.scrollTop <= 200) {
      txt1.style.setProperty("--translatex", -110 +"%");
      img1.style.setProperty("--translatex", 110 +"%");
    }
    else if (document.documentElement.scrollTop <= 400) {
      txt1.style.setProperty("--translatex", ((window.scrollY - 200) / 1.80) - 110 + "%");
      img1.style.setProperty("--translatex", (110 - (window.scrollY - 200) / 1.80) + "%");
    }

    if (getComputedStyle(document.getElementById('box-txt1')).getPropertyValue('--translatex') > "0.5555555555555571%" || 
       (getComputedStyle(document.getElementById('box-txt1')).getPropertyValue('--translatex') < "0.5555555555555571%" && document.documentElement.scrollTop > 400)) {
      txt1.style.setProperty("--translatex", 0.5555555555555571 +"%");
      img1.style.setProperty("--translatex", 0 +"%");
    }
}

//Funzione per gestire le immagini slick
$(document).ready(function(){
    //Funzione per lo scorrere dei piatti consigliati
    $('.images').slick({
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 800,
      edgeFriction: 0,
      touchThreshold: 8,
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

    //Funzione per lo scorrere delle foto in home
    $('.box-img').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 800,
        edgeFriction: 0,
        touchThreshold: 8,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //Funzione per lo scorrere dell testo in home
    $('.testo-paragrafo').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 0,
        speed: 800,
        edgeFriction: 0,
        touchThreshold: 8,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

  });