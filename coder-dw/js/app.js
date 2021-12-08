
  
    let btnNav = document.getElementById('nav');

    function mostrarNav(){
        btnNav.style.display = "block"

    }
    function ocultarNav(){
        btnNav.style.display = "none"

    }


    function mostrarOcultarNav(){
        switch(btnNav.style.display)
        {
            case  btnNav.style.display = "block":
            ocultarNav();
            break;

            case btnNav.style.display = "none":
            mostrarNav();
            break;

        }
    }
