var toggle = false;

function menu() {
    var thing = document.getElementById('menu');
    if (toggle === true) {
        thing.style.left = '-260px';
        toggle = false;
    } else {
        thing.style.left = '0px';
        toggle = true;
    }
}