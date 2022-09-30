const nomeh = document.getElementById('texto-apresentacao');
const fname = nomeh.innerHTML;
const imageProj = document.getElementById('image-projeto');

window.onscroll = function(){
    efeitoCarrega();
}

function efeitoCarrega(){
    if(document.documentElement.scrollTop > 350){
        document.getElementById('sobre').className = 'show d-flex';
    }
}

/* Função escreve nome de apresentação */

function escrevendo (nome) {
    setTimeout( () => {
    const meuNome = nome.split('');
    nomeh.innerHTML='';
    meuNome.forEach( (l, x) => {
        setTimeout(function (){
            nomeh.innerHTML += l;
        }, 80 * x)
    })}, 1000)
    
}

/* Função muda imagem dos projetos automaticamente */

function mudaImageProj(e){
    document.getElementById('imageProj').src = e;
    document.getElementById('imageModal').src = e;
}



