function validarlogin(){
    var e = document.getElementById('email').value;
    var s = document.getElementById('senha').value;

    if( e !== 'pauloteste@gmail.com' && s !== '123456789'){
        window.alert("Login inválido!");
    }
    else{
        logar(1);
    }
}

function logar(e){
    if(e > 0){
        window.location.href = "https://home-pokedex-dio.netlify.app/";
        window.alert("Bem vindo(a)!");
    }
}