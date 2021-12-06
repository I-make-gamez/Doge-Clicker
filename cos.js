const c1 = document.querySelector('.c1')
const D = document.querySelector('.D')
const HD = document.querySelector('.HD')
const dogeCos = document.querySelector('.dogeCos')
const dcCos = document.querySelector('.dcCos')
const Dh6 = document.querySelector('.Dh6')
const HDh6 = document.querySelector('.HDh6')
const cosData = document.querySelector('.cosData')

var selCos = '0';
let c1Un = false;

function loadCosData() {
    selCos = localStorage.getItem('cos')
    c1Un = JSON.parse(localStorage.getItem('c1Un'))
    switch(selCos){
        case '0':
            dogeCos.style.content = 'url(./Assets/DOGE.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '0px solid #000'
            Dh6.style.opacity = 1;
            HDh6.style.opacity = 0;
            break;
        case '1':
            HD.style.opacity = 1;
            dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '5px solid #000'
            HDh6.style.opacity = 1;
            Dh6.style.opacity = 0;
            HD.style.opacity = 1;
            break;

    }
    switch(c1Un){
        case true:
            HD.style.opacity = 1;
            break;
        case false:
            HD.style.opacity = 0;
            break;
    }
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
};

c1.addEventListener('click', function(){
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    if(doco1 >= 5000){
        HD.style.opacity = 1;
        doco1 = Math.abs(localStorage.getItem('totalDc'));
        doco1 -= 100
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        localStorage.setItem('totalDc', doco1)
        c1Un = true;
        localStorage.setItem('c1Un', c1Un)
    }
})

HD.addEventListener('click', function(){
    if(HD.style.opacity == 1){
        localStorage.setItem('cos', '1')
        dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 1;
        Dh6.style.opacity = 0;
    }
});

D.addEventListener('click', function(){
    localStorage.setItem('cos', '0')
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
            c1Un = false;
            localStorage.removeItem('c1Un')
            break;
        case 'n' || 'N':
            selCos = selCos;
    };
})