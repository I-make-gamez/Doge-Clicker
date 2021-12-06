const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const u2 = document.querySelector('.u2');
const u3 = document.querySelector('.u3');
const cpwr = document.querySelector('#cpwr');
const cps = document.querySelector('#cps');
const dc = document.querySelector('.dc');
const version = document.querySelector('.vers');

var ver = '0.5.0';
var page = window;
const ask = page.prompt;
const abs = Math.abs;

var selCos = '0'


var doco = 0;
var doco1 = 0;
var clipo = 1;
var clipes = 0;
var cpsok = 0;

doge.addEventListener('click', function () {         
    doco += clipo;
    dc.innerHTML = `DogeCoin: ${doco}`;
    localStorage.setItem('totalDc', doco)
});

version.addEventListener('click', function(){
    alert('CHANGELOG 0.5.0:\n\n1)Costumes!!!\n2)Doge Space Station incorporated!')
})


function loadVersion() {
    version.innerHTML = `Version: ${ver}`
};

function cpsGo() {
    setInterval(function () {
        doco += clipes;
        dc.innerHTML = `DogeCoin: ${doco}`;
    }, 1000)
};

function loadData() {
    doco = abs(localStorage.getItem('totalDc'));
    dc.innerHTML = `DogeCoin: ${doco}`;
    clipo = abs(localStorage.getItem('clickpower'));
    if(clipo == 0){
        clipo = 1;
        cpwr.innerHTML = `Clickpower: ${clipo}`;
    }else{
        cpwr.innerHTML = `Clickpower: ${clipo}`;
    }
};

function loadDogeCos() {
    selCos = localStorage.getItem('cos')
    switch(selCos){
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

    }
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
};

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
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipes += 1;
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
        cpsok = 1;
        cpsGo();
    }
});

u3.addEventListener('click', function(){
    if (doco >= 10000) {
        doco -= 10000;
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipo += Math.round(clipo / 100 * 10);
        cpwr.innerHTML = `Clickpower: ${clipo}`;
    }
})

document.onkeydown = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        let ans = ask(`Hello, You've reached the admin menu.\nEnter a number [1-1]`)
        switch (ans) {
            case ans = '1':
                var total = ask(`Enter DogeCoin Needed.`)
                doco += abs(total);
                dc.innerHTML = `DogeCoin: ${doco}`;
                localStorage.setItem('totalDc', doco)
                break;
            case ans = '2':
                alert("You've Found The Secret!");
                break;
        }
    }
};