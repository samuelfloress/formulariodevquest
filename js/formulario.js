const MostrarErro = document.querySelectorAll('.erro, .erro-ultimo');
const Campos = document.querySelectorAll('input');
const BotaoEnviar = document.querySelector('.btn');

BotaoEnviar.addEventListener('click', function (event) {
    event.preventDefault();


    MostrarErro.forEach(function (erro) {
        erro.style.display = 'none';
    });

    let formularioValido = true;

    Campos.forEach(function (campo, index) {
        if (campo.value.trim() === '') {
            MostrarErro[index].style.display = 'block';
            campo.classList.add('borda-erro');
            campo.classList.remove('borda');
            formularioValido = false;
        } else {
            campo.classList.remove('borda-erro');
            campo.classList.add('borda');
        }
    });
})
    
