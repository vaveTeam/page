let notifications_home = document.getElementById('notifi-home');
let notifications_dash = document.getElementById('notifi-dash');
window.onload = getNotify();
function getNotify() {
  if (notifications_home == null) {
   notifications_dash.innerHTML = '<div class="notification --red" id="notcol2"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><h1>We are still working on our website! Tell us about the bugs <a href="https://vavebot.pl/support"><strong>here</strong></a></h1></div><div class="notification --green" id="notcol3"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><h1>Wanna help us? Boost our <a href="https://vavebot.pl/support"><strong>support server</strong></a></h1></div><div class="bottom"></div>';
  } else if (notifications_dash == null) {
   notifications_home.innerHTML = '<div class="notification --normal" id="notcol1"><h1>To new release: <strong id="countdown">loading...</strong></h1></div><div class="bottom"></div>';
  }
  console.log('%c[✓] Notifications loaded successful!', 'color: #5ac0de');
}
