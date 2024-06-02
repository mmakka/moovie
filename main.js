document.addEventListener("DOMContentLoaded",()=>{
    const formulario= document.querySelector("form");

const errorInicio = (input,mensaje) => {
    const divContainer = input.parentNode;
    const errorText = document.querySelector(".error-text");
    divContainer.classList.add("error");
    errorText.innerText = mensaje;
};


const eliminarError = (input)=>{
    const divContainer = input.parentNode;
    const errorText= document.querySelector(".error-text");
    divContainer.classList.remove("error");
    errorText.innerText = "";
};


formulario.querySelectorAll("input").forEach(input =>{
    input.addEventListener("change",() => {
        const valor = input.value.trim();
        if(valor !== ""){
            eliminarError(input);
        }
    });
});

function validarCampo(campoId,mensaje){
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();
    if(value == ""){
        errorInicio(campo,mensaje);
        return false;
    }else{
        eliminarError(campo);
        return true;
    }
};

function isEmail(email){
    const expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(email);
};

function validarEmail(campoId,mensaje){
    const campo = document.getElementById(campoId);
    const email = campo.value.trim();
    if (email === " "){
        errorInicio(campo,"El correo electronico es obligatorio");
        return false;
    }else if(!isEmail(email)){
        errorInicio(campo,"Esta mal" );
        return false;
    }else{
        eliminarError(campo);
        return true;
    }
};

const validarFormulario =()=>{
    let validar = true;
    validar = validarEmail("email", "El correo ingresado no es valido ") && validar;
    validar = validarCampo("password", "La contraseña es obligatoria") && validar;
    return validar;
};

formulario.addEventListener("submit",event =>{
    event.preventDefault();
    if(!validarFormulario()){
        event.preventDefault();
        console.log("El formulario no es valido");
    }else{
        event.preventDefault();
        console.log("El formulario es valido");
    }
});

})



