function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
  
var clickedTime;
var createdTime;
var reactionTime;
  
function makeBox() {
    var time = Math.random();
    time = time * 1500;
  
    setTimeout(function () {
        document.getElementById("box").style.borderRadius = "50%";
  
        var top = Math.random();
        top = top * 350;
        var left = Math.random();
        left = left * 1000;
  
        document.getElementById("box").style.top = top + "px";
        document.getElementById("box").style.left = left + "px";
        document.getElementById("box").style.border = `#fff solid 8px`;
        document.getElementById("box").style.display = "block";
        createdTime = Date.now();
    }, time);
}
  
document.getElementById("box").onclick = function () {
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    document.getElementById("reactiontime").innerHTML = reactionTime + 's';
    this.style.display = "none";
    makeBox();
};
makeBox();
  