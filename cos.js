const c1 = document.querySelector('.c1')
const D = document.querySelector('.D')
const HD = document.querySelector('.HD')
const dogeCos = document.querySelector('.dogeCos')
const dcCos = document.querySelector('.dcCos')
const Dh6 = document.querySelector('.Dh6')
const HDh6 = document.querySelector('.HDh6')
const cosData = document.querySelector('.cosData')

var selCos = '0';

function loadCosData() {
    selCos = localStorage.getItem('cos')
    if(selCos = '0'){
        dogeCos.style.content = 'url(./Assets/DOGE.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '0px solid #000'
        Dh6.style.opacity = 1;
        HDh6.style.opacity = 0;
    }else if(selCos = '1'){
        dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 1;
        Dh6.style.opacity = 0;
        HD.style.opacity = 1;

    }
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
};

c1.addEventListener('click', function(){
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    if(doco1 >= 100){
        HD.style.opacity = 1;
        doco1 = Math.abs(localStorage.getItem('totalDc'));
        doco1 -= 100
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        localStorage.setItem('totalDc', doco1)
    }
})

HD.addEventListener('click', function(){
    if(HD.style.opacity == 1){
        localStorage.removeItem
        selCos = '1';
        localStorage.setItem('cos', '1')
        dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 1;
        Dh6.style.opacity = 0;
    }
});

D.addEventListener('click', function(){
    selCos = '0';
    localStorage.setItem('cos', selCos)
    dogeCos.style.content = 'url(./Assets/DOGE.png)'
    dogeCos.style.width = 'auto'
    dogeCos.style.border = '0px solid #000'
    Dh6.style.opacity = 1;
    HDh6.style.opacity = 0;
});

cosData.addEventListener('click', function(){
    let ans = window.prompt("Are you sure?\n[Y|N]")
    switch (ans) {
        case 'y' || 'Y':
            dogeCos.style.content = 'url(./Assets/DOGE.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '0px solid #000'
            Dh6.style.opacity = 1;
            HDh6.style.opacity = 0;
            HD.style.opacity = 0;
            selCos = '0';
            localStorage.removeItem('cos')
            break;
        case 'n' || 'N':
            selCos = selCos;
    };
})