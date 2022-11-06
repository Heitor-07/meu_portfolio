/* Scroll */

ScrollReveal().reveal('#topo', {duration: 5000});
ScrollReveal().reveal('.banner-topo-apresentacao');

/*Sobre*/
ScrollReveal().reveal('#sobre', {rotate: {x: 70, y: 0, z: 0}, duration: 2500});

/* Habilidades */
ScrollReveal().reveal('.titulo-habilidades', { scale: 0.85, duration: 3000});
ScrollReveal().reveal('#habilidades h1', {duration: 3000});
ScrollReveal().reveal('.skills', {duration: 4000});

/* Projetos */
ScrollReveal().reveal('#projetos h1', {duration: 2000});
ScrollReveal().reveal('.menu-projeto', {duration: 3000});
ScrollReveal().reveal('.projetos-imagens', {duration: 4000});

/* ---- Menu contato lateral */
ScrollReveal().reveal('.link-contato-lateral', {duration: 4000});

/*seta subir*/
ScrollReveal().reveal('#seta-subir', {duration: 4000});

/* -------- Função escreve nome de apresentação -------- */
const nomeh = document.getElementById('texto-apresentacao');
const fname = nomeh.innerHTML;
const imageProj = document.getElementById('image-projeto');

nomeh.innerHTML='';

function escrevendo (nome) {
    setTimeout( () => {
    nomeh.innerHTML='';
    const meuNome = nome.split('');
    meuNome.forEach((l, x) => {
        setTimeout(function (){
            nomeh.innerHTML += l;
        }, 80 * x)
    })}, 1000)
    
}

/* Menu contato dinâmico collapse JQuery */

$('#contato').click(function(){
    $('.link-contato-superior').slideToggle(500);
    $('.link-contato-lateral').slideToggle(500);
})



/* Função muda imagem dos projetos automaticamente */
/* Array criado para armazenar informações da cada projeto individualmente.
    Cada imagem tem um número que está ligado a primera informação(id) do array.
*/

let bancoImagens = [
    ['0', 'image/clinicamedica.jpg', 'Lading Page clínica Médica com Html, css criada durante curso'],
    ['1','image/orcamentopessoal.jpg', 'Aplicação para controle de despesas, podendo criar e excluir despesas'],
    ['2','image/matainseto.jpg', 'Jogo divertido mata inseto com limite de vida e cronômetro para a vitória'],
    ['3','image/climatempo.jpg', 'Aplicação ligada ao uma API que informa o clima na cidade procurada'],
    ['4','image/sitenoticias.jpg', 'Página modelo para um site de notícia com Bootstrap']
]

function mudaImageProj(e){
    document.getElementById('imageProj').src = bancoImagens[e][1];
    document.getElementById('imageModal').src = bancoImagens[e][1];
    document.getElementById('legendaimage').innerHTML = bancoImagens[e][2];
    document.getElementById('legandaImgModal').innerHTML = bancoImagens[e][2];
}




