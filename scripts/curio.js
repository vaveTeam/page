let curio1 = new Array('Our bot has been verified as one of the first bots in Poland', 'Once our site wasn\'t very pretty', 'It wasn\'t until we had 200 servers that we introduced our own prefix', 'Our bot is the first bot in the world to have voice commands');
window.onload = myFunction();
function myFunction() {
  let ranType1 = Math.floor(Math.random() * curio1.length);
  let curioResponse = curio1[ranType1];
  document.getElementById('demo').innerHTML = curioResponse;
}
