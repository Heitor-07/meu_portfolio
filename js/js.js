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

let bancoImagens = [
    ['image/clinicamedica.png', 'Lading Page clínica Médica com Html, css criada durante curso'],
    ['image/orcamentopessoal.png', 'Aplicação para controle de despesas com possibilidade de criar e excluir despesas'],
    ['image/matainseto.png', 'Jogo divertido mata inseto com limite de vida e cronômetro para a vitória'],
    ['image/cep.png', 'Aplicação ligada ao uma API que localizar endereço'],
    ['image/sitenoticias.png', 'Página modelo para um site de notícia']
]

function mudaImageProj(e){
    document.getElementById('imageProj').src = bancoImagens[e][0];
    document.getElementById('imageModal').src = bancoImagens[e][0];
    document.getElementById('legendaimage').innerHTML = bancoImagens[e][1];
    document.getElementById('legandaImgModal').innerHTML = bancoImagens[e][1];
}




