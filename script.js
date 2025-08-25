document.addEventListener("DOMContentLoaded",function(){
    let numActual = Number(localStorage.getItem("contador")) || 0;


    const numeroDiv = document.getElementById("numero");
    const btnSumar = document.getElementById("sumar");
    const btnRestar = document.getElementById("restar");
    const btnReset = document.getElementById("reset");
    const sndSuma = new Audio("./snd/suma.wav");
    const sndResta = new Audio("./snd/resta.wav");
    const sndReset = new Audio ("./snd/reset.wav");
    const btnTema = document.getElementById("cambiarTema")

    const temaGuardado = localStorage.getItem("tema") || "claro";
    document.body.classList.add(temaGuardado);

    function actualizarNumero(){
        numeroDiv.textContent = numActual;
        if(numActual > 0){
            numeroDiv.style.color = "green";
        } else if (numActual < 0){
            numeroDiv.style.color = "red";
        }else{
            numeroDiv.style.color = "gray";
        }

        localStorage.setItem("contador", numActual);

        numeroDiv.classList.add("actualizado");
        setTimeout(function(){
            numeroDiv.classList.remove("actualizado");
        },150); 
    }
    actualizarNumero();
    btnSumar.addEventListener("click", function(){
        numActual++;
        actualizarNumero();
        sndSuma.play();
    });

    btnRestar.addEventListener("click", function(){
        numActual--;
        actualizarNumero();
        sndResta.play();
    });

    btnReset.addEventListener("click", function(){
        numActual = 0;
        actualizarNumero();
        sndReset.play();
    });

    btnTema.addEventListener("click", function(){
        document.body.classList.toggle("oscuro");
        document.body.classList.toggle("claro");

        const temaActual = document.body.classList.contains("oscuro") ? "oscuro" : "claro";
        localStorage.setItem("tema", temaActual);   
    });
});