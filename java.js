const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const u2 = document.querySelector('.u2');
const u3 = document.querySelector('.u3');
const u4 = document.querySelector('.u4');
const u5 = document.querySelector('.u5');
const cpwr = document.querySelector('#cpwr');
const cps = document.querySelector('#cps');
const dc = document.querySelector('.dc');
const version = document.querySelector('.vers');
const change = document.querySelector('.changes');
const ex = document.querySelector('.ex');
const log = document.querySelector('.log');
const ne = document.querySelector('.ne');
const wat = document.querySelector('.wat');
const puaex = document.querySelector('.puaex');
const wtpss = document.querySelector('.wtpuss')
const pua = document.querySelector('.pua')
const pw = document.querySelector('.pw')

var ver = 'B-0.9.0';
var page = window;
const ask = page.prompt;
const abs = Math.abs;

var selCos = '0'

var wtuss = wat.innerHTML
var wtass = '1) Planning smth big for end of beta<br>2) Working on animating some more costumes<br>3) Discord server, maybe?'
var wtpuss = `Makes Click Power Double For Thirty Seconds<br>This message wont show again`

var mul = 10
var mul2 = 10;
var nxt = 0;

var cbda = 0;

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
    bark();
});

version.addEventListener('click', function () {
    change.style.opacity = 1;
    change.style.zIndex = 2;
})

ex.addEventListener('click', function () {
    change.style.opacity = 0;
    change.style.zIndex = 0;
})

puaex.addEventListener('click', function(){
    pua.style.opacity = 0;
    pua.style.zIndex = 0;
})

pw.addEventListener('click', function(){
    if(cbda === 0){
        cbda = 1;
        wtpss.innerHTML = wtpuss;
        pua.style.opacity = 1;
        pua.style.zIndex = 2;
        localStorage.setItem('cbda', cbda)
    }
})

ne.addEventListener('click', function () {
    if (nxt === 0) {
        nxt = 1
        ne.innerHTML = 'Back'
        wat.innerHTML = '';
        wat.innerHTML = wtass;
        log.innerHTML = `Alerts for ${ver}`
    } else if (nxt === 1) {
        nxt = 0
        ne.innerHTML = 'Next'
        wat.innerHTML = '';
        wat.innerHTML = wtuss;
        log.innerHTML = `Changelog: ${ver}`
    }
})

function rnd(min, max) {
    return Math.random() * (max - min) + min;
  }

function anim() {
    selCos = localStorage.getItem('cos')
    switch (selCos) {
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
    log.innerHTML = `Changelog: ${ver}`
    cbda = localStorage.getItem('cbda')
};

var vh = document.innerHeight
var vw = document.innerWidth

function cpsGo() {
    setInterval(function () {
        if(a1 === 1){
            doco += clipes;
            dc.innerHTML = `DogeCoin: ${doco}`;
            anim();
        }else{
            a1 = 0;
            localStorage.setItem('a1', a1)
        }
    }, 1000)
};

function reload() {
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
    if (a1 === 0) {
        clipes = 0;
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
    } else {
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
        case '4':
            doge.style.content = 'url(./Assets/cheems.png)'
            doge.style.width = 'auto'
            doge.style.border ='0px solid #000'
    }
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
};

function bark(){

}

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
            localStorage.removeItem('cos')
            selCos = '0'
            doge.style.content = 'url(./Assets/DOGE.png)'
            doge.style.width = 'auto'
            doge.style.border = '0px solid #000'
            localStorage.removeItem('clipes')
            clipes = 0;
            a1 = 0;
            cps.innerHTML = `Clicks Per Second: ${clipes}`;
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

u5.addEventListener('click', function () {
    if (doco >= 75000) {
        doco -= 75000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipes += Math.round(clipes / 100 * mul2);
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
        localStorage.setItem('clipes', clipes);
    }
})

document.onkeydown = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        var coAns = ask('Enter Admin Code:')
        if (coAns == code) {
            let ans = ask(`Hello, You've reached the admin menu.\nEnter a number [1-5]`)
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
                    a1 = 0;
                    localStorage.setItem('a1', a1)
                    break;
                case ans = '5':
                    cbda = 0;
                    localStorage.setItem('cbda', cbda)
                    break;
            }

        }

    }
};