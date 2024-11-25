function menuShow(){
    /*Cria uma variavel*/
    let menuMobile = document.querySelector('.mobile-menu');
    /* menu tá igual a display: none;*/

    /*se ele clicar recebe a os atributos/caracterificas do open (display: block) */
    if (menuMobile.classList.contains('open')) {
       /*remove para continuar fechado o open*/
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.svg";
    } else {
        /*adiciona para continuar aberto o menu*/
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close.svg";
    }
}