const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const u2 = document.querySelector('.u2');
const u3 = document.querySelector('.u3');
const u4 = document.querySelector('.u4');
const cpwr = document.querySelector('#cpwr');
const cps = document.querySelector('#cps');
const dc = document.querySelector('.dc');
const version = document.querySelector('.vers');
const change = document.querySelector('.changes');
const ex = document.querySelector('.ex')

var ver = '0.7.3';
var page = window;
const ask = page.prompt;
const abs = Math.abs;

var selCos = '0'

var mul = 10

var doco = 0;
var doco1 = 0;
var clipo = 1;
var clipes = 0;
var cpsok = 0;
let a1 = 0;


doge.addEventListener('click', function () {
    doco += clipo;
    dc.innerHTML = `DogeCoin: ${doco}`;
    localStorage.setItem('totalDc', doco)
    anim();
});

version.addEventListener('click', function () {
    change.style.opacity = 1;
    change.style.zIndex = 2;
})

ex.addEventListener('click', function(){
    change.style.opacity = 0;
    change.style.zIndex = 0;
})


function anim() {
    selCos = localStorage.getItem('cos')
    switch(selCos){
        case '0':
            doge.style.content = "url(./Assets/DOGE2.png)"
            setTimeout(function () {
                doge.style.content = "url(./Assets/DOGE.png)"
            }, 200)
            break;
        default:
            break;
    }    
}

function loadVersion() {
    version.innerHTML = `Version: ${ver}`
};

function cpsGo() {
    setInterval(function () {
        doco += clipes;
        dc.innerHTML = `DogeCoin: ${doco}`;
    }, 1000)
};

function reload(){
    window.location.href = window.location.href
}

function loadData() {
    doco = abs(localStorage.getItem('totalDc'));
    dc.innerHTML = `DogeCoin: ${doco}`;
    clipo = abs(localStorage.getItem('clickpower'));
    if (clipo == 0) {
        clipo = 1;
        cpwr.innerHTML = `Clickpower: ${clipo}`;
    } else {
        cpwr.innerHTML = `Clickpower: ${clipo}`;
    }
    a1 = abs(localStorage.getItem('a1'));
    if( a1 == 0){
        clipes = 0;
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
    }else{
        clipes = abs(localStorage.getItem('clipes'))
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
        cpsGo();
    }
};

function loadDogeCos() {
    const code = '1807';
    selCos = localStorage.getItem('cos')
    switch (selCos) {
        case '0':
            doge.style.content = 'url(./Assets/DOGE.png)'
            doge.style.width = 'auto'
            doge.style.border = '0px solid #000'
            break;
        case '1':
            doge.style.content = 'url(./Assets/hevanly-doge.png)'
            doge.style.width = 'auto'
            doge.style.border = '5px solid #000'
            break;
        case '2':
            doge.style.content = 'url(./Assets/fancy-doge.png)'
            doge.style.width = 'auto'
            doge.style.border = '5px solid #000'
            break;
        case '3':
            doge.style.content = 'url(./Assets/doges-cousin.png)'
            doge.style.width = 'auto'
            doge.style.border = '5px solid #000'
            break;
    }
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
};

let code = localStorage.getItem('code')

function deleteData() {
    let ans = ask("Are you sure?\n[Y|N]")
    switch (ans) {
        case 'y' || 'Y':
            doco = 0;
            dc.innerHTML = `DogeCoin: ${doco}`;
            localStorage.removeItem('totalDc');
            clipo = 1;
            cpwr.innerHTML = `Clickpower: ${clipo}`
            localStorage.removeItem('clickpower');
            selCos = '0'
            localStorage.removeItem('cos')
            doge.style.content = 'url(./Assets/DOGE.png)'
            doge.style.width = 'auto'
            doge.style.border = '0px solid #000'
            break;
        case 'n' || 'N':
            doco = doco
            clipo = clipo
    };
};

u1.addEventListener('click', function () {
    if (doco >= 100) {
        clipo += 1;
        doco -= 100
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        localStorage.setItem('clickpower', clipo);
        cpwr.innerHTML = `Clickpower: ${clipo}`
    }
});

u2.addEventListener('click', function () {
    if (doco >= 2000) {
        doco -= 2000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipes += 1;
        localStorage.setItem('clipes', clipes)
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
        cpsok = 1;
        let a1 = 1;
        localStorage.setItem('a1', a1)
        reload();
        cpsGo();
    }
});

u3.addEventListener('click', function () {
    if (doco >= 10000) {
        doco -= 10000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipo += Math.round(clipo / 100 * mul);
        cpwr.innerHTML = `Clickpower: ${clipo}`;
        localStorage.setItem('clickpower', clipo);
    }
})

u4.addEventListener('click', function () {
    if (doco >= 50000) {
        doco -= 50000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        localStorage.setItem('totalDc', doco)
        mul = 20;
    }
});

document.onkeydown = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        var coAns = ask('Enter Admin Code:')
        if (coAns == code) {
            let ans = ask(`Hello, You've reached the admin menu.\nEnter a number [1-3]`)
            switch (ans) {
                case ans = '1':
                    var total = ask(`Enter DogeCoin Needed.`)
                    doco += abs(total);
                    dc.innerHTML = `DogeCoin: ${doco}`;
                    localStorage.setItem('totalDc', doco)
                    break;
                case ans = '2':
                    var total = ask(`Enter Clickpower Needed`)
                    clipo += abs(total);
                    cpwr.innerHTML = `Clickpower: ${clipo}`
                    localStorage.setItem('clickpower', clipo)
                    break;
                case ans = '3':
                    var total = ask(`Enter CPS Needed`)
                    clipes += abs(total)
                    cps.innerHTML = `Clicks Per Second: ${clipes}`
                    localStorage.setItem('clipes', clipes)
                    reload();
                    break;
                case ans = '4':
                    alert("You've Found The Secret!");
                    break;
            }

        }

    }
};