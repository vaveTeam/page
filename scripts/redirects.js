let avArray = new Array('sparfy', 'flax', 'flax');
window.onload = chooseAv;
function chooseAv() {
	let ranType = Math.floor(Math.random() * avArray.length);
	let genL = avArray[ranType];
	if (genL == 'sparfy') {
		document.getElementById('ins').innerHTML = '<a target="_blank" href="https://sparfy.net"><img src="assets/versitments/sparfy2.png"></a>';
	} else if (genL == 'flax') {
		document.getElementById('ins').innerHTML = '<a target="_blank" href="https://flaxengine.com/"><img src="assets/versitments/flax_banner1.svg"></a>';
	}
}