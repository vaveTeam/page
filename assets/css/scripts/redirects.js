let avArray = new Array('sparfy', 'hurizv');
window.onload = chooseAv;
function chooseAv() {
	let ranType = Math.floor(Math.random() * avArray.length);
	let genL = avArray[ranType];
	if (genL == 'sparfy') {
		document.getElementById('ins').innerHTML = '<a target="_blank" href="https://sparfy.net"><img src="assets/ads/sparfy2.png"></a>';
	} else if (genL == 'hurizv') {
		document.getElementById('ins').innerHTML = '<a target="_blank" href="https://hurizv.pl"><img src="assets/ads/hurizv.png"></a>';
	} 
}