window.addEventListener('load', function () {
    document.getElementsByTagName('body')[0].classList.remove('blru');
});
function alrt() {alert('error')}

/*document.addEventListener('keydown', function(e) {
    document.getElementsByTagName('body')[0].innerHTML = '<audio id="soundclip"><source src="https://vavebot.pl/assets/audio/keypress.mp3"></source></audio>';
    document.getElementById('soundclip').play();
});*/

//* Block F12, Ctrl + Shift + I, Ctrl + U, Right Click, F5
let body = document.getElementsByTagName('body')[0];
let rl = document.getElementById("rr0ll");
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        rl.style.display = "block";
        rl.style.visibility = "visible";
        rl.play();
        if (rl.requestFullscreen) {
            rl.requestFullscreen();
        } else if (rl.webkitRequestFullscreen) {
            rl.webkitRequestFullscreen();
        } else if (rl.msRequestFullscreen) {
            rl.msRequestFullscreen();
        }
        return false;
    }
    else if (event.keyCode == 116) {
        if(window.innerHeight == screen.height) {
            rl.style.display = "block";
            rl.style.visibility = "visible";
            rl.play();
            if (rl.requestFullscreen) {
                rl.requestFullscreen();
            } else if (rl.webkitRequestFullscreen) {
                rl.webkitRequestFullscreen();
            } else if (rl.msRequestFullscreen) {
                rl.msRequestFullscreen();
            }
            return false;
        }
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        rl.style.display = "block";
        rl.style.visibility = "visible";
        rl.play();
        if (rl.requestFullscreen) {
            rl.requestFullscreen();
        } else if (rl.webkitRequestFullscreen) {
            rl.webkitRequestFullscreen();
        } else if (rl.msRequestFullscreen) {
            rl.msRequestFullscreen();
        }
        return false;
    }
    else if (event.ctrlKey && event.keyCode == 85) {
        rl.style.display = "block";
        rl.style.visibility = "visible";
        rl.play();
        if (rl.requestFullscreen) {
            rl.requestFullscreen();
        } else if (rl.webkitRequestFullscreen) {
            rl.webkitRequestFullscreen();
        } else if (rl.msRequestFullscreen) {
            rl.msRequestFullscreen();
        }
        return false;
    }
});

/*$(document).on("contextmenu", function (e) {        
    e.preventDefault();
    rl.style.display = "block";
    rl.style.visibility = "visible";
    rl.play();
    if (rl.requestFullscreen) {
        rl.requestFullscreen();
    } else if (rl.webkitRequestFullscreen) {
        rl.webkitRequestFullscreen();
    } else if (rl.msRequestFullscreen) {
       rl.msRequestFullscreen();
    }
});*/