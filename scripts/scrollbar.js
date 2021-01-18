let progress = document.getElementById('scrollbar');
let tothei = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let prohei = (window.pageYOffset / tothei) * 100;
    progress.style.height = prohei + "%";
}