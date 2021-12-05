const abs = Math.abs
const ask = page.prompt;
const c1 = document.querySelector('.c1')
const D = document.querySelector('.D')
const HD = document.querySelector('.HD')
const dogeCos = document.querySelector('.dogeCos')
const dcCos = document.querySelector('.dcCos')
const Dh6 = document.querySelector('.Dh6')
const HDh6 = document.querySelector('.HDh6')
const cosData = document.querySelector('.cosData')

var selCos = 0;

c1.addEventListener('click', function(){
    doco1 = abs(readCookie('totalDc'));
    if(doco1 >= 100){
        HD.style.opacity = 1;
        doco1 = abs(readCookie('totalDc'));
        doco1 -= 100
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        createCookie('totalDc', doco1, 1000)
        selCos = 1;
    }
})

HD.addEventListener('click', function(){
    if(HD.style.opacity == 1){
        dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 1;
        Dh6.style.opacity = 0;
        selCos = 0;
        createCookie('cos', selCos, 1000)
    }
});

D.addEventListener('click', function(){
    dogeCos.style.content = 'url(./Assets/DOGE.png)'
    dogeCos.style.width = 'auto'
    dogeCos.style.border = '0px solid #000'
    Dh6.style.opacity = 1;
    HDh6.style.opacity = 0;
    selCos = 1;
    createCookie('cos', selCos, 1000)
});

cosData.addEventListener('click', function(){
    let ans = ask("Are you sure?\n[Y|N]")
    switch (ans) {
        case 'y' || 'Y':
            dogeCos.style.content = 'url(./Assets/DOGE.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '0px solid #000'
            Dh6.style.opacity = 1;
            HDh6.style.opacity = 0;
            selCos = 0;
            eraseCookie('cos')
            break;
        case 'n' || 'N':
            selCos = selCos;
    };
})

function loadCosData() {
    doco1 = abs(readCookie('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
    selCos = abs(readCookie('cos'))
    if(selCos = 0){
        dogeCos.style.content = 'url(./Assets/DOGE.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '0px solid #000'
        Dh6.style.opacity = 1;
        HDh6.style.opacity = 0;
        selCos = 0;
    }else if(selCos = 1){
        HD.style.opacity = 1;
        dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 1;
        Dh6.style.opacity = 0;
    }
};