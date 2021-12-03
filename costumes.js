const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const u2 = document.querySelector('.u2');
const u3 = document.querySelector('.u3');
const cpwr = document.querySelector('#cpwr');
const cps = document.querySelector('#cps');
const dc = document.querySelector('.dc');
const version = document.querySelector('.vers');
const c1 = document.querySelector('.c1');
const dogeCos = document.querySelector('.dogeCos')
const dcCos = document.querySelector('.dcCos');

var doco1 = 0;

const costume = 
{
    'default': 'doge',
    'heavenly': 'url(./Assets/hevanly-doge.png)'
}

function loadCosData() {
    doco1 = Math.abs(readCookie('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
};



c1.addEventListener('click', function(){
    dogeCos.style.content = costume.heavenly
    dogeCos.style.width = 'auto';
    createCookie('costume', costume.heavenly, 1000)
});