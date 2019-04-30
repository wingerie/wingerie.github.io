function keypress(evt) {
    console.log(evt);
    if (evt.keyCode == 27 && lightbox.classList.contains("lightbox_hidden") == false) {
        close_lightbox();
    };
}

function lightbox_this(item) {
    var lightbox = document.getElementById("lightbox");
    lightbox.insertBefore(item.cloneNode(), lightbox.childNodes[0]);
    lightbox.classList.toggle("lightbox_hidden");
    lightbox.childNodes[0].classList.toggle("interactable");
    lightbox.childNodes[0].removeAttribute("onclick");

    document.getElementsByTagName("body")[0].classList.toggle("no_scroll");
    var listen = document.addEventListener('keydown', keypress);
}

function close_lightbox() {
    setTimeout((() => lightbox.removeChild(lightbox.childNodes[0])), 300);
    lightbox.classList.toggle("lightbox_hidden");

    document.getElementsByTagName("body")[0].classList.toggle("no_scroll");
}