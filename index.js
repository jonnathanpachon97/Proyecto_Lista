const efectoPares = ()=>{
    par = document.querySelectorAll("#par");
    for(p=0;p<=4;p++){
        par[p].classList.remove("efecto-completo");
        par[p].classList.add("efecto-par");
    }  
}

const efectoImpares = ()=>{ 
    impar = document.querySelectorAll("#impar");
    impar.forEach(i => {
        i.classList.remove("efecto-completo");
        i.classList.add("efecto-impar");
    });   
}

const efectoLista = ()=>{
    completa = document.querySelectorAll("li");
    for(c=0;c<=9;c++){
        completa[c].classList.remove("efecto-par");
        completa[c].classList.remove("efecto-impar");
        completa[c].classList.add("efecto-completo");
    }
}