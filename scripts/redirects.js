let avArray = new Array('sparfy');
window.onload = chooseAv;
function chooseAv() {
	let ranType = Math.floor(Math.random() * avArray.length);
	let genL = avArray[ranType];
}