let copyright = document.getElementById('footer');
copyright.innerHTML = '<p class="center">&copy; Copyright 2020 - <span id="year"></span> | vave Team - All rights reserved.</p>';
document.getElementById('year').innerHTML = new Date().getFullYear();