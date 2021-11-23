const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const cpwr = document.querySelector('#cpwr');
const dc = document.querySelector('#dc');

var doco = 0;
var clipo = 1

function updateDC(){
    dc.innerHTML = `DogeCoin: ${doco}`;
};

function loadData(){
    doco = parseInt(localStorage.getItem('dogco'));
    clipo = parseInt(localStorage.getItem('cpowr'));
    dc.innerHTML = `DogeCoin: ${doco}`;
    cpwr.innerHTML = `Clickpower: ${clipo}`;

};

doge.addEventListener('click', function(){
    doco += clipo;
    updateDC();
    localStorage.setItem('dogco', doco);
});

u1.addEventListener('click', function(){
    if(doco >= 100){
        doco -= 100
        updateDC();
        clipo += 1;
        localStorage.setItem('cpowr', clipo);
        cpwr.innerHTML = `Clickpower: ${clipo}`
    }
});