const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const u2 = document.querySelector('.u2');
const cpwr = document.querySelector('#cpwr');
const cps = document.querySelector('#cps');
const dc = document.querySelector('.dc');
const version = document.querySelector('.vers');

var ver = '0.2.2';
var page = window;
const ask = page.prompt;

var doco = 0;
var clipo = 1;
var clipes = 0;
var cpsok = 0;

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
    doco += Math.abs(readCookie('totalDc'));
    dc.innerHTML = `DogeCoin: ${doco}`;
    clipo += Math.abs(readCookie('clickpower'));
    cpwr.innerHTML = `Clickpower: ${clipo}`
};

function deleteData() {
    let ans = ask("Are you sure?\n[Y|N]")
    switch (ans) {
        case 'y' || 'Y':
            doco = 0;
            dc.innerHTML = `DogeCoin: ${doco}`;
            eraseCookie('totalDc');
            clipo = 1;
            cpwr.innerHTML = `Clickpower: ${clipo}`
            eraseCookie('clickpower');
            break;
        case 'n' || 'N':
            doco = doco
            clipo = clipo
    };
};

doge.addEventListener('click', function () {
    doco += clipo;
    dc.innerHTML = `DogeCoin: ${doco}`;
    createCookie('totalDc', doco, 1000)
});

u1.addEventListener('click', function () {
    if (doco >= 100) {
        doco -= 100
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipo += 1;
        createCookie('clickpower', clipo, 1000);
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

document.onkeydown = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        let ans = ask(`Hello, You've reached the admin menu.\nEnter a number [1-1]`)
        switch (ans) {
            case ans = '1':
                let total = ask(`Enter DogeCoin Needed.`)
                doco += Math.abs(total);
                dc.innerHTML = `DogeCoin: ${doco}`;

                break;
            case ans = '2':
                alert("You've Found The Secret!");
                break;
        }
    }
};