function pianoPlay(key){
    console.log(key);
    switch(key){
        case 'c':
            var audio = new Audio('피아노/도.mp3');
            break;
        case 'f':
            var audio = new Audio('피아노/레.mp3');
            break;
        case 'g':
            var audio = new Audio('피아노/미.mp3');
            break;
        case 'h':
            var audio = new Audio('피아노/파.mp3');
            break;
        case 'j':
            var audio = new Audio('피아노/솔.mp3');
            break;
        case 'k':
            var audio = new Audio('피아노/라.mp3');
            break;
        case 'l':
            var audio = new Audio('피아노/시.mp3');
            break;
        case ';':
            var audio = new Audio('피아노/높은도.mp3');
            break;
        default:
            return;
    }
    audio.play();
    aniPiano(key);
};
function aniPiano(key){
    var el = document.querySelector('.' + key);
    el.classList.add('pressed');
    setTimeout(function(){
        el.classList.remove('pressed');
    }, 100);
};
function pianoPress(event){
    pianoPlay(event.key);
};
 
document.addEventListener('keypress', pianoPress);

