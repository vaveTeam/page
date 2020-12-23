let avArray = new Array('sparfy');
window.onload = chooseAv;
function chooseAv() {
	let ranType = Math.floor(Math.random() * avArray.length);
	let genL = avArray[ranType];
	if (genL == 'vave') {
		document.getElementById('avFrame').src = `https://${avArray[ranType]}bot.pl/`;
		document.getElementById('avImg').style.display = 'none';
		document.getElementById('avFrame').style.display = 'block';
	} else if (genL == 'sparfy') {
		document.getElementById('color').style.backgroundColor = '#08192d';
		document.getElementById("avImg").src = `assets/ads/${avArray[ranType]}.gif`;
		document.getElementById("avImg").style.display = 'block';
		document.getElementById("avFrame").style.display = 'none';
		document.getElementById('avImg').src = `assets/ads/sparfy.gif`;
	}
}