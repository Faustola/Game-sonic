/*let inicioMostraSonic = () => {
    let inicioSonic = document.querySelector(".inicio-sonic");
    let inicioGamb = document.querySelector(".inicio-gamb");
    let telaInicio = document.querySelector(".tela-inicio");
    let telaJogo = document.querySelector(".tela-jogo")

    inicioSonic.src="images/sonic-beleza-inicio.gif";

    let disparaAnimation = () => {
        inicioGamb.classList.add('animation-inicio');
    }
    setTimeout(disparaAnimation, 1400);
    let destroyElementsInicio = () => {
        telaInicio.style.display="none";
        telaJogo.style.display="block"
    }
    setTimeout(destroyElementsInicio, 3400);
}*/


//Movimentação do personagem

let dx;
let dy;
let px;
let py;
let vel;
let obj;
let tmp;
let i = 0;
let io = 0;
let frame = 3;
let viradoDireita = true;
let viradoEsquerda = false;
let ok;
let okay;
let correndo = false;



//Pulo e ataque
window.addEventListener('keydown', function(e) {
    let sonic = document.querySelector(".sonic")

    if (e.key === "w" && i == 0) {
        sonic.src="images/pulo.png";
        sonic.classList.add("sonic-pulo");
        i++;
        io++;

        function paraPulo() {
            sonic.classList.remove('sonic-pulo');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false && correndo == false) {
                sonic.src="images/sonic-parado-inicio-esquerda.gif";
            };

            if (viradoEsquerda == true && viradoDireita == false && correndo == true) {
                sonic.src="images/sonic-corre-esquerda.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == false) {
                sonic.src="images/sonic-parado-inicio-direita.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == true) {
                sonic.src="images/sonic-corre-direita.gif";
            };
          }

          setTimeout(paraPulo, 1000);
    }

    if (e.key === "s" && i == 0) {
        sonic.style.top="170px"
        sonic.src="images/pulo.png";
        sonic.classList.add("sonic-ataque");
        i++;
        io++;

        function paraAtaque() {
            sonic.style.top="160px"
            sonic.classList.remove('sonic-ataque');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false) {
                sonic.src="images/sonic-parado-inicio-esquerda.gif";
            };

            if (viradoEsquerda == true && viradoDireita == false && correndo == true) {
                sonic.src="images/sonic-corre-esquerda.gif";
            };
            
            if (viradoDireita == true && viradoEsquerda == false) {
                sonic.src="images/sonic-parado-inicio-direita.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == true) {
                sonic.src="images/sonic-corre-direita.gif";
            };
          }

          setTimeout(paraAtaque, 800);
    }
})


// Movimentação para os lados
function inicia() {
dx = 0;
px = 30;
vel = 4;


    document.addEventListener('keydown', function(e) {
        let sonic = document.querySelector(".sonic");

        if (e.key === "d" && i == 0) {
            viradoDireita = true;
            viradoEsquerda = false;
            correndo = true;

            sonic.src="images/sonic-corre-direita.gif";
            frame++;
            dx = .4;
            if (frame ===4.1 ) {
                sonic.src="images/sonic-corre-direita/sonic-corre-1.png"
            }
            if (frame ===6) {
                sonic.src="images/sonic-corre-direita/sonic-corre-2.png"
            }
            if (frame ===7) {
                sonic.src="images/sonic-corre-direita/sonic-corre-3.png"
            }
            if (frame ===8) {
                sonic.src="images/sonic-corre-direita/sonic-corre-4.png"
            }
            if (frame === 9) {
                frame = 4;
            }

        }

        if (e.key === "a" & i ==0) {
            viradoDireita = false;
            viradoEsquerda = true;
            correndo = true;
            vel = 4;
            sonic.src="images/sonic-corre-esquerda.gif";
            frame++;
            dx = -.4;
           if (frame ===4.1 ) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-1.png"
            }
            if (frame ===6) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-2.png"
            }
            if (frame ===7) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-3.png"
            }
            if (frame ===8) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-4.png"
            }
            if (frame === 9) {
                frame = 4;
            }

        }        
    });

    document.addEventListener("keyup", function (e) {
        let sonic = document.querySelector(".sonic");

        if (e.key === "d") {
            dx = 0;
            correndo = false;
            
            sonic.src="images/sonic-parado-inicio-direita.gif"
            frame = 3;

            if (io == 1) {
                sonic.src="images/pulo.png";
            }
        };

        if (e.key === "a") {
            dx = 0;
            correndo = false;
            sonic.src="images/sonic-parado-inicio-esquerda.gif"
            frame = 3;

            if (io == 1) {
                sonic.src="images/pulo.png";
            }
        }});

        tmp = setInterval(enterFrame, 10);

}

let cloneRing;
let rValue;


function enterFrame() {
    let sonic = document.querySelector(".sonic");
    let background = document.querySelector(".div-img")
    let ring = document.querySelector(".ring-colet");
    let esquerdaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('left'));
    let esquerdaBackground = parseInt(window.getComputedStyle(background).getPropertyValue('background-position'));
    let esquerdaRing = parseInt(window.getComputedStyle(ring).getPropertyValue('left'));

        ok = px += dx * vel;

        okay = sonic.style.left=ok+"px";

        if (esquerdaSonic <= 0 && viradoEsquerda == true) {
            px = 0;
        }


//Colisão com o fundo
    if (esquerdaSonic >= 320 && esquerdaBackground <= 0) { 
        background.style.backgroundPosition=-0.75*(ok-320)+"px";

        //ring
        ring.style.left=750 -0.75*(ok-320)+"px";
        if (esquerdaRing <= 685) {
            ring.style.display="block";
        }
        if(esquerdaRing >=686){
            ring.style.display="none";
        }
        if(esquerdaRing <=-5){
            ring.style.display="none";
        }

        ok = 0;

        sonic.style.left="320px";
    }

    if (esquerdaSonic == 320 && esquerdaBackground >= 0.1) {
        background.style.backgroundPosition=-2+"px";
    }

}


window.addEventListener("load", inicia());


//rings

let ring = document.querySelector(".ring-colet");

/*function geraRing() {
    let ring = document.querySelector(".ring-colet");
    let background = document.querySelector(".div-img");

    //let randomRing = [250, 350, 480];
    //let rand = Math.floor(Math.random()*randomRing.length);
    //rValue = randomRing[rand];

    cloneRing = ring.cloneNode(true);
    cloneRing.style.cssText="position: absolute; top: 165px; left: 750px; width: 22px; height: 22px; display: block;"

    background.appendChild(cloneRing);
}

setInterval(geraRing, 2000);*/
