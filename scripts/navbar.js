function rwdNavBar() {
    let a = document.getElementById("mobileNavMenu");
    if (a.classList.includes('show'))
    {
        a.className = "mobileNavMenu";
    }
    a.className += " show";
}