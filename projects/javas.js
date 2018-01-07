/* let menu = document.querySelector("#myNav");

menu.addEventListener('mouseover', openMenu);

function openMenu() {
    console.log("open menu bro");


}


 Open when someone clicks on the span element
function openNav() {
    document.querySelector("myNav").style.width = "100%";
}

Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




menu.addEventListener('mouseover', colorComes);

function colorComes() {
    console.log("broski");
    bruh.classList.add("retardcolor");
    menu.addEventListener("mouseout", colorGoes)*/
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '100%';
    document.getElementById('burger').style.visibility = 'hidden';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('burger').style.visibility = 'visible';

}
