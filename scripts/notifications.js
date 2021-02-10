let notifications_home = document.getElementById('notifi-home');
let notifications_dash = document.getElementById('notifi-dash');
let notifications_pars = document.getElementById('notifi-pars');

window.onload = getNotify();
function getNotify() {
    console.log('%c[?] Checking notifications system', 'color: #5ac0de')
    if (!notifications_dash) {console.log('%c[-] notifications_dash doesn\'t exist', 'color: #fc2d2d')} else { notifications_dash.innerHTML = '<div class="notification --red" id="notcol2"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><h1>We are still working on our website! Tell us about the bugs <a href="https://vavebot.pl/support"><strong>here</strong></a></h1></div><div class="notification --green" id="notcol3"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><h1>Wanna help us? Boost our <a href="https://vavebot.pl/support"><strong>support server</strong></a></h1></div><div class="bottom"></div>'; console.log('%c[+] notifications_dash loaded successful!', 'color: #00ff00') }
    if (!notifications_home) {console.log('%c[-] notifications_home doesn\'t exist', 'color: #fc2d2d')} else { notifications_home.innerHTML = '<div class="notification --black" id="notcol1"><h1>#MEDIABEZWYBORU</h1></div>'; /* '<div class="notification --normal" id="notcol1"><h1>To new release: <strong id="countdown">loading...</strong></h1></div><div class="bottom"></div>';*/ console.log('%c[+] notifications_home loaded successful!', 'color: #00ff00') }
    if (!notifications_pars) {console.log('%c[-] notifications_pars doesn\'t exist', 'color: #fc2d2d')} else { notifications_pars.innerHTML = '<div class="notification --green"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><h1>Wanna be with your server here? <a href="https://vavebot.pl/support"><strong>Apply now!</strong></a></h1></div><div class="bottom"></div>'; console.log('%c[+] notifications_pars loaded successful!', 'color: #00ff00') }
    console.log('%c[✓] All notifications checked successful & installed!', 'color: #5ac0de');
}
