const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const dc = document.querySelector('#dc');

var doco = 0;

doge.addEventListener('click', function(){
    doco += 1;
    dc.innerHTML = `DogeCoin: ${doco}`;
});

u1.addEventListener('click', function(){
    alert("Doge Factory.");
});