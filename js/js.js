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

/* Array criado para armazenar informações da cada projeto individualmente.
    Cada imagem tem um número que está ligado a primera informação(id) do array.
*/

let bancoImagens = [
    ['0', 'image/clinicamedica.png', 'Lading Page clínica Médica com Html, css criada durante curso'],
    ['1','image/orcamentopessoal.png', 'Aplicação para controle de despesas com possibilidade de criar e excluir despesas'],
    ['2','image/matainseto.png', 'Jogo divertido mata inseto com limite de vida e cronômetro para a vitória'],
    ['3','image/cep.png', 'Aplicação ligada ao uma API que localizar endereço'],
    ['4','image/sitenoticias.png', 'Página modelo para um site de notícia']
]

function mudaImageProj(e){
    document.getElementById('imageProj').src = bancoImagens[e][1];
    document.getElementById('imageModal').src = bancoImagens[e][1];
    document.getElementById('legendaimage').innerHTML = bancoImagens[e][2];
    document.getElementById('legandaImgModal').innerHTML = bancoImagens[e][2];
}




