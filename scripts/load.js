window.addEventListener('load', function () {
    document.getElementsByTagName('body')[0].classList.remove('blru');
});
function alrt() {alert('error')}

document.addEventListener('keydown', function(e) {
    document.getElementsByTagName('body')[0].innerHTML = '<audio id="soundclip"><source src="https://vavebot.pl/assets/audio/keypress.mp3"></source></audio>';
    document.getElementById('soundclip').play();
});

//* Block F12, Ctrl + Shift + I, Ctrl + U, Right Click
/*let body = document.getElementsByTagName('body')[0];
$(document).keydown(function (event) {
    if (event.keyCode == 123) {return false;} 
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {return false;} 
    else if (event.ctrlKey && event.keyCode == 85) {return false;}
});

$(document).on("contextmenu", function (e) {        
    e.preventDefault();
});*/
