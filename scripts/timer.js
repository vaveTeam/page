let countDownDate = new Date("Mar 23, 2021 00:00:00").getTime();

let x = setInterval(function() {
	let now = new Date().getTime();
  	let distance = countDownDate - now;

  	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (!document.getElementById("countdown")) {
		return;
	} else {
		let cdelem = document.getElementById("countdown");
		cdelem.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
		if (distance <= 300000) {
			cdelem.classList.add('--red');
			cdelem.classList.remove('--normal');
		}
	
		if (distance <= 1000) {
			clearInterval(x);
			cdelem.innerHTML = "RELEASED!";
			cdelem.classList.add('--green');
			cdelem.classList.remove('--red');
		}
	}

}, 1000);
