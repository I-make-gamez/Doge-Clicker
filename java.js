const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const dc = document.querySelector('#dc');

var doco = 0;

function updateDC(){
    dc.innerHTML = `DogeCoin: ${doco}`;
};

doge.addEventListener('click', function(){
    doco += 1;
    updateDC();
});

u1.addEventListener('click', function(){
    if(doco >= 100){
        doco -= 100
        updateDC();
    }
});